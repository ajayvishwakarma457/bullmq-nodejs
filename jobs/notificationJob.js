export const notificationJob = async (job) => {
   const { to, message } = job.data;
   console.log(`📲 Sending notification to: ${to}`);
   console.log(`Message: ${message}`);
};
