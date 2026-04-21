<h1 align="center">🔍 SchemeScout</h1>

<p align="center">
  <strong>Find Indian government schemes you actually qualify for — in under 2 minutes.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/MERN-Stack-blue?style=flat-square&logo=mongodb" />
  <img src="https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react" />
  <img src="https://img.shields.io/badge/Node.js-Express-green?style=flat-square&logo=node.js" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas-success?style=flat-square&logo=mongodb" />
  <img src="https://img.shields.io/badge/Deployed-Vercel-black?style=flat-square&logo=vercel" />
</p>

<p align="center">
  <a href="https://scheme-scout.vercel.app" target="_blank"><strong>🌐 Live Demo »</strong></a>
  &nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="https://github.com/Bipulkuumar/SchemeScout" target="_blank"><strong>📦 GitHub Repo »</strong></a>
</p>

---

## 💡 What is SchemeScout?

India has **hundreds of government welfare schemes** — for farmers, students, women, SC/ST communities, and more. But most people never find out about the schemes they're eligible for, simply because there's no easy way to search them.

**SchemeScout solves that.**

You enter a few basic details (age, income, state, occupation, category), and SchemeScout instantly matches you with the government schemes you're **actually eligible for** — ranked by how well you qualify.

No spam. No signup. No jargon. Just results.

---

## ✨ Features

- 🎯 **Smart Eligibility Matching** — Rule-based engine scores each scheme against your profile
- 🤖 **AI Re-ranking (Optional)** — Google Gemini API re-ranks results with personalised match reasons
- 📊 **Match Percentage** — Visual meter showing how well you fit each scheme
- 🔍 **Search & Filter** — Search by name, filter by tags, sort by deadline or relevance
- ⚡ **Session Caching** — Results are cached so repeat visits are instant
- 📱 **Fully Responsive** — Works on mobile, tablet, and desktop
- 🎨 **Smooth Animations** — Framer Motion page transitions and micro-interactions
- 🗺️ **Scheme Detail Pages** — Full eligibility breakdown, documents needed, and apply link

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19 + Vite, Tailwind CSS v4, Framer Motion |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB + Mongoose (hosted on Atlas) |
| **AI Layer** | Google Gemini API (optional — falls back to rule engine) |
| **HTTP Client** | Axios |
| **Icons** | Lucide React |
| **Routing** | React Router v7 (HashRouter) |
| **Deployment** | Vercel (frontend) + Render (backend) |

---

## 🔄 How It Works

```
User fills 3-step form
        ↓
Frontend sends profile → POST /api/match
        ↓
Rule engine scores all schemes in MongoDB
        ↓
(Optional) Gemini AI re-ranks top candidates
        ↓
Ranked results returned → displayed as cards
        ↓
User clicks any scheme → full detail page
```

1. **Step 1 — Basic Details**: Age and gender
2. **Step 2 — Location & Work**: State and occupation
3. **Step 3 — Financials**: Annual income and social category
4. **Results**: Matched schemes ranked by eligibility percentage

---

## 📁 Folder Structure

```
SchemeScout/
├── src/                        # React frontend
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── SchemeCard.jsx
│   │   ├── AILoader.jsx
│   │   ├── Filters.jsx
│   │   ├── MatchMeter.jsx
│   │   └── ...
│   ├── pages/                  # Route-level page components
│   │   ├── Home.jsx
│   │   ├── CheckEligibility.jsx
│   │   ├── Results.jsx
│   │   ├── SchemeDetail.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── services/               # API client + constants
│   │   ├── api.js
│   │   ├── constants.js
│   │   └── helpers.js
│   └── App.jsx
│
├── backend/                    # Node.js + Express API
│   ├── routes/
│   │   ├── match.js            # POST /api/match
│   │   └── schemes.js          # GET /api/schemes, /api/stats
│   ├── engine/
│   │   └── matchEngine.js      # Core eligibility scoring logic
│   ├── ai/
│   │   └── geminiMatcher.js    # Optional Gemini AI re-ranker
│   ├── models/
│   │   ├── Scheme.js
│   │   └── UserQuery.js
│   ├── middleware/
│   │   └── validate.js         # Request validation
│   ├── seed/
│   │   └── seedSchemes.js      # Database seeder (100+ schemes)
│   └── server.js
│
├── .env.example                # Frontend env template
├── backend/.env.example        # Backend env template
├── vite.config.js
└── package.json
```

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/health` | Server health check |
| `POST` | `/api/match` | Match schemes to user profile |
| `GET` | `/api/schemes` | List all schemes (optional `?category=` filter) |
| `GET` | `/api/schemes/:id` | Get a single scheme by ID |
| `GET` | `/api/stats` | Total scheme and query counts |

**POST `/api/match` — Request Body:**
```json
{
  "age": "24",
  "gender": "Female",
  "state": "Rajasthan",
  "occupation": "Student",
  "income": "below_1L",
  "category": "OBC"
}
```

---

## 🖼️ Screenshots

> *(Replace these with actual screenshots after deployment)*

| Home Page | Eligibility Form | Results |
|-----------|-----------------|---------|
| ![Home](screenshots/home.png) | ![Form](screenshots/form.png) | ![Results](screenshots/results.png) |

---

## 🚀 Installation (Run Locally)

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (or local MongoDB)
- Git

### Step 1 — Clone the repo
```bash
git clone https://github.com/Bipulkuumar/SchemeScout.git
cd SchemeScout
```

### Step 2 — Install frontend dependencies
```bash
npm install
```

### Step 3 — Set up frontend environment
```bash
cp .env.example .env
# .env is pre-filled with localhost:5000 — no changes needed for local dev
```

### Step 4 — Install backend dependencies
```bash
cd backend
npm install
```

### Step 5 — Set up backend environment
```bash
cp .env.example .env
# Edit .env: add your MongoDB Atlas connection string
```

### Step 6 — Seed the database (first-time only)
```bash
# From the backend/ directory
npm run seed
```

### Step 7 — Start the app
```bash
# From the root directory
cd ..
npm start
```

This starts both frontend (port 5173) and backend (port 5000) together using `concurrently`.

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ☁️ Deploying to Production

### Backend → Render

1. Go to [render.com](https://render.com) → **New Web Service**
2. Connect your GitHub repo
3. Set **Root Directory** to `backend`
4. Set **Start Command** to `node server.js`
5. Add environment variables:
   - `MONGODB_URI` → your Atlas URI
   - `FRONTEND_URL` → your Vercel URL (e.g. `https://scheme-scout.vercel.app`)
   - `GEMINI_API_KEY` → (optional)

### Frontend → Vercel

1. Go to [vercel.com](https://vercel.com) → **New Project** → Import from GitHub
2. Framework: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `build`
5. Add environment variable:
   - `VITE_API_URL` → your Render backend URL (e.g. `https://schemescout-api.onrender.com`)

---

## 🔮 Future Improvements

Here are some ideas I'd like to add in future versions:

1. **User Accounts** — Let users save favourite schemes and get notifications when new ones are added
2. **SMS/WhatsApp Alerts** — Notify users with low digital literacy about schemes via SMS (Twilio / MSG91)
3. **Multi-language Support** — Hindi and regional language translations for wider accessibility
4. **Application Tracker** — Help users track the status of their scheme applications end-to-end

---

## 👨‍💻 Author

**Bipul Kumar**

- GitHub: [@Bipulkuumar](https://github.com/Bipulkuumar)
- Project: [SchemeScout](https://github.com/Bipulkuumar/SchemeScout)

---

<p align="center">
  Built with ❤️ to make government welfare accessible to every Indian citizen.
</p>
