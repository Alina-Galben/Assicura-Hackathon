# 🚀 AssicuraPoint — Hackathon Project

Repository ufficiale del progetto **AssicuraPoint** per l’Hackathon.  
Obiettivo: creare un **MVP** che renda il mondo assicurativo **più semplice, umano e moderno**, integrabile nel software reale **Spaidy** (Assicura Point + F3 Labs).

---

## 🔍 Brief di progetto

Il settore assicurativo è da sempre considerato **complesso, burocratico e poco incline al cambiamento**.  
Assicura Point e F3 Labs vogliono cambiare questo approccio coinvolgendo gli studenti in un progetto reale di **open innovation**.  

📌 Non è una simulazione.  
📌 Non è un esercizio.  
📌 È un vero incarico professionale, con obiettivi concreti e possibilità di futuro inserimento in azienda.  

### Obiettivi principali
- Migliorare l’esperienza cliente e consulente assicurativo.  
- Creare interfacce semplici e coinvolgenti.  
- Semplificare la consulenza assicurativa e il processo di vendita.  
- Integrare AI, chatbot, voice assistant, AR o altre interfacce evolute.  
- Introdurre elementi di gamification e polizze modulari su misura.  

---

## 💡 La nostra idea

L’idea è costruire una **web app assicurativa** centrata sul cliente, modulare e scalabile.  
L’app avrà un **onboarding guidato in stile chat (chat-wizard)** che raccoglie i dati in modo semplice ed empatico, mostrerà proposte di polizze chiare e personalizzate e userà **gamification** per stimolare l’interazione.

### Funzionalità chiave
- **Onboarding interattivo (Chat-Wizard)**: Un percorso guidato che sembra una vera conversazione. Invece di compilare moduli noiosi, l’utente risponde a domande semplici come se stesse chattando con un consulente reale. In pochi minuti si ottiene un profilo assicurativo personalizzato, senza stress né tecnicismi.  
- **Motore polizze modulari**: Come costruire con i Lego: l’utente può scegliere i blocchi di copertura che gli servono davvero — auto, casa, salute, viaggio — e assemblarli per creare la sua polizza perfetta. Ogni pezzo aggiunto aggiorna in tempo reale prezzo e vantaggi, così il cliente vede sempre cosa ottiene.  
- **Micro-polizze on-demand**: Non più assicurazioni rigide e annuali: qui le coperture si accendono quando servono. Vuoi proteggere il tuo smartphone solo per il weekend? O attivare una polizza sci per due giorni? Bastano pochi click e sei coperto, pagando solo il necessario.  
- **Gamification**: L’assicurazione diventa finalmente interessante! Badge, missioni e punti premiano ogni azione positiva: completare il profilo, scoprire rischi nascosti, attivare coperture utili. L’utente diventa protagonista del proprio percorso di protezione, trasformando un dovere in una sfida motivante.  
- **Simulatori educativi 3D**: Gli incidenti e i rischi prendono vita davanti agli occhi dell’utente. Con ricostruzioni animate e scenari realistici, si capisce subito l’impatto di non avere una copertura. Non più clausole incomprensibili, ma esperienze immersive che insegnano con immagini ed emozioni.  
- **Storico assicurativo digitale**: Tutta la storia assicurativa in un’unica cartella digitale: polizze attive, sinistri passati, classe di merito. Portabile ovunque tramite QR code, permette al cliente di cambiare compagnia senza perdere vantaggi o dover ricominciare da zero. Trasparenza totale, zero sorprese.  
- **Antifrode con blockchain e biometria**: Un sistema a prova di truffa: riconoscimento biometrico, documenti certificati e registrazione su blockchain di ogni passaggio critico. Così i clienti hanno fiducia e le compagnie riducono frodi e costi nascosti. La sicurezza diventa un valore condiviso.  
- **Marketplace servizi**: Non solo polizze: nell’app si trovano servizi utili come check-up medici, manutenzione auto o casa, prenotazioni veloci. Tutto integrato e, in alcuni casi, pagabile anche con i punti guadagnati nella gamification. Un ecosistema completo di protezione e benessere.
- **Interfaccia semplificata per l’accessibilità**: Un’assicurazione davvero per tutti. Abbiamo pensato a una versione del sito con navigazione facilitata per chi trova difficile usare le piattaforme tradizionali: anziani, stranieri, persone con poca dimestichezza digitale o con difficoltà cognitive. 👉 Testi brevi e chiari, icone grandi, emoji intuitive, traduzione istantanea in più lingue e guida passo-passo.
Così anche chi oggi si sente escluso dal digitale può finalmente muoversi con sicurezza e comprendere ogni passaggio della propria assicurazione.
- **Inclusività e accessibilità**: Un’interfaccia pensata davvero per tutti: testi semplici, emoji, traduzioni multilingua e assistente vocale che spiega ogni passaggio. Perfetta per giovani, anziani e chi non conosce bene l’italiano. L’assicurazione finalmente diventa comprensibile e inclusiva.
- **Assistente vocale di emergenza “SOS”**: La sicurezza inizia con una sola parola. Immagina di avere un incidente o un imprevisto: ti basta dire ad alta voce “Assicurazione SOS” e l’app si attiva da sola. 👉 Chiama automaticamente i soccorsi, avvia la procedura di sinistro e, se previsto, avvisa i contatti di emergenza. È come avere un allarme antifurto personale sempre con te: discreto ma pronto ad attivarsi al momento giusto. Una funzione mai vista prima nel settore assicurativo, capace di salvare vite e ridurre drasticamente i tempi di intervento.

