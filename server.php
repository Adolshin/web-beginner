<?php

    $name = $_POST['user-name'];
    $phone = $_POST['user-phone'];
    $street = $_POST['street'];
    $home = $_POST['home'];
    $corpus = $_POST['corpus'];
    $appartment = $_POST['appartment'];
    $floor = $_POST['floor'];
    $pay = $_POST['pay-option'];
    $message = $_POST['message'];

    $disturb = $_POST['dont-disturb']; 
    $disturb = isset($disturb) ? 'НЕТ' : 'ДА'; 

    $mail_message = '
    <html>
        <head>
            <title>Заявка</title>
        </head>
        <body>
            <h2>Заказ</h2>
            <ul>
                <li>Имя: ' . $name . '</li>
                <li>Телефон: ' . $phone . '</li>
                <li>Улица: ' . $street . '</li>
                <li>Дом: ' . $home . '</li>
                <li>Корпус: ' . $corpus . '</li>
                <li>Квартира: ' . $appartment . '</li>
                <li>Этаж: ' . $floor . '</li>              
                <li>Способ оплаты: ' . $pay . '</li>
                <li>Комментарии к заказу: ' . $message . '</li>
                <li>Нужно ли перезванивать клиенту: ' . $disturb . '</li>
            </ul>
        </body>
    </html>';

    $headers = "From: Администратор сайта <admin@loftschool.com>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('thrungpa@gmail.com', 'Заказ', $mail_message, $headers);

    $data;

    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Сообщение отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "Ошибка сервера";
    }

    echo json_encode($data);

?>