export const testEmailJob = async (job) => {
  const { to, subject, text } = job.data;

  await job.updateProgress(10); // Starting

  console.log(`Sending email to ${to}...`);
  await job.updateProgress({ stage: "email-sent", percent: 50 });

  console.log(`Subject: ${subject}, Message: ${text}`);
  await job.updateProgress(100); // Done

  console.log(`Email sent to ${to} Subject ${subject} Message ${text}`);
  return "This is return value";
};
