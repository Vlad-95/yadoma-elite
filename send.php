<?php
include_once 'common.php';
include_once 'mail.php';

$next_url = '/index.html';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $config = include('.config.php');

    function get_user_choice($select_name) {
        $user_choice = 'Не определились';
        if (!empty($_POST[$select_name]) && is_array($_POST[$select_name])) {
            $user_choice = implode(', ', $_POST[$select_name]);
        }

        return $user_choice;
    }

    session_start();

    $desired_area_data = get_user_choice('desired_area');
    $desired_finish_status_data = get_user_choice('desired_finish_status');
    $desired_apartment_sizes_data = get_user_choice('desired_apartment_sizes');
    $desired_apartment_square_data = get_user_choice('desired_apartment_square');
    $desired_prices_data = get_user_choice('desired_prices');

    $special_requests = $_POST['special_requests'];
    $communication_method = $_POST['communication_method'];
    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $email = $_POST['email'];

    $subject = 'Заявка с квиза Элита';
    $mail_text = <<<EOT
От: $name
Номер телефона: $tel
Email: $email
Способ связи: $communication_method

Районы: $desired_area_data
Срок сдачи: $desired_finish_status_data
Количество комнат: $desired_apartment_sizes_data
Желаемая площадь квартиры: $desired_apartment_square_data
Планируемый бюджет: $desired_prices_data

Особые пожелания: $special_requests
EOT;

    send_mail($subject, $mail_text);

    $next_url = '/quiz-thanks.html';
}

header('Location: ' . $next_url);
die();
?>
