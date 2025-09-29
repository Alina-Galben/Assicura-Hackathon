import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db.js";
import authRoutes from "./src/routes/auth.routes.js";

// Carichiamo le variabili d'ambiente dal file .env.local
dotenv.config({ path: '.env.local' });

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/v1/auth', authRoutes);

app.get("/", (req, res) => {
    res.send('Ciao! Il server di AssicuraPoint è attivo e funzionante. 🚀')
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`✅ Server in ascolto su http://localhost:${PORT}`);
});

