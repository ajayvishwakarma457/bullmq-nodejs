import nodemailer from 'nodemailer';

export const sendEmailJob = async (job) => {
  const { to, subject, text } = job.data;

  const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: 'info@astaracademy.in',
        pass: 'dvavyndfutaobjsr'
    }
  });

  await transporter.sendMail({
    from: '"Queue Mailer" info@astaracademy.in',
    to,
    subject,
    text
  });

  console.log(`Email sent to ${to}`);
};
