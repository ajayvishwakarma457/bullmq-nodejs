import emailQueue from './queues/emailQueue.js';

const addEmailToQueue = async () => {
  await emailQueue.add('sendEmail', {
    to: 'recipient@example.com',
    subject: 'Hello from BullMQ',
    text: 'This email was sent using a background queue!'
  });

  console.log('Email job added to queue');
};

addEmailToQueue();
