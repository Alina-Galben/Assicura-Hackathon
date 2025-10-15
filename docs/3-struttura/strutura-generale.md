
# **🚀 AssicuraPoint – Hackathon Project**

**AssicuraPoint** è una piattaforma assicurativa digitale che unisce innovazione, empatia e tecnologia. L’obiettivo è semplificare il mondo delle assicurazioni, offrendo un’esperienza chiara, coinvolgente e personalizzata sia per i clienti che per i consulenti.

Questa architettura descrive un **MVP (Minimum Viable Product)** solido, basato su funzionalità di autenticazione già sviluppate, ma progettato per essere **estendibile** nel tempo secondo una roadmap progressiva.

---

## **🌍 Visione**

Trasformare l’assicurazione da un processo complesso e burocratico in un **percorso semplice, interattivo e umano**. Il cliente non deve sentirsi perso: grazie a strumenti digitali intuitivi, può capire i propri bisogni, attivare coperture su misura e gestire ogni aspetto in autonomia, sentendosi sempre supportato.

* **Ridurre la complessità**: Abbandonare il gergo assicurativo per un dialogo chiaro, guidato e accessibile a tutti, inclusi anziani e stranieri.  
* **Personalizzazione Reale**: Offrire suggerimenti basati non solo su dati anagrafici, ma anche sul profilo di rischio etico, sul contesto, sulle emozioni e sui momenti chiave della vita del cliente.  
* **Trasparenza Totale**: Introdurre contratti “zero burocrazia” che si possono interrogare in linguaggio naturale e garantire la tracciabilità delle operazioni critiche tramite tecnologie come la blockchain.  
* **Efficienza e Coinvolgimento**: Fornire strumenti per clienti e consulenti che riducono i tempi, eliminano gli attriti e trasformano un obbligo in un'esperienza motivante tramite la gamification.

---

## **🏗️ Architettura Generale \- Panoramica delle Macro-Aree**

La piattaforma è progettata attorno a **3 macro-aree strategiche**, tutte collegate a un unico backend per garantire coerenza e integrità dei dati.

| Macro-Area | Categoria | Funzionalità Chiave e Idee Innovative |
| :---- | :---- | :---- |
| **🌐 1\. Attrarre e Convertire (Portale Pubblico)** | *Consulenza Empatica e Educazione* | \- **Consulente Digitale Empatico** (con *"Specchio Emozionale"* per adattare il tono) \- **Analisi Emozionale del Cliente** (con *"Diario dei Timori"* per far emergere i bisogni) \- **Mappa Predittiva dei Rischi** (con *"Atlante dei Rischi di Quartiere"* iper-localizzato) \- **Simulatore di Crisi Interattivo 3D** (con *"La Macchina del 'Cosa Succederebbe Se...?'"*) \- **Interfaccia Semplificata per l'Accessibilità** (con *"Modalità 'Nonno Felice'"*) |
| **🌐 1\. Attrarre e Convertire (Portale Pubblico)** | *Marketing Esperienziale e Leve Psicologiche* | \- **Premio di Benvenuto** (con *"Micro-Copertura Esperienziale"* gratuita) \- **Programma “Invita un Amico”** (con *"Legame Protetto"* e coperture condivise) \- **Missioni di Attivazione con Sconto** (con *"Prevenzione Attiva"* che premia azioni concrete) \- **Storie di Clienti Veri** (con *"Archivio Sonoro delle Esperienze"* per maggiore autenticità) \- **Offerta “Proteggi Ora, Paga Dopo”** (con *"Paga con le Tue Buone Abitudini"*) \- **Copertura Bonus Inclusa** (con *"Scudo di Quartiere"* collettivo) |
| **📊 2\. Gestire i Clienti (Dashboard Cliente)** | *Gestione Polizze Dinamica e Flessibile* | \- **Costruttore di Polizze Modulari "Lego"** (con *"Mercato dei Mattoncini Usati"*) \- **Gestione Polizze Adattive** (con *"Polizza Camaleonte Georeferenziata"*) \- **Marketplace di Micro-Polizze On-Demand** (con *"Gruppi d'Acquisto Assicurativi"*) \- **Contratti Interattivi "Zero Burocrazia"** (con *"Contratto Liquido"* interrogabile) \- **Polizza per la Vita Digitale** (con *"Eredità Digitale Garantita"*) \- **Gestione Profilo Utente** (con *"Avatar del Ciclo di Vita"*) |
| **📊 2\. Gestire i Clienti (Dashboard Cliente)** | *Engagement e Fidelizzazione* | \- **Sistema di Gamification per Clienti** (con *"Badge delle Virtù"* che premiano la prudenza) \- **Percorso Assicurativo Narrativo "RPG"** (con *"La Saga della Tua Vita"* basata su eventi reali) \- **Network Sociale Assicurativo** (con *"Gruppi di Mutuo Soccorso Tematici"*) \- **Marketplace di Servizi Partner** (con *"Concierge della Prevenzione"* proattivo) \- **Leaderboard della Sicurezza** (con *"Le Olimpiadi dei Quartieri"*) |
| **📊 2\. Gestire i Clienti (Dashboard Cliente)** | *Gestione Sinistri Semplificata* | \- **Liquidazione Istantanea con IA Visiva** (per piccoli danni) \- **Ricostruzione Sinistro 3D** (con *"Scena del Sinistro Condivisa in AR"*) \- **Sistema Antifrode** (con *"DNA Digitale dell'Incidente"*) \- **Assistente Vocale di Emergenza "SOS"** (con *"SOS Predittivo"* basato su sensori) |
| **📊 2\. Gestire i Clienti (Dashboard Cliente)** | *Trasparenza e Portabilità* | \- **Storico Assicurativo Personale e Portabile** (con *"Passaporto Assicurativo Universale"*) |
| **👨‍💼 3\. Potenziare i Consulenti (Portale Interno)** | *CRM Potenziato* | \- **Dashboard Cliente a 360°** (con *"Indicatore di Serenità"* proattivo) \- **Gestione Centralizzata delle Pratiche** (con *"Timeline Predittiva"* per anticipare problemi) |
| **👨‍💼 3\. Potenziare i Consulenti (Portale Interno)** | *Gamification e Analisi* | \- **Sistema di Gamification per Consulenti** (con *"Punti Impatto Positivo"* sul cliente) \- **Dashboard Analitica e Reportistica** (con *"Mappa di Calore dei Sinistri Evitati"*) |

