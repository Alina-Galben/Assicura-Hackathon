import express from "express";
import passport from 'passport';
import './src/config/passport.config.js';
import cors from "cors";
import connectDB from "./db.js";
import authRoutes from "./src/routes/auth.routes.js";

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(passport.initialize()); // Inizializza Passport

app.use('/api/v1/auth', authRoutes);

app.get("/", (req, res) => {
    res.send('Ciao! Il server di AssicuraPoint è attivo e funzionante. 🚀')
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`✅ Server in ascolto su http://localhost:${PORT}`);
});

