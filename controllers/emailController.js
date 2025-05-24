import emailQueue from '../queues/emailQueue.js';

export const queueEmail = async (req, res) => {
  const { to, subject, text } = req.body;

  await emailQueue.add('sendEmail', { to, subject, text });
  res.status(200).json({ message: 'Email job queued successfully' });
};
