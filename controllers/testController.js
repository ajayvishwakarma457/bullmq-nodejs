import testQueue from '../queues/testQueue.js';

export const testEmail = async (req, res) => {
  const { to, subject, text } = req.body;
  await testQueue.add('testEmail', { to, subject, text });
  res.status(200).json({ message: 'Email job added to queue' });
};
