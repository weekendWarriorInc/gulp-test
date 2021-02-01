<?php


    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        # Replace this email with recipient email

        $mail_to = "andriylopatka@ukr.net";

        # Sender Data
        $subject = trim($_POST["subject"]);
        $name = str_replace(array("\r","\n"),array(" "," ") , strip_tags(trim($_POST["name"])));
      
       /*  $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL); */
        $phone = trim($_POST["phone"]);
        $massage = str_replace(array("\r","\n"),array(" "," ") , strip_tags(trim($_POST["text"])));
        if(isset($_POST['feedback'])) {
            $feedback = $_POST['feedback'];
        }


        # Mail Content
        $content = "ФИО: $name\n";
       /*  $content .= "Email: $email\n"; */
       
        $content .= "Телефон: $phone\n";
        $content .= "Сообщение: $massage\n";
        $content .= "Способ связи: $feedback\n\n";

    
        # email headers.
        $headers = "From: admusepro@gmail.com";

        # Send the email.
        $success = mail($mail_to, $subject, $content, $headers);
        if ($success) {
            # Set a 200 (okay) response code.
            http_response_code(200);
            /* echo "Дякую, ми зв'яжемось з вами найближчим часом"; */
        } else {
            # Set a 500 (internal server error) response code.
            http_response_code(500);
           /*  echo "Виникла проблема з вашим надсиланням. Повторіть спробу."; */
        }

    } else {
        # Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
      /*   echo "Виникла проблема з вашим надсиланням. Повторіть спробу."; */
    }
?>
