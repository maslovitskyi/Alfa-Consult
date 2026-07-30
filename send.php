<?php
// Разрешаем запросы (CORS) - необходимо, если фронтенд и бэкенд временно на разных адресах
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Обработка предварительного (preflight) запроса браузера
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Получаем JSON-данные из React
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, true);

if ($_SERVER['REQUEST_METHOD'] === 'POST' && $input) {
    // Очищаем данные от вредоносного кода
    $name = htmlspecialchars(strip_tags($input['name'] ?? ''));
    $phone = htmlspecialchars(strip_tags($input['phone'] ?? ''));
    $comment = htmlspecialchars(strip_tags($input['comment'] ?? ''));

    // 1. КОМУ отправляем письмо (ваша почта на Timeweb)
    $to = 'zakazbo@aa-consult.ru';
    
    // 2. Тема письма
    $subject = 'Новая заявка с сайта Аудит-Бухгалтер';
    
    // 3. Тело письма (в формате HTML)
    $message = "
    <html>
    <head>
      <title>Новая заявка</title>
    </head>
    <body style='font-family: Arial, sans-serif; color: #333;'>
      <h2 style='color: #0F2C59;'>Поступила новая заявка с сайта</h2>
      <p><strong>Имя:</strong> {$name}</p>
      <p><strong>Телефон:</strong> {$phone}</p>
      <p><strong>Комментарий:</strong><br/>" . nl2br($comment) . "</p>
    </body>
    </html>
    ";
    
    // 4. Заголовки письма
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    
    // ВАЖНО: От кого письмо. 
    // Чтобы письмо не попадало в спам, здесь должна быть почта на ВАШЕМ домене!
    $headers .= "From: no-reply@aa-consult.ru" . "\r\n"; 

    // Отправляем письмо с помощью встроенной функции mail()
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["success" => true, "message" => "Заявка успешно отправлена!"]);
    } else {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Ошибка сервера при отправке письма."]);
    }
} else {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Неверный формат запроса."]);
}
?>