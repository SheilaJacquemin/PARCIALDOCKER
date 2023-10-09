const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

// Configuración del transporte SMTP para Gmail
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'sheilajacquemin@gmail.com',
    pass: 'iphw dpln aesa adkk', // Reemplaza con la contraseña de tu cuenta de Gmail o utiliza una contraseña de aplicación
  },
});

// Detalles del correo
const mailOptions = {
  from: 'Shei <sheilajacquemin@gmail.com>',
  to: 'juanjosebrunelli@gmail.com', // Reemplaza con la dirección de correo del destinatario
  subject: 'Hola, tengo hambre',
  text: 'Este es un mensaje de prueba.',
};

// Enviar el correo
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error al enviar el correo:', error);
  } else {
    console.log('Correo enviado con éxito:', info.response);
  }
});

app.listen(4000, () => {
  console.log('Servidor escuchando en el puerto 4000');
});
