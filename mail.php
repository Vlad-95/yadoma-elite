<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

include_once 'common.php';

function send_mail($subject, $mail_text) {
    $config = include('.config.php');

    $mail = new PHPMailer();
    $mail->isSMTP();
    $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'base64';
    $mail->Host = $config['smtp_host'];
    $mail->SMTPAuth = True;
    $mail->Username = $config['smtp_username'];
    $mail->Password = $config['smtp_password'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = $config['smtp_port'];

    $mail->setFrom($config['mail_from'], $config['mail_from_name']);

    foreach ($config['mail_to'] as $mail_to_address) {
        $mail->addAddress($mail_to_address);
    }

    $mail->Subject = $subject;
    $mail->Body = $mail_text;

    log_to_file("Отправляем письмо на " . implode(', ', $config['mail_to']) . "; содержимое:\n{$mail_text}");
    try {
        $mail->send();
    } catch (Exception $e) {
        log_to_file("Ошибка отправки письма: {$mail->ErrorInfo}");
    }

    return 0;
}

?>
