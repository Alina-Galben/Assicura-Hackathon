import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const protect = async (req, res, next) => {
  let token;

  // 1. Controlla se il token è nell'header e se inizia con "Bearer"
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // 2. Estrai il token dalla stringa "Bearer <token>"
      token = req.headers.authorization.split(' ')[1];

      // 3. Verifica il token usando il nostro segreto
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // 4. Trova l'utente nel DB usando l'ID salvato nel token
      // e allega l'oggetto utente (senza password) alla richiesta (req)
      req.user = await User.findById(decoded.id).select('-password');

      // 5. Passa al prossimo middleware o alla funzione del controller
      next();
    } catch (error) {
      console.error(error);
      return res.status(401).json({ message: 'Non autorizzato, token non valido.' });
    }
  }

  // Se non c'è nessun token nell'header
  if (!token) {
    return res.status(401).json({ message: 'Non autorizzato, nessun token fornito.' });
  }
};