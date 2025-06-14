import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
export const connectDB = async () => {
    try {
        if (process.env.MONGO_URI) {
            await mongoose.connect(process.env.MONGO_URI);
            console.log("Connected to MongoDB");
        } else {
            console.log("MONGO_URI is not defined");
        }
    } catch (error) {
        console.log(error);
    }
}
