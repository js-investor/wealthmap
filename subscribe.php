<?php
// Ecomail prepojenie — zapíše kontakt do zoznamu a spustí automatizáciu.
// API kľúč je v config.php (mimo gitu), nikdy nie v HTML/JS.

require __DIR__ . '/config.php';

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

$email = trim($_POST['email'] ?? '');
$meno  = trim($_POST['meno'] ?? '');

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Neplatný email']);
    exit;
}

$payload = json_encode([
    'subscriber_data' => [
        'email'   => $email,
        'name'    => $meno,
        'surname' => '', // inak si Ecomail rozdelí viacslovné meno na meno + priezvisko
    ],
    'trigger_autoresponders' => true, // spustí nachystanú automatizáciu
    'update_existing'        => true,
    'resubscribe'            => true,
]);

$ch = curl_init('https://api2.ecomailapp.cz/lists/' . ECOMAIL_LIST_ID . '/subscribe');
curl_setopt_array($ch, [
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => $payload,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT        => 15,
    CURLOPT_HTTPHEADER     => [
        'Content-Type: application/json',
        'key: ' . ECOMAIL_API_KEY,
    ],
]);
$response = curl_exec($ch);
$status   = curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
curl_close($ch);

if ($response === false || $status < 200 || $status >= 300) {
    http_response_code(502);
    echo json_encode(['ok' => false, 'error' => 'Ecomail nedostupný, skús to ešte raz.']);
    exit;
}

echo json_encode(['ok' => true]);
