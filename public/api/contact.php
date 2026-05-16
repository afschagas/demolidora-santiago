<?php
/**
 * Envio do formulário de contato — Hostinger (mail() na mesma hospedagem).
 * Rota: POST /api/contact.php
 */
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowedOrigins = [
    'https://demolidorasantiago.com.br',
    'https://www.demolidorasantiago.com.br',
    'http://localhost:5173',
    'http://127.0.0.1:5173',
];

if ($origin !== '' && in_array($origin, $allowedOrigins, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}

header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Método não permitido.']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw ?: '', true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['message' => 'Dados inválidos.']);
    exit;
}

if (!empty($data['_honey'])) {
    echo json_encode(['success' => true]);
    exit;
}

$nome = trim((string) ($data['Nome completo'] ?? ''));
$email = trim((string) ($data['E-mail'] ?? ''));
$telefone = trim((string) ($data['Telefone / WhatsApp'] ?? ''));
$cidade = trim((string) ($data['Cidade / obra'] ?? ''));
$assunto = trim((string) ($data['Tipo de serviço'] ?? ''));
$mensagem = trim((string) ($data['Mensagem'] ?? ''));

if ($nome === '' || $email === '' || $telefone === '' || $mensagem === '') {
    http_response_code(422);
    echo json_encode(['message' => 'Preencha os campos obrigatórios.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['message' => 'E-mail inválido.']);
    exit;
}

$to = 'contato@demolidorasantiago.com.br';
$mailSubject = trim((string) ($data['_subject'] ?? ''));
if ($mailSubject === '') {
    $mailSubject = 'Orçamento pelo site — ' . $nome;
}

$pageUrl = trim((string) ($data['_url'] ?? ''));
$ident = trim((string) ($data['Identificação'] ?? ''));

$bodyLines = [
    $ident !== '' ? $ident : 'Solicitação de orçamento — Demolidora Santiago',
    '',
    'Nome completo: ' . $nome,
    'E-mail: ' . $email,
    'Telefone / WhatsApp: ' . $telefone,
    'Cidade / obra: ' . ($cidade !== '' ? $cidade : '—'),
    'Tipo de serviço: ' . ($assunto !== '' ? $assunto : '—'),
    '',
    'Mensagem:',
    $mensagem,
];

if ($pageUrl !== '') {
    $bodyLines[] = '';
    $bodyLines[] = 'Enviado em: ' . $pageUrl;
}

$body = implode("\n", $bodyLines);

/** Caixa real no Hostinger — melhora SPF/DKIM que noreply@ inexistente. */
$from = 'contato@demolidorasantiago.com.br';
$headers = implode("\r\n", [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Demolidora Santiago <' . $from . '>',
    'Reply-To: ' . $nome . ' <' . $email . '>',
    'X-Priority: 3',
]);

$encodedSubject = '=?UTF-8?B?' . base64_encode($mailSubject) . '?=';
/** -f alinha o envelope sender com o domínio (menos chance de spam). */
$sent = @mail($to, $encodedSubject, $body, $headers, '-f ' . $from);

if (!$sent) {
    http_response_code(500);
    echo json_encode([
        'message' => 'Não foi possível enviar o e-mail no servidor. Use o WhatsApp.',
    ]);
    exit;
}

echo json_encode(['success' => true]);
