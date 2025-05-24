import notificationQueue from '../queues/notificationQueue.js';

export const sendNotification = async (req, res) => {
  const { to, message } = req.body;

  await notificationQueue.add('send-notification', {to,message,});

  res.status(200).json({ message: 'Notification job added to queue' });
};
