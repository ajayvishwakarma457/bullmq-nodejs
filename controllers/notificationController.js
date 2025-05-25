import notificationQueue from '../queues/notificationQueue.js';

export const sendNotification = async (req, res) => {
  const { to, message, delayInSeconds = 0 } = req.body;
  await notificationQueue.add('send-notification', {to,message,}, {delay: delayInSeconds * 1000}); // delay in ms
  res.status(200).json({ message: 'Notification job added to queue' });
};