---

## **🏗️ Architettura Tecnica**

L'architettura riflette le tecnologie moderne scelte per l'hackathon, con una base già implementata per l'autenticazione.

### **🎨 Frontend**

**Stack Principale**:
![React](https://img.shields.io/badge/React-20232A?style=plastic&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=plastic&logo=react-router&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=plastic&logo=tailwind-css&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=plastic&logo=redux&logoColor=white) 

* **Interazioni API**: per chiamate API REST, con interceptor per la gestione automatica dei token JWT.  
* **Tecnologie Future (da Roadmap)**:
![Three.js](https://img.shields.io/badge/Three.js-black?style=plastic&logo=three.js&logoColor=white)
![React Three Fiber](https://img.shields.io/badge/React_Three_Fiber-000000?style=plastic&logo=react&logoColor=white)
![Web Speech API](https://img.shields.io/badge/Web_Speech_API-4285F4?style=plastic&logo=google&logoColor=white)
![Semantic HTML](https://img.shields.io/badge/Semantic_HTML-FF9800?style=plastic&logo=html5&logoColor=white)
![WAI-ARIA](https://img.shields.io/badge/WAI--ARIA-3E8E41?style=plastic&logo=w3c&logoColor=white)
![High Contrast Mode](https://img.shields.io/badge/High_Contrast_Mode-000000?style=plastic&logo=css3&logoColor=white)
![i18n](https://img.shields.io/badge/i18n-0052CC?style=plastic&logo=google-translate&logoColor=white)
  * **3D**: per i simulatori di crisi e la ricostruzione dei sinistri.
  * **Voce**: per l'assistente vocale "SOS".  
  * **Accessibilità**: Semantic HTML, WAI-ARIA, e librerie di internazionalizzazione (i18n).  
* **Build/Tooling**:
![Vite](https://img.shields.io/badge/Vite-646CFF?style=plastic&logo=vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=plastic&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=plastic&logo=prettier&logoColor=black)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=plastic&logo=vitest&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=plastic&logo=jest&logoColor=white)
![Testing Library](https://img.shields.io/badge/Testing_Library-E33332?style=plastic&logo=testing-library&logoColor=white)  
* **Pattern**:
![Atomic Design](https://img.shields.io/badge/Atomic_Design-673AB7?style=plastic&logo=storybook&logoColor=white)
![UI State Machine](https://img.shields.io/badge/UI_State_Machine-1E88E5?style=plastic&logo=xstate&logoColor=white) 

### **⚙️ Backend**

* **Runtime/Framework**:
![Node.js](https://img.shields.io/badge/Node.js-339933?style=plastic&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=plastic&logo=express&logoColor=white)
![REST API](https://img.shields.io/badge/REST_API-02569B?style=plastic&logo=fastapi&logoColor=white)
![WebSocket](https://img.shields.io/badge/WebSocket-010101?style=plastic&logo=socket.io&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=plastic&logo=JSON%20web%20tokens)
![Passport.js](https://img.shields.io/badge/Passport.js-34E27A?style=plastic&logo=passport&logoColor=black)
![Multer](https://img.shields.io/badge/Multer-FF6F00?style=plastic&logo=npm&logoColor=white)
![SendGrid](https://img.shields.io/badge/SendGrid-0082C9?style=plastic&logo=sendgrid&logoColor=white)
![Ethers.js](https://img.shields.io/badge/Ethers.js-3C3C3D?style=plastic&logo=ethereum&logoColor=white)
![Web3.js](https://img.shields.io/badge/Web3.js-F16822?style=plastic&logo=web3.js&logoColor=white)
![AI/NLP](https://img.shields.io/badge/AI_&_NLP-4285F4?style=plastic&logo=googlecloud&logoColor=white)  
* **Database**: con Mongoose per una gestione flessibile dei dati utente e delle polizze.  
* **API**:  
  per la comunicazione standard.  
  (futuro) per notifiche real-time.  
* **Autenticazione (Già Implementata)**: (access token) e per le strategie di login (email+password, Google, Facebook).  
* **Servizi**:  
  * **Email**: per l'invio di email transazionali (conferma registrazione, recupero password).  
  * **File Upload**: (futuro) per la gestione dei documenti dei sinistri.  
* **Tecnologie Future (da Roadmap)**:  
  * **Blockchain**: Integrazione con librerie come per la notarizzazione dei documenti.  
  * **AI/NLP**: Integrazione con servizi esterni (es. Google Cloud AI) per l'analisi del sentiment e del linguaggio naturale.

---

## **📦 Moduli di Sviluppo della Web App**

L'architettura è suddivisa in moduli funzionali, come definito nel documento di progetto, per garantire scalabilità e manutenibilità.

* **1\. Modulo Core & Identità**: Fondamento dell'applicazione con gestione utenti, autenticazione (standard, social, biometrica), profili, contratti e sistemi antifrode.  
* **2\. Modulo di Acquisizione (Acquisition)**: Strumenti interattivi per attrarre, educare e guidare i nuovi utenti (Consulente Empatico, Mappe di Rischio, Simulatori).  
* **3\. Modulo di Conversione (Conversion & Marketing)**: Leve di marketing per incentivare il primo acquisto (Premi, Missioni, Offerte, Programmi Referral).  
* **4\. Modulo Prodotto & Pricing Engine**: Il cuore del business per la definizione e personalizzazione dei prodotti (Costruttore Modulare, Polizze Adattive, Marketplace).  
* **5\. Modulo Sinistri & Emergenze (Claims)**: Funzionalità per la gestione del "momento della verità" (Apertura sinistri, Ricostruzione 3D, Assistente SOS).  
* **6\. Modulo Fedeltà & Community (Loyalty)**: Feature per mantenere il cliente attivo e coinvolto dopo l'acquisto (Gamification, RPG, Leaderboard, Marketplace Partner).  
* **7\. Modulo Portale Consulenti (Agent Portal)**: L'applicazione interna per potenziare la rete vendita (Dashboard 360°, Gamification per agenti).  
* **8\. Modulo Analytics (BI)**: Dedicato alla Business Intelligence e al monitoraggio delle performance.

---

## **🔌 API Principali (Esempi di routing)**

Le rotte API sono strutturate per riflettere i moduli e garantire la sicurezza tramite middleware.

### **🌐 Pubbliche (Senza Autenticazione)**

* POST /api/v1/auth/register: Registrazione di un nuovo utente.  
* POST /api/v1/auth/login: Login con email e password.  
* GET /api/v1/auth/google, GET /api/v1/auth/facebook: Avvio del flusso di login social.  
* POST /api/v1/auth/forgot-password: Richiesta di reset password.

### **👤 Clienti (Protette con JWT)**

* GET /api/v1/auth/profile: Recupero dei dati del proprio profilo.  
* POST /api/v1/auth/logout: Logout (lato server non necessario con JWT, ma utile per eventuali log).  
* GET /api/v1/policies: Visualizzazione delle proprie polizze.  
* POST /api/v1/claims: Apertura di una nuova pratica di sinistro.

### **👨‍💼 Consulenti/Admin (Protette con JWT \+ Ruoli)**

* GET /api/v1/admin/clients/:id: Visualizzazione della dashboard 360° di un cliente.  
* PUT /api/v1/admin/claims/:id/status: Aggiornamento dello stato di una pratica.  
* GET /api/v1/admin/analytics/performance: Accesso ai dati di performance e reportistica.

---

## **🗄️ Dati & Persistenza**

* **MongoDB**: Scelto per la sua flessibilità, è utilizzato per memorizzare dati utente, configurazioni di polizze, log di gamification e interazioni della chat.  
* **Blob Storage (futuro)**: Servizi come AWS S3 o simili per archiviare in modo sicuro documenti, allegati dei sinistri, video e asset 3D.  
* **Cache (futuro, es. Redis)**: Per gestire sessioni, rate limiting e code di processi asincroni (es. invio notifiche).

---

## **🔒 Sicurezza & Compliance**

* **Autenticazione**: Flusso sicuro basato su token JWT a scadenza, con gestione del refresh. L'autenticazione social è gestita tramite Passport.js. Le password sono protette tramite hashing con bcrypt.js.  
* **Autorizzazione**: Un middleware (protect) verifica la validità del token JWT per proteggere le rotte sensibili. In futuro, verrà esteso con un sistema basato sui ruoli (RBAC).  
* **GDPR & Privacy**: Progettazione orientata alla minimizzazione dei dati, consenso esplicito per funzionalità che trattano dati sensibili (come l'analisi emozionale) e implementazione futura dei diritti di portabilità e oblio.  
* **Sicurezza API**: Implementazione di CORS, e in futuro rate limiting per prevenire abusi.

---

## **🚀 Deployment & DevOps**

* **CI/CD**: Il progetto è predisposto per un flusso di lavoro basato su GitHub Actions per build, test e lint automatici.  
* **Infrastruttura**:  
  * **Frontend**: Attualmente sviluppato con Vite, ideale per il deploy su piattaforme come Vercel o Netlify.  
  * **Backend**: Applicazione Node.js/Express pronta per essere containerizzata e deployata su servizi come Render, Heroku o, in futuro, su un cluster Kubernetes per maggiore scalabilità.  
* **Variabili d'Ambiente**: Gestione sicura delle configurazioni tramite file .env, separati per ambiente locale e di produzione.

---

## **🏆 Perché AssicuraPoint è un Progetto Unico**

* ✅ **Empatico e Umano**: Mette al centro il cliente, le sue emozioni e i suoi bisogni reali, non il contratto.  
* ✅ **Accessibile e Inclusivo**: Progettato per essere semplice e comprensibile per tutti, dai giovani nativi digitali agli anziani, grazie a interfacce guidate e modalità di accessibilità.  
* ✅ **Innovativo e Concreto**: Integra tecnologie come IA, gamification e blockchain non come gadget, ma per risolvere problemi reali del settore: sfiducia, complessità e frodi.  
* ✅ **Scalabile e Modulare**: L'architettura è pensata per crescere in modo organico, seguendo una roadmap chiara che parte da un MVP solido per arrivare a un ecosistema assicurativo completo.

---

## **👥 Team & Hackathon**

* **Alina Galben** – Full-Stack Developer [@Alina-Galben](https://github.com/Alina-Galben)  
* **Martina Fantuzzi** \- Chatbot Developer & AI Integration [@marty957](https://github.com/marty957)

Progetto sviluppato nell’ambito di un **Hackathon**, con l’obiettivo di portare una ventata di innovazione nel settore assicurativo. Questo documento è la base di partenza per condividere la visione con **investitori, giuria, sviluppatori e partner futuri**.

---
