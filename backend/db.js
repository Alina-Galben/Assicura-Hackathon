import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('🎉 Connessione a MongoDB Atlas avvenuta con successo!');
  } catch (error) {
    console.error('❌ Errore durante la connessione a MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectDB;
