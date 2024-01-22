const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  //1) Create a transporter
  const transporter = nodemailer.createTransport({
    // service: 'Gmail',
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    // Activate in gmail "less secure app" option
    // gmail is not optimized for sending emails for a production application
  });

  //2) Define the email options
  const mailOptions = {
    from: 'Anshuman Mishra <hello@anshuman.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
    // html:
  };

  //3) Actually send the email
  transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
