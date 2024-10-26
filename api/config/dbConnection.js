import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const dbConnection = async () => {
   try {
       if (!process.env.DB_URL) {
           console.log("DB_URL is not defined in .env file");
           return;
       }
       await mongoose.connect(process.env.DB_URL);
       console.log('Database connected successfully...');
   } catch (error) {
       console.log("Error in database connection:", error);
   }
}

export default dbConnection;
