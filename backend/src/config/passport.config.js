import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import User from '../models/user.model.js';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/v1/auth/google/callback', // L'URL a cui Google ci reindirizza
    },
    async (accessToken, refreshToken, profile, done) => {
      // Questa funzione viene chiamata dopo che l'utente si è autenticato con Google
      try {
        // 1. Controlla se l'utente esiste già nel nostro DB tramite il suo Google ID
        let user = await User.findOne({ googleId: profile.id });

        if (user) {
          // Se l'utente esiste, procedi
          return done(null, user);
        } else {
          // 2. Se l'utente non esiste, creane uno nuovo
          user = await User.create({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            isEmailConfirmed: true, // L'email di Google è già verificata
          });
          return done(null, user);
        }
      } catch (error) {
        return done(error, false);
      }
    }
  )
);


passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: '/api/v1/auth/facebook/callback',
      profileFields: ['id', 'displayName', 'emails'], // Chiediamo a Facebook questi campi
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // La logica è identica a quella di Google, ma usa facebookId
        let user = await User.findOne({ facebookId: profile.id });

        if (user) {
          return done(null, user);
        } else {
          user = await User.create({
            facebookId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            isEmailConfirmed: true,
          });
          return done(null, user);
        }
      } catch (error) {
        return done(error, false);
      }
    }
  )
);
