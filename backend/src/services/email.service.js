import sgMail from '@sendgrid/mail';

// Impostiamo la chiave API per autenticare le nostre richieste a SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * Invia un'email di conferma registrazione.
 * @param {string} userEmail - L'indirizzo email del destinatario.
 * @param {string} token - Il token di conferma da includere nel link.
 */
export const sendConfirmationEmail = async (userEmail, token) => {
  // Costruiamo l'URL che l'utente cliccherà.
  // Nota: L'URL del frontend è un segnaposto, lo creerò in futuro.
  const confirmationUrl = `http://localhost:5170/conferma-email?token=${token}`;

  const msg = {
    to: userEmail,
    from: 'assicurapoint708@gmail.com',
    subject: 'Benvenuto in AssicuraPoint! Conferma la tua Email',
    html: `
      <h1>Ciao e benvenuto!</h1>
      <p>Grazie per esserti registrato. Per favore, clicca sul link qui sotto per attivare il tuo account:</p>
      <a href="${confirmationUrl}" target="_blank">Conferma la mia Email</a>
      <p>Se non hai richiesto tu la registrazione, ignora questa email.</p>
    `,
  };

  try {
    await sgMail.send(msg);
    console.log(`Email di conferma inviata a ${userEmail}`);
  } catch (error) {
    console.error('Errore durante l\'invio dell\'email di conferma:', error);
    // Se sara approvato il progetto l'errore andra gestito in modo più specifico
  }
};

/**
 * Invia un'email per il reset della password.
 * @param {string} userEmail - L'indirizzo email del destinatario.
 * @param {string} token - Il token di reset da includere nel link.
 */
export const sendPasswordResetEmail = async (userEmail, token) => {
  const resetUrl = `http://localhost:5170/reset-password/${token}`;

  const msg = {
    to: userEmail,
    from: 'assicurapoint708@gmail.com',
    subject: 'AssicuraPoint - Richiesta di Reset Password',
    html: `
      <h1>Hai richiesto di resettare la tua password?</h1>
      <p>Clicca sul link qui sotto per impostare una nuova password. Il link scadrà tra 10 minuti.</p>
      <a href="${resetUrl}" target="_blank">Resetta la mia Password</a>
      <p>Se non hai richiesto tu il reset, ignora questa email.</p>
    `,
  };

  try {
    await sgMail.send(msg);
    console.log(`Email di reset password inviata a ${userEmail}`);
  } catch (error) {
    console.error('Errore durante l\'invio dell\'email di reset:', error);
    // Se sara approvato il progetto l'errore andra gestito in modo più specifico
  }
};