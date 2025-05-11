const {Queue} = require('bullmq');

const notificationQueue = new Queue('email-queue', {
    connection: {
        host: 'localhost',  // use Docker host IP if different
        port: 6379          // default Redis port
    }
});


async function init() {
    const res = await  notificationQueue.add('email to ram', {
            email:'ram.dev', 
            subject:'Welcome message', 
            body: 'Hey ram, Welcome'
        });

    console.log('Job added to queue', res.id);
}

init();