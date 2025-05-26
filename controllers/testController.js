import testQueue from '../queues/testQueue.js';

export const testEmail = async (req, res) => {
  const { to, subject, text } = req.body;
  
  await testQueue.add('testEmail', 
    { to, subject, text }, 
    {
      // removeOnComplete: true
      // removeOnComplete: 2
    }
  );

  // const name = 'jobName';
  // await testQueue.addBulk([
  //   { name, data: { paint: 'car' } },
  //   { name, data: { paint: 'house' } },
  //   { name, data: { paint: 'boat' } },
  //   { name, data: { paint: 'car' } },
  //   { name, data: { paint: 'house' } },
  //   { name, data: { paint: 'boat' } },
  // ]);

  res.status(200).json({ message: 'Email job added to queue' });
};
