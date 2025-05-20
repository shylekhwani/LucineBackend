import cors from 'cors';
import express from 'express';
import { createServer } from 'http';
import { connectDB } from './Config/dbConfig.js';
import { PORT } from './Config/serverConfig.js';
import apiRouter from './Routers/apiRouter.js';


const app = express();
const server = createServer(app);


app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000"], // Allow localhost (adjust based on your frontend port)
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "x-access-token"], // Explicitly allow x-access-token
  credentials: true // If using cookies for authentication
}));


app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use(express.raw());

app.get('/ping', (req, res) => {
  return res.status(200).json({ message: 'pong' });
});

app.use('/api', apiRouter);


connectDB()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT} and DB connected`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to the database', err);
    process.exit(1); // Exit the process with failure code
  });