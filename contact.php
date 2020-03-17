<?php

    if(isset($_POST['submit'])) {
        <title>Submitted</title>
        $name = $_POST['name'];
        $subject = $_POST['subject'];
        $mailFrom = $_POST['email'];
        $message = $_POST['message'];

        $mailTo = "joshghaden@gmail.com";
        $headers = "From: ".$mailFrom;
        $txt = $name." has sent an email to you using your contact form.\n\n".$message;

        mail($mailTo, $subject, $txt, $headers);

        header("Location: index.php?mailsend");
    }

?>