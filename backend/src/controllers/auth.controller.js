import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { sendConfirmationEmail } from '../services/email.service.js';

// Funzione che gestisce la registrazione degli utenti
export const register = async (req, res) => {
  try {

    // 1. Estrarre i dati dal corpo della richiesta
    const { name, email, password, confirmPassword } = req.body;


    // 2. Validare i dati in arrivo
    
    // Controllo semplice per verificare che tutti i campi obbligatori siano presenti
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: 'Tutti i campi sono obbligatori.' });
    }

    // Controllo semplice per verificare che la password e la conferma della password corrispondano
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Le password non corrispondono.' });
    }

    // Espressione regolare per verificare la complessità della password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    // Controllo per verificare che la password soddisfi i requisiti di sicurezza
    if (!passwordRegex.test(password)) {
      return res.status(400).json({ message: 'La password deve essere di almeno 8 caratteri e contenere almeno una lettera maiuscola, una minuscola, un numero e un simbolo speciale (@$!%*?&).' 
      });
    }


    // 3. Controllare se un utente con questa email esiste già nel database.
    
    // Cerchiamo nel database un utente che abbia l'email fornita.
    const existingUser = await User.findOne({ email });

    // Se troviamo un utente (cioè, existingUser non è nullo), significa che l'email è già in uso.
    if (existingUser) {
      return res.status(409).json({ message: 'L\'indirizzo email è già registrato.' });
    }

    // 4. Se l'utente non esiste, utilizziamo bcrypt per fare l'hashing della password
    
    // Generiamo un "salt", ovvero una stringa casuale da aggiungere alla password
    // per renderla ancora più sicura 10 è il "costo" del calcolo, un valore standard.
    const salt = await bcrypt.genSalt(10);
    
    // Usiamo il salt per creare l'hash della password.
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // 5. & 6. CREAZIONE E SALVATAGGIO DEL NUOVO UTENTE

    // Creare un nuovo utente usando il nostro modello User.
    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });

    // 8. Generare un token di conferma e salvarlo nel documento dell'utente
    
    // 8.1 Generiamo un token di conferma email unico
    const confirmationToken = crypto.randomBytes(32).toString('hex');

    
    // 8.2 Salviamo il token nel documento dell'utente
    newUser.confirmationToken = confirmationToken;

    // Salvare il nuovo utente nel database.
    await newUser.save();

    // 8.3 Invia l'email di conferma
    // Chiamiamo il nostro nuovo servizio email dopo aver salvato l'utente in modo asincrono
    await sendConfirmationEmail(newUser.email, confirmationToken);

    // 7. Inviare una risposta di successo al client.
    res.status(201).json({ message: 'Registrazione iniziata con successo! Controlla la tua email per la conferma.' });

  } catch (error) {
    // Se si verifica un qualsiasi errore durante il processo, lo catturiamo qui.
    console.error("Errore durante la registrazione:", error);
    res.status(500).json({ message: 'Errore interno del server.' });
  }
};

// FUNZIONE PER GESTIRE IL LOGIN
export const login = async (req, res) => {
  try {
    // 1. ESTRAZIONE E VALIDAZIONE DEI DATI
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email e password sono obbligatorie.' });
    }

    // 2. CERCA L'UTENTE NEL DATABASE
    // Utilizziamo .select('+password') per includere esplicitamente la password nella ricerca,
    // dato che nel modello l'avevamo nascosta di default.
    const user = await User.findOne({ email }).select('+password');

    // Se non troviamo l'utente, inviamo un errore generico per sicurezza.
    if (!user) {
      return res.status(401).json({ message: 'Credenziali non valide.' });
    }

    // 3. CONFRONTA LA PASSWORD
    // Usiamo bcrypt.compare per confrontare la password inviata dall'utente
    // con l'hash che abbiamo salvato nel database.
    const isMatch = await bcrypt.compare(password, user.password);

    // Se le password non corrispondono, inviamo lo stesso errore generico.
    if (!isMatch) {
      return res.status(401).json({ message: 'Credenziali non valide.' });
    }

    // 4. GENERAZIONE DEL TOKEN JWT
    // Creiamo il "payload", ovvero i dati che vogliamo inserire nel token.
    // L'ID dell'utente è sufficiente per identificarlo.
    const payload = {
      id: user._id
    };

    // "Firmiamo" il token usando il nostro segreto e impostiamo una scadenza (es. 1 ora).
    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // 5. LOGIN AVVENUTO CON SUCCESSO
    res.status(200).json({ 
        message: 'Login avvenuto con successo!',
        token: token // Inviamo il token al client.
    });

  } catch (error) {
    console.error("Errore durante il login:", error);
    res.status(500).json({ message: 'Errore interno del server.' });
  }
};

// Funzione per ottenere il profilo dell'utente loggano
export const getMyProfile = async (req, res) => {
  // Grazie al middleware, abbiamo già l'utente in req.user!
  // Non dobbiamo cercarlo di nuovo.
  res.status(200).json(req.user);
};

// Funzione per confermare l'email dell'utente
export const confirmEmail = async (req, res) => {
  try {
    // 1. Estrai il token dai parametri dell'URL
    const { token } = req.params;

    // 2. Cerca un utente con quel token di conferma
    const user = await User.findOne({ confirmationToken: token });

    // 3. Se non trovi nessun utente, il token non è valido o è già stato usato
    if (!user) {
      return res.status(404).json({ message: 'Token di conferma non valido o scaduto.' });
    }

    // 4. Se l'utente viene trovato, aggiorna il suo stato
    user.isEmailConfirmed = true;
    user.confirmationToken = undefined; // Rimuovi il token per sicurezza (non può essere riutilizzato)

    // 5. Salva le modifiche nel database
    await user.save();

    // 6. Invia una risposta di successo
    // Quando avro il FrontEnd reindirizzero l'utente a una pagina di login.
    res.status(200).json({ message: 'Email confermata con successo! Ora puoi effettuare il login.' });

  } catch (error) {
    console.error("Errore durante la conferma dell'email:", error);
    res.status(500).json({ message: 'Errore interno del server.' });
  }
};

// Funzione googleCallback che, proprio come il login normale, genera un token JWT
export const googleCallback = (req, res) => {
  // L'utente è stato autenticato da Passport e si trova in req.user
  const payload = { id: req.user._id };

  const token = jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
  
  // Quando avro il frontend reindirizzerò l'utente al frontend passandogli il token
  res.status(200).json({
    message: 'Autenticazione Google avvenuta con successo!',
    token: token
  });
};

// NUOVA funzione per il callback di Facebook è identica a quella di Google.
export const facebookCallback = (req, res) => {
  // L'utente è stato autenticato da Passport e si trova in req.user
  const payload = { id: req.user._id };

  const token = jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.status(200).json({
    message: 'Autenticazione Facebook avvenuta con successo!',
    token: token
  });
};

// Funzione per il logout
export const logout = async (req, res) => {
  // Con un sistema basato su JWT, il server non deve fare nulla.
  // La cancellazione del token è responsabilità del client.
  // Inviamo semplicemente una risposta di successo.
  res.status(200).json({ message: 'Logout avvenuto con successo.' });
};