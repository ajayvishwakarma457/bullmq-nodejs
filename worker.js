const { Worker } = require('bullmq');

const worker = new Worker('email-queue',
  async (job) => {
    const sendEmail = () => new Promise((res) => setTimeout(res, 5000));
    console.log(`Message rec id: ${job.id}`);
    console.log('Processing message');
    console.log(`Sending email to ${job.data.email}`);
    await sendEmail();
    console.log('Email sent');
  },
  {
    connection: {
      host: 'localhost',  // use Docker host IP if different
      port: 6379          // default Redis port
    }
  }
);
