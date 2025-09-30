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
    from: 'assicurapoint708@gmail.com', // Usa l'email che hai verificato su SendGrid
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
    // In un'app reale, qui potresti voler gestire l'errore in modo più specifico
  }
};