---

## 🛠️ Tecnologie proposte

### Frontend
- **React** + React Router DOM  
- **TailwindCSS** per design moderno e responsive  
- **Axios** per chiamate API  
- **Three.js/WebGL** per simulatori 3D  
- **Framer Motion** per animazioni  
- **Web Speech API** per assistente vocale  
- **i18n** per traduzioni e accessibilità  

### Backend
- **Node.js** + **Express**  
- **MongoDB** (Mongoose) come database primario  
- **JWT** + OAuth2 (Google, Facebook) per autenticazione  
- **Multer** per upload documenti  
- **SendGrid** per invio email (recupero password, notifiche)  
- **Socket.io** per notifiche real-time  
- **Stripe/PayPal API** per pagamenti on-demand  
- **BullMQ/Redis** per job queue e processi asincroni  
- **Blockchain API** per antifrode e token assicurativi  

---

## 📂 Struttura della repository

```
/docs        → documenti, presentazioni (Word, PDF, Canva, PPTX)
/frontend    → applicazione React (UI, wizard, dashboard)
/backend     → server Node.js + Express (API, database, auth)
/.github     → workflow CI e template PR/issue
README.md    → questo file
.env.example → variabili ambiente di esempio (senza credenziali reali)
```

---

## 🤝 Flusso di lavoro

### Branching
- **main** → branch stabile e protetto, non modificabile direttamente.  
- Ogni attività su branch dedicati:  
  - `docs/presentazione`  
  - `feature/auth-backend`  
  - `feature/login-frontend`  

### Workflow
1. **Clona la repo**
   ```bash
   git clone https://github.com/<org-or-user>/assicura-hackathon.git
   cd assicura-hackathon
   ```

2. **Crea un nuovo branch**
   ```bash
   git checkout -b feature/nome-feature
   ```

3. **Fai commit chiari**
   ```bash
   git add .
   git commit -m "feat: descrizione breve della modifica"
   git push origin feature/nome-feature
   ```

4. **Apri una Pull Request**
   - Confronta il branch con `main`.  
   - Richiedi review prima del merge.  

---

## ⚙️ Setup ambiente

### Variabili ambiente
Copia il file `.env.example` in `.env` e compila i valori.  
Le credenziali reali non vanno mai pushate.

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

---

## 📑 Note

- Tutti i file Word, PDF e presentazioni devono essere caricati in `/docs/`.  
- La presentazione finale deve essere in PDF dentro `/docs/`.  
- I commit devono seguire lo standard Conventional Commits (`feat:`, `fix:`, `docs:`).  

---

## 👥 Team

- **Alina Galben** (@Alina-Galben) — Full-Stack Developer, architettura frontend/backend.  
- **Martina Fantuzzi** (@marty957, fantuzzimartina@yahoo.it) — Chatbot developer, AI integration, user interaction design.  
