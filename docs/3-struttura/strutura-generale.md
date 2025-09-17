# 🚀 AssicuraPoint – Hackathon Project

**AssicuraPoint** è una piattaforma assicurativa digitale che unisce innovazione, empatia e tecnologia.  
L’obiettivo è semplificare il mondo delle assicurazioni, offrendo un’esperienza chiara, coinvolgente e personalizzata sia per i clienti che per i consulenti.  

Questa architettura descrive un MVP solido ma **estendibile** nel tempo.

---

## 🌍 Visione

Trasformare l’assicurazione da un processo complesso e burocratico in un **percorso semplice, interattivo e umano**.  
Il cliente non deve sentirsi perso: grazie a strumenti digitali intuitivi, può capire i propri bisogni, attivare coperture su misura e gestire ogni aspetto in autonomia.

- **Ridurre complessità**: dal gergo assicurativo a un dialogo chiaro e guidato.  
- **Personalizzazione reale**: suggerimenti basati su profilo, contesto, emozioni e momenti di vita.  
- **Trasparenza**: contratti “zero burocrazia” e tracciabilità (anche su blockchain).  
- **Efficienza**: strumenti per clienti e consulenti che riducono tempi e attriti.

---

## 🏗️ Architettura Generale - Panoramica delle Macro-Aree

La piattaforma è divisa in **3 macro-aree**, tutte collegate allo stesso backend:

| Macro-Area | Categoria | Funzionalità Chiave |
|------------|-----------|--------------|
| **🌐 Area Pubblica - Attrarre e Convertire** | *Consulenza Empatica e Educazione* | - Consulente Digitale Empatico <br> - Analisi Emozionale del Cliente <br> - Mappa Predittiva dei Rischi <br> - Simulatore Crisi Interattivo 3D <br> - Interfaccia Semplificata per l’Accessibilità |
| 🌐 **Area Pubblica - Attrarre e Convertire** | *Marketing Esperienziale e Leve Psicologiche* | - Premio di Benvenuto <br> - Programma “Invita un Amico” <br> - Missioni di Attivazione con Sconto <br> - Storie di Clienti Veri <br> - Offerta “Proteggi Ora, Paga Dopo” <br> - Copertura Bonus Inclusa |
| 📊 **Area Privata - Dashboard Clienti** | *Gestione Polizze Dinamica e Flessibile* | - Costruttore di Polizze Modulari (Lego) <br> - Polizze Adattive <br> - Marketplace di Micro-Polizze On-Demand <br> - Contratti Zero Burocrazia <br> - Polizza Vita Digitale |
| 📊 **Area Privata - Dashboard Clienti** | *Engagement e Fidelizzazione* | - Sistema di Gamification Clienti <br> - Percorso Assicurativo Narrativo ("RPG") <br> - Network Sociale Assicurativo <br> - Marketplace Servizi Partner <br> - Leaderboard Sicurezza |
| 📊 **Area Privata - Dashboard Clienti** | *Gestione Sinistri Semplificata* | - Ricostruzione Sinistro 3D <br> - Antifrode Biometria + Blockchain <br> - Assistente Vocale SOS |
| 📊 **Area Privata - Dashboard Clienti** | *Trasparenza e Portabilità* | - Storico Assicurativo Portabile |
| 👨‍💼 **Portale Consulenti – Potenziare la Rete Interna** (Sviluppare in futuro se serve) | *CRM Potenziato* | - Dashboard Cliente 360° <br> - Gestione Centralizzata Pratiche |
| 👨‍💼 **Portale Consulenti – Potenziare la Rete Interna** (Sviluppare in futuro se serve) | *Gamification Agenti* | - Gamification Consulenti <br> - Dashboard Analitica e Report |

---

## 🏗️ Architettura Tecnica

### 🎨 Frontend

