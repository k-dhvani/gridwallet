
import express from 'express';
import dbConnection from './config/dbConnection.js';
import dotenv from 'dotenv';
import routers from './routes/index.js';
import cookieParser from 'cookie-parser';
import path from 'path';

const app = express();
dotenv.config();

const __dirname = path.resolve();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/client/dist')));

// Routers
app.use('/api/v1', routers);

app.get('/', (req, res) => {
  return res.status(200).json({success:true,message:"Welcome to GridWallet"})
});

app.get('*',(req,res)=>{
  return res.status(500).json({success:false,message:'You are in wrong URL.'})
})

// Error Handling Middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

const PORT = process.env.PORT
// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  dbConnection();
});
