# SchemeScout - Team Workflow & Deployment SOP

This document outlines the standard operating procedures (SOP) for the SchemeScout MERN stack project. It covers GitHub collaboration, branching strategies, backend integrations, and deployment.

---

## 1. Collaboration Setup

### Adding Collaborators to GitHub
To give your team members (e.g., backend developers) access to the repository:
1. Go to the [SchemeScout GitHub Repository](https://github.com/Bipulkuumar/SchemeScout).
2. Click on **Settings** > **Collaborators** (on the left sidebar).
3. Click "Add people", enter their GitHub username or email, and grant them **Write** access.

### Frontend & Backend Collaboration
- The frontend code lives inside the `client/` directory.
- Backend developers will create a `server/` directory at the root.
- The two teams can work in parallel on the same repository by isolating their changes to their respective folders.

---

## 2. Branching Strategy

We use a feature-branch workflow. **NEVER** push directly to `main`!

### Core Branches
- `main` : Production-ready code. This branch is automatically deployed.
- `dev` : The active development branch where all features are merged before going to production.

### Feature Branches
When a developer starts working on a new task, they must create a new branch from `dev`.
Naming conventions:
- `feature/homepage`
- `feature/auth`
- `feature/api-integration`
- `fix/navbar-mobile`

### Workflow Example

1. Switch to `dev` and pull latest changes:
   ```bash
   git checkout dev
   git pull origin dev
   ```
2. Create your new branch:
   ```bash
   git checkout -b feature/auth
   ```
3. Make your changes, add, and commit:
   ```bash
   git add .
   git commit -m "feat: added login authentication"
   ```
4. Push your branch to GitHub:
   ```bash
   git push origin feature/auth
   ```
5. Go to GitHub, click **Compare & pull request**, and merge it into `dev` after review.

---

## 3. Resolving Conflicts

When two people edit the same file, a merge conflict occurs.
1. Run `git pull origin dev` to bring the latest changes into your branch.
2. If conflicts are detected, VS Code will highlight the conflicting files.
3. Choose either "Accept Current Change", "Accept Incoming Change", or "Accept Both".
4. After resolving, add the files and commit again:
   ```bash
   git add .
   git commit -m "fix: resolve merge conflicts"
   ```

---

## 4. Backend Integration (Axios)

The frontend is already configured to talk to the backend. Open `client/src/services/api.js`.

- Use the `API` instance for requests:
  ```js
  import API from './services/api';

  const fetchSchemes = async () => {
    const response = await API.get('/api/schemes');
    console.log(response.data);
  };
  ```
- Make sure your local `.env` is set up properly before starting the app:
  ```env
  VITE_API_URL=http://localhost:5000
  ```

---

## 5. Deployment Guide (Vercel & Netlify)

Since the frontend is a React Vite application, Vercel is the recommended hosting provider, but Netlify works exactly the same.

### Step-by-Step Auto-Deployment
1. Sign up/Log in to [Vercel](https://vercel.com/) or [Netlify](https://netlify.com) with your GitHub account.
2. Click **Add New Project / Import from Git**.
3. Import the `SchemeScout` repository.
4. **Important Configurations**:
   - **Framework Preset**: Auto-detect "Vite" (or set manually).
   - **Root Directory**: **VERY IMPORTANT** - Change this to `client` so it knows where the frontend is.
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. **Environment Variables**:
   Under Environment Variables settings, add your backend API URL (e.g., `VITE_API_URL=https://schemescout-backend.onrender.com`).
6. Click **Deploy**. It will now automatically deploy the `main` branch whenever new code is merged.