- **Stack**:
![React](https://img.shields.io/badge/React-20232A?style=plastic&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=plastic&logo=react-router&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=plastic&logo=tailwind-css&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=plastic&logo=redux&logoColor=white) 
- **3D**:
![Three.js](https://img.shields.io/badge/Three.js-black?style=plastic&logo=three.js&logoColor=white)
![React Three Fiber](https://img.shields.io/badge/React_Three_Fiber-000000?style=plastic&logo=react&logoColor=white)
- **Voce**: (comandi, dettatura)
![Web Speech API](https://img.shields.io/badge/Web_Speech_API-4285F4?style=plastic&logo=google&logoColor=white)  
- **Accessibility**:
![Semantic HTML](https://img.shields.io/badge/Semantic_HTML-FF9800?style=plastic&logo=html5&logoColor=white)
![WAI-ARIA](https://img.shields.io/badge/WAI--ARIA-3E8E41?style=plastic&logo=w3c&logoColor=white)
![High Contrast Mode](https://img.shields.io/badge/High_Contrast_Mode-000000?style=plastic&logo=css3&logoColor=white)
![i18n](https://img.shields.io/badge/i18n-0052CC?style=plastic&logo=google-translate&logoColor=white)  
- **Pattern**:
![Atomic Design](https://img.shields.io/badge/Atomic_Design-673AB7?style=plastic&logo=storybook&logoColor=white)
![UI State Machine](https://img.shields.io/badge/UI_State_Machine-1E88E5?style=plastic&logo=xstate&logoColor=white)  
- **Build/Tooling**:
![Vite](https://img.shields.io/badge/Vite-646CFF?style=plastic&logo=vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=plastic&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=plastic&logo=prettier&logoColor=black)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=plastic&logo=vitest&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=plastic&logo=jest&logoColor=white)
![Testing Library](https://img.shields.io/badge/Testing_Library-E33332?style=plastic&logo=testing-library&logoColor=white)  

### ⚙️ Backend

- **Runtime/Framework**:
![Node.js](https://img.shields.io/badge/Node.js-339933?style=plastic&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=plastic&logo=express&logoColor=white)  
- **API**:
![REST API](https://img.shields.io/badge/REST_API-02569B?style=plastic&logo=fastapi&logoColor=white) +
![WebSocket](https://img.shields.io/badge/WebSocket-010101?style=plastic&logo=socket.io&logoColor=white) per realtime (chat, notifiche)  
- **Autenticazione**:
![JWT](https://img.shields.io/badge/JWT-black?style=plastic&logo=JSON%20web%20tokens) (access/refresh), ![Passport.js](https://img.shields.io/badge/Passport.js-34E27A?style=plastic&logo=passport&logoColor=black) (email+password, Google, Facebook)  
- **File Upload**:
![Multer](https://img.shields.io/badge/Multer-FF6F00?style=plastic&logo=npm&logoColor=white) (documenti sinistri, allegati)  
- **Email**:
![SendGrid](https://img.shields.io/badge/SendGrid-0082C9?style=plastic&logo=sendgrid&logoColor=white) (notifiche, reset, conferme)  
- **Blockchain**:
![Ethers.js](https://img.shields.io/badge/Ethers.js-3C3C3D?style=plastic&logo=ethereum&logoColor=white)
![Web3.js](https://img.shields.io/badge/Web3.js-F16822?style=plastic&logo=web3.js&logoColor=white) (hash documenti, audit)  
- **AI/NLP**:
![AI/NLP](https://img.shields.io/badge/AI_&_NLP-4285F4?style=plastic&logo=googlecloud&logoColor=white) integrazione esterna (Google NL, IBM Watson) per sentiment ed entity; evolvibile a modelli custom  

---

## 📦 Moduli Principali

- **Auth Service**: registrazione, login, OAuth, reset, ruoli/permessi  
- **User/Profile Service**: profilo, preferenze, storico assicurativo portabile  
- **Policy Engine**: polizze modulari (pricing/validation), adattive, pay-per-use, micro-polizze  
- **Claims Service**: apertura/gestione sinistri, ricostruzione 3D, timeline, allegati  
- **Engagement Service**: gamification (punti, badge, missioni), RPG, leaderboard  
- **CRM/Analytics Service**: dashboard 360°, pratiche centralizzate, KPI, report  
- **Content Service**: storie clienti (video, testi), contenuti educativi  
- **Risk/NLP Service**: mappa rischi, sentiment/emozioni, suggerimenti personalizzati  
- **Blockchain Service**: notarizzazione hash, verifica integrità, audit immutabile  

---

## 🔌 API Principali (routing high-level)

### 🌐 Pubbliche

- `POST /api/v1/risk-assessment` – calcolo punteggio rischio (geodati, demografia, eventi)  
- `POST /api/v1/chatbot/message` – intent + sentiment + risposta guidata  
- `GET /api/v1/stories` – storytelling/testimonianze  
- `POST /api/v1/quote/preliminary` – preventivo indicativo (regole base)  

### 👤 Clienti (JWT)

- `GET /api/v1/users/me` – profilo completo  
- `GET /api/v1/users/me/insurance-history` – storico portabile  
- `GET /api/v1/policies` / `POST /api/v1/policies` – gestione polizze modulari  
- `PUT /api/v1/policies/:id` – aggiornamenti/adattività  
- `POST /api/v1/policies/micro/activate` – micro-polizze on-demand  
- `POST /api/v1/claims` / `GET /api/v1/claims/:id` – sinistri (upload, 3D, tracking)  
- `GET /api/v1/gamification/profile` / `GET /api/v1/gamification/missions`  

### 👨‍💼 Consulenti/Admin (JWT + RBAC)

- `GET /api/v1/admin/clients` / `GET /api/v1/admin/clients/:id` – vista 360° cliente  
- `GET /api/v1/admin/claims` / `PUT /api/v1/admin/claims/:id/status` – gestione sinistri  
- `GET /api/v1/admin/analytics/sales-report` / `GET /api/v1/admin/analytics/agent-performance` – analytics  
- `GET /api/v1/admin/gamification/leaderboard` – leaderboard consulenti  

---

## 🗄️ Dati & Persistenza

- **PostgreSQL (transazionale/critico)**: utenti, contratti, sinistri, pagamenti  
- **MongoDB (flessibile/dinamico)**: chat, profili rischio, configurazioni modulari, gamification, log eventi  
- **Blob Storage (S3/Cloudinary/Drive)**: allegati, video testimonianze, asset 3D  
- **Cache (Redis)**: sessioni WebSocket, rate limiting, code di background jobs  

---

## 🔒 Sicurezza & Compliance

- **Auth**: JWT a scadenza breve + refresh, rotazione token  
- **RBAC**: ruoli (utente, consulente, admin) a livello di router/controller  
- **DPIA/GDPR**: minimizzazione dati, consenso esplicito (NLP/emozioni), diritto all’oblio, portabilità  
- **Crittografia**: in transito (TLS) e a riposo (colonne sensibili)  
- **Audit**: eventi chiave notarizzati su blockchain (hash documenti, timeline sinistri)  
- **Anti-fraud**: biometria (opzionale con consenso), device fingerprint, anomaly detection  
- **Rate limiting & CSRF/CORS**: protezione API e front channel  

---

## 🚀 Deployment & DevOps

- **CI**: build/test lint su push/PR (GitHub Actions)  
- **CD**: deploy su ambienti `dev` → `staging` → `prod`  
- **Infra**:  
  - Frontend: Vercel / Netlify  
  - Backend: Render / Fly.io / Heroku (MVP) → Kubernetes (scalabilità)  
  - DB: Postgres (managed), MongoDB Atlas  
- **Observability**: logs strutturati, metrics (Prometheus/Grafana), alerting  
- **Backup & DR**: snapshot database, policy versioning, runbook incidenti  

---

## 🏆 Perché AssicuraPoint è un Progetto Unico

- ✅ **Empatico**: mette al centro il cliente, non il contratto.  
- ✅ **Accessibile**: pensato per giovani, anziani e stranieri.  
- ✅ **Innovativo**: 3D, AI, gamification e blockchain integrati.  
- ✅ **Scalabile**: architettura modulare pronta per crescere.  

---

## 👥 Team & Hackathon

- **Alina Galben** – Junior Full-Stack Developer [@Alina-Galben](https://github.com/Alina-Galben)
- **Martina Fantuzzi** - Junior Developer [@Martina-Fantuzzi](https://github.com/marty957)


Progetto sviluppato nell’ambito di un **Hackathon**, con l’obiettivo di portare una ventata di innovazione nel settore assicurativo.  
Questo README è la base di partenza per condividere la visione con **investitori, giuria, developer e partner futuri**.

---
