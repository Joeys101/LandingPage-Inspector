<?php
  if(isset($_POST['nombre']) && isset($_POST['email']) && isset($_POST['mensaje'])) {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    // Correo electrónico donde se enviará la información del formulario
    $destinatario = 'jose.onepiece@hotmail.com';

    // Asunto del correo electrónico
    $asunto = 'Formulario de contacto';

    // Cuerpo del correo electrónico
    $cuerpo = "Nombre: $nombre\nEmail: $email\nMensaje: $mensaje";

    // Cabeceras del correo electrónico
    $headers = "From: $email\n";
    $headers .= "Reply-To: $email\n";

    // Envío del correo electrónico
    mail($destinatario, $asunto, $cuerpo, $headers);

    // Respuesta al usuario
    echo 'Gracias por contactarnos. Su mensaje ha sido enviado correctamente.';
  }
?>