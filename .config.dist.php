<?php
    return array(
        'smtp_host' => 'smtp.example.org',
        'smtp_username' => 'username',
        'smtp_password' => 'password',
        'smtp_usetls' => True,
        'smtp_port' => 587,
        'mail_from' => 'username@example.org',
        'mail_from_name' => 'Username',
        'mail_to' => [
        	'recepient@example.org',
        ],
        'log_file_location' => __DIR__ . '/.app.log'
    );
?>
