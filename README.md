# BullMQ Node.js Queue System

This project demonstrates a modular **Node.js** implementation using **BullMQ** for job queues. It supports scalable job processing with Redis, covering tasks like email sending, notifications, and generic queue testing.

---

## 📦 Features

- 🎯 Modular queue setup using **BullMQ**
- 📨 Email job processor with Redis-backed queuing
- 🔔 Notification queue with job tracking
- 🧪 Test queue for experimentation and learning
- 🧵 Job/Worker separation for scalability
- 🔄 Retry & failure handling

---

## 📁 Folder Structure

bullmq-nodejs/
├── config/
│ └── redis.js # Redis connection setup
├── controllers/
│ ├── emailController.js # Trigger email jobs
│ ├── notificationController.js
│ └── testController.js
├── jobs/
│ ├── emailJob.js # Email job definitions
│ ├── notificationJob.js
│ └── testJob.js
├── notes/
│ └── note.txt # Miscellaneous notes
├── queues/
│ ├── emailQueue.js # BullMQ Queue instance for emails
│ ├── notificationQueue.js
│ └── testQueue.js
├── routes/
│ ├── emailRoutes.js # API route to trigger email jobs
│ ├── notificationRoutes.js
│ └── testRoutes.js
├── workers/
│ ├── emailWorker.js # Job processors running in background
│ ├── notificationWorker.js
│ └── testWorker.js
├── .env # Environment config (e.g. Redis URL)
├── .gitignore
├── app.js # Main express app and route loader
├── package.json
├── package-lock.json
└── README.md


---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 14.x
- Redis server running locally or remotely

### Installation

```bash
git clone https://github.com/ajayvishwakarma457/bullmq-nodejs.git
cd bullmq-nodejs
npm install

Create a .env file:
  REDIS_URL=redis://localhost:6379
  PORT=5000

Start the Application
 node app.js

Start all workers in separate terminals or with a process manager:
  node workers/emailWorker.js
  node workers/notificationWorker.js
  node workers/testWorker.js


🔀 API Endpoints
  Route	                Method	            Description
  /email/send	          POST	              Adds email job to queue
  /notification/send	  POST	              Adds notification job
  /test/run	            POST	              Adds test job to test queue


🧰 Built With
  Node.js
  Express.js
  BullMQ – Queue management
  Redis – Job storage and processing

🧑‍💻 Author
**Author:** Ajay M Vishwakarma  
**Email:** ajayvishwakarma457@gmail.com

📄 License
  This repository is licensed under the MIT License.
  See the LICENSE file for details.
