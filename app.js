import express from 'express';
import emailRoutes from './routes/emailRoutes.js';


const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', emailRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
