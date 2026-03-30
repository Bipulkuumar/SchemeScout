# SchemeScout - Gov-Tech Platform

[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

A professional MERN stack application to help Indian citizens find eligible government schemes through a guided form interface.

---

## 📂 Folder Structure

This repository follows a clean, scalable MERN (MongoDB, Express, React, Node.js) structure:

```text
SchemeScout/
├── client/                 # Frontend (React/Vite)
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Full page views
│   │   ├── services/       # API and external integrations
│   │   ├── App.jsx         # Main React component
│   │   └── main.jsx        # React entry point
│   ├── public/             # Static assets
│   ├── package.json        # Frontend dependencies
│   └── vite.config.js      # Vite build configuration
├── server/                 # Backend (Node/Express) - *To Be Implemented*
├── .gitignore              # Files ignored by Git
└── README.md               # Master project documentation
```

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16.x or higher recommended)
- [Git](https://git-scm.com/)

### Installation & Setup

**1. Clone the repository:**
```bash
git clone https://github.com/Bipulkuumar/SchemeScout.git
cd SchemeScout
```

**2. Setup Frontend:**
```bash
cd client
npm install
npm run dev
```

**3. Environment Variables:**
The frontend connects to the backend API via environment variables. The system looks for `.env` files in the respective directories.

Create a `.env` in the `client/` folder:
```properties
VITE_API_URL=http://localhost:5000
```

## 🤝 Contribution Guidelines

We use an industry-standard Git workflow for collaboration.

1. **Keep the `main` branch clean:** The `main` branch is specifically reserved for production-level, deployable code.
2. **Always create a feature branch:** Before starting work, branch out from `dev` or `main`.
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Write semantic commit messages:** e.g., `feat: attach auth context to header`, `fix: resolve mobile overflow on homepage`.
4. **Open a Pull Request (PR):** Push your branch to GitHub and create a PR to merge into the `dev` branch. Require at least one team member to review the PR.
