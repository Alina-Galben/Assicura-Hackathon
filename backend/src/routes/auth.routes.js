import express from 'express';
import { register, login, getMyProfile, confirmEmail } from '../controllers/auth.controller.js';
import { protect } from '../middleware/auth.middleware.js';

// Creiamo un'istanza del router di Express
const router = express.Router();

router.post('/register', register); // 1. Rotta per la registrazione degli utenti
router.post('/login', login); // 2. Rotta per il login degli utenti

// 4. Rotta per la conferma dell'email.
// :token è un "parametro" che cattura il valore del token direttamente dall'URL.
router.get('/confirm-email/:token', confirmEmail);

// 3. Rotta Protetta: per accedere qui, si deve passare il controllo del middleware 'protect'
router.get('/profile', protect, getMyProfile);


export default router;
