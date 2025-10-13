import express from 'express';
import passport from 'passport';
import { register, login, getMyProfile, confirmEmail, googleCallback, facebookCallback, logout, forgotPassword, resetPassword } from '../controllers/auth.controller.js';
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

// 5. Rotta per iniziare il processo di autenticazione con Google
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// 6. // Rotta di callback che Google chiama dopo l'autenticazione
router.get(
  '/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: '/login' }),
  googleCallback // La nostra funzione del controller
);

// 7. Rotte per Facebook
router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get(
  '/facebook/callback',
  passport.authenticate('facebook', { session: false, failureRedirect: '/login' }),
  facebookCallback
);

// 8. Rotta per il logout (protetta)
router.post('/logout', protect, logout);

// 9. Rotte per il recupero Password
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);


export default router;
