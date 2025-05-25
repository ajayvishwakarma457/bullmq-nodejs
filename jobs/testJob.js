export const testEmailJob = async (job) => {
  const { to, subject, text } = job.data;
  console.log(`Email sent to ${to} Subject ${subject} Message ${text}`);
};
