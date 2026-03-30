# SchemeScout - Complete Interview Preparation & Understanding Guide

This guide is designed to help you deeply understand your SchemeScout project and confidently answer any technical questions about it in an interview setting.

---

## 1. PROJECT OVERVIEW

**What SchemeScout frontend does:**
SchemeScout is a React-based web application that acts as a Gov-Tech platform. It helps Indian citizens discover government schemes (like financial aid, scholarships, housing subsidies) they are eligible for. 

**Purpose of the project:**
Navigating government portals can be complex and confusing. The purpose of this platform is to simplify the discovery process. Instead of scrolling through hundreds of irrelevant schemes, the user provides their profile (age, gender, income, category), and the platform filters out precisely what they qualify for.

**How users interact with it:**
1. Users land on the `Home` page, which explains the platform's value proposition.
2. They click "Check Eligibility" and are taken to a multi-step `EligibilityForm`.
3. They fill out their Personal, Location/Work, and Financial details.
4. Upon submission, they are routed to the `Results` page, which displays matched schemes.
5. They can click on a `SchemeCard` to navigate to a `SchemeDetails` page for deeper information and application steps.

**Overall frontend architecture:**
- **Framework:** React 19 via Vite.
- **Routing:** React Router DOM (Client-side routing).
- **Styling:** Tailwind CSS for responsive, utility-first styling.
- **Animations:** Framer Motion for smooth UI transitions.
- **Icons:** Lucide-React.
- **State Management:** React local state (`useState`) and router state for passing data between pages.
- **Data Fetching:** Mocked via a locally managed `services/api.js` file (designed to be easily swapped for a real Express/Node.js backend with `axios`).

---

## 2. FOLDER STRUCTURE BREAKDOWN

```text
src/
├── assets/         # Static global assets (images, global SVGs).
├── components/     # Reusable, modular UI components (Navbar, Footer, SchemeCard).
├── pages/          # Top-level route components representing full screens (Home, Results).
├── services/       # API logic and mock data (api.js).
├── App.jsx         # Root component setting up the Layout and Router mappings.
├── main.jsx        # The entry point that mounts the React app to the DOM.
├── index.css       # Global CSS and Tailwind directives.
```

**Why this structure is used in React projects:**
This is a standard feature-and-route-based architecture. 
- **Separation of Concerns:** By segregating `components` (reusable UI pieces) from `pages` (full views tied to routes), the code remains modular.
- **Scalability:** If the app grows, you can easily find where to add a new screen (in `pages`) versus a new UI widget (in `components`).
- **Maintainability:** Abstracting API calls into a `services` folder keeps components clean. They don't need to know *how* data is fetched, just that they can call a function to get it.

---

## 3. FILE-BY-FILE EXPLANATION

### `main.jsx`
- **Purpose:** The absolute starting point of the React application.
- **Important Code:** Wraps `<App />` in `<BrowserRouter>` (enables routing) and `<StrictMode>` (React tool for catching common bugs in development). It grabs the `#root` div from `index.html` and renders the React tree inside it.

### `App.jsx`
- **Purpose:** The root Layout component and Routing Hub.
- **Code Logic:** It returns a `div` containing the `<Navbar />`, a `<main>` tag holding all the `<Routes>`, and a `<Footer />`. 
- **Why it matters:** Because Navbar and Footer remain outside the `<Routes>` block, they stay permanently mounted on the screen, while only the `<main>` content swaps out as the URL changes.

### `pages/Home.jsx`
- **Purpose:** The landing page.
- **Code Logic:** Uses `framer-motion` (`motion.div`) to animate elements sliding in smoothly (`fadeInUp`). It contains marketing copy, feature highlights, and a call-to-action button linking to `/check-eligibility` via React Router's `<Link>`.

### `pages/EligibilityForm.jsx`
- **Purpose:** The core interaction engine. Collects user data.
- **Code Logic:** 
  - Uses `useState` for `currentStep` (0, 1, or 2) and `formData` (an object tracking age, gender, state, etc.).
  - **Important Block:** The `handleNext()` function. When the user is on the final step and clicks "Find Schemes", it calls `navigate('/results', { state: { formData } })`. This sends the user to the Results page *and* secretly passes the form data along in memory.
  - **Validation:** `isStepValid()` checks if the current step's required fields are filled before enabling the "Continue" button.

### `pages/Results.jsx`
- **Purpose:** Processes the form data and shows matched schemes.
- **Code Logic:**
  - Uses `useLocation()` to grab the `formData` sent from the Form page. 
  - Uses `useEffect()` to simulate an API call (`setTimeout` of 2 seconds) and filter `mockSchemes` based on `formData`.
  - While loading, it renders a `<Skeleton />` component grid. Once loaded, it maps over the matched schemes and renders `<SchemeCard>` components.
  - **Flow of Data:** Receives Router State -> Sets local state (`loading`, `schemes`) -> Conditionally renders UI based on that state.

### `services/api.js`
- **Purpose:** Acts as a fake backend.
- **Code Logic:** Exports an array of JSON objects (`mockSchemes`). Each object contains scheme details (id, title, benefits, criteria). It also exports a helper function `getSchemeById(id)`. This file prepares the app to easily connect to a database later.

### Reusable Components
- **`components/FormStepper.jsx`**: Visual indicator showing 1/2/3 progress. Takes `currentStep` as a prop.
- **`components/SchemeCard.jsx`**: Small card showing summary info. Takes a `scheme` object as a prop.
- **`components/Skeleton.jsx`**: A gray, pulsing box shown during the loading phase. Improves UX.

---

## 4. COMPONENT FLOW & DATA FLOW

**How User Input Moves:**
1. **User Input:** User types their age and selects "Student" in `EligibilityForm.jsx`.
2. **Local State Update:** `onChange` handler updates the `formData` object in React state.
3. **Data Passing via Router:** When the form is submitted, `navigate('/results', { state: { formData } })` is fired. The data temporarily lives in React Router's history state.
4. **Data Retrieval:** `Results.jsx` mounts. `useLocation().state.formData` retrieves the object.
5. **Logic execution:** `Results.jsx` uses `formData.occupation === 'Student'` to filter the mock array.
6. **Prop drilling:** `Results.jsx` takes the filtered array, loops through it, and passes individual `scheme` objects down as **props** to `<SchemeCard scheme={scheme} />`.

---

## 5. ROUTING EXPLANATION

React Router (`react-router-dom`) swaps out UI components without refreshing the browser page, providing a Single Page Application (SPA) experience.

**Routes Overview (in `App.jsx`):**
- `/` -> `<Home />` (Initial landing page)
- `/check-eligibility` -> `<EligibilityForm />` (The data collection page)
- `/results` -> `<Results />` (Where filtered schemes are shown)
- `/scheme/:id` -> `<SchemeDetails />` (A **dynamic route**. `:id` lets React Router know this is a variable. If the URL is `/scheme/101`, `SchemeDetails` uses `useParams()` to grab `101` and fetch data for PMAY).

---

## 6. UI/UX LOGIC

- **Forms:** The form is broken into a "wizard" or "stepper" (Personal -> Location -> Financials). This prevents cognitive overload compared to a massive 20-field form.
- **Validation:** Validation is handled dynamically (`isStepValid`). The "Next" button remains `disabled` until required fields for the *current step* are truthy.
- **Feedback:** When waiting for results (simulating network latency), a `<Skeleton>` loader is shown so the user knows the app isn't frozen.
- **Empty States:** If no schemes match, `Results.jsx` renders an empty state UI asking the user to try adjusting their criteria, ensuring they never hit a "dead end."

---

## 7. INTERVIEW QUESTIONS & ANSWERS

### 🟢 Beginner Level (Concepts & React Basics)
1. **Q: What is React?** 
   **A:** An open-source JavaScript library for building user interfaces based on independent, reusable components.
2. **Q: What is a Component?** 
   **A:** A self-contained piece of UI. In this project, `Navbar` and `SchemeCard` are components.
3. **Q: How are you managing state in this app?**
   **A:** I am using React's built-in `useState` hook for component-level state and React Router's state to pass data between pages.
4. **Q: What is JSX?**
   **A:** A syntax extension for JS that lets you write HTML-like markup inside JavaScript files.
5. **Q: What is the purpose of `package.json`?**
   **A:** It holds metadata about the project and lists all the dependencies (like React, Tailwind, framer-motion) needed to run it.
6. **Q: How does Tailwind CSS work in this project?**
   **A:** By adding utility classes directly to JSX elements (e.g., `flex`, `text-center`, `p-4`), avoiding separate CSS files.
7. **Q: What is the Virtual DOM?**
   **A:** React's lightweight copy of the real DOM. React compares the Virtual DOM to the Real DOM and only updates what has changed, making it fast.
8. **Q: What is a Hook in React?**
   **A:** A special function that lets you "hook into" React features like state and lifecycle (e.g., `useState`, `useEffect`).
9. **Q: What does `useNavigate` do?**
   **A:** It allows programmatic navigation. For example, moving a user to the results page after they submit a form.
10. **Q: How do you pass data between a parent and child?**
    **A:** By using **props**. `Results.jsx` (parent) passes scheme data to `SchemeCard.jsx` (child).
11. **Q: Can child components change props passed to them?**
    **A:** No, props are read-only. Data flows in one direction: downward.
12. **Q: What is SPA?**
    **A:** Single Page Application. The browser loads just one HTML page, and React dynamically rewrites the screen without doing a hard reload.
13. **Q: Why use `map()` in React?**
    **A:** Used to iterate over arrays and render a list of components, like mapping `schemes` to `<SchemeCard />` components.
14. **Q: Why do items in a map loop need a `key` prop?**
    **A:** It gives elements a stable identity so React knows exactly which items changed, were added, or removed, optimizing rendering.
15. **Q: What is `useEffect` used for?**
    **A:** To perform side effects in functional components, like data fetching, subscriptions, or manually changing the DOM.
16. **Q: What is the dependency array in `useEffect`?**
    **A:** The second argument `[]`. It tells React when to re-run the effect. If empty, it runs once on mount. If it has variables, it runs when those variables change.
17. **Q: What does `export default` mean?**
    **A:** It marks the primary fallback export for a module, allowing other files to import it without using curly braces.
18. **Q: What is a controlled component in forms?**
    **A:** An input whose value is tied to React state. In our app, the input `value` is tied to `formData.age`.
19. **Q: How do you handle conditional rendering?**
    **A:** Using ternary operators (`condition ? true : false`) or logical AND (`condition && <Component />`).
20. **Q: What is the difference between `Link` and a generic `<a>` tag?**
    **A:** An `<a>` tag triggers a full page refresh handled by the browser. `Link` intercepts the click and lets React Router handle the transition instantly.

### 🟡 Intermediate Level (Architecture & Code Specific)
21. **Q: How did you share the form data from EligibilityForm to Results?**
    **A:** I passed it through the React Router history state using `navigate('/results', { state: { formData } })` and retrieved it with the `useLocation` hook in the child component.
22. **Q: What would happen if a user refreshed the page while on the `/results` route?**
    **A:** In this specific app architecture, because I rely on router state which *can* persist on refresh in some browsers but is generally volatile, the `location.state` might be null. My code handles this by checking `if (!formData) navigate('/check-eligibility')` to send them back.
23. **Q: Why abstract the API calls into a `services` folder?**
    **A:** Separation of concerns. It decouples UI logic from data-fetching logic. If I switch from mocked data to an Axios fetching database data, I only update `api.js`—my components remain untouched.
24. **Q: Explain how your multi-step form works without using multiple URLs.**
    **A:** I keep a `currentStep` integer in state (0, 1, or 2). Based on `currentStep`, I conditionally render different blocks of JSX containing different inputs, while accumulating all data into one centralized `formData` state object.
25. **Q: How did you implement routing?**
    **A:** Using `react-router-dom`. The app is wrapped in `<BrowserRouter>`, and the layout maps string paths to React components using `<Routes>` and `<Route>`.
26. **Q: What is a dynamic route?**
    **A:** A route that can capture variables in the URL. Like `/scheme/:id`. `useParams` can extract the `:id` value dynamically.
27. **Q: Why use absolute imports or centralized file structures?**
    **A:** Prevents `../../../` chaotic pathways and keeps project organization predictable as it scales.
28. **Q: How does `setTimeout` inside `useEffect` work in your `Results.jsx`?**
    **A:** It mocks network latency. I set `loading` to true, wait 2000ms using `setTimeout`, execute my data filtering, update the `schemes` state, and then set `loading` to false. 
29. **Q: If this app grew massive, would you stick to `useState` for the form data?**
    **A:** If it grew truly massive and needed data deeply embedded in unrelated components across the app, I would upgrade to React Context API or Redux for global state management.
30. **Q: How is the styling encapsulated?**
    **A:** Since I used Tailwind, styles are tightly coupled to the DOM elements via class names, preventing CSS namespace collisions entirely.
31. **Q: How do you handle form validation?**
    **A:** I check if the values inside `formData` for the current step exist and are truthy. Only then does the `isStepValid` function return true, which un-disables the Next button.
32. **Q: What are the drawbacks of using React Router state to pass data?**
    **A:** It relies on the user navigating via the app's links. If a user tries to share the `/results` URL directly to a friend, the friend's app will crash or redirect because they didn't bring the state with them.
33. **Q: How would you solve the URL-sharing problem in the future?**
    **A:** By storing the filter parameters in the URL Search Params (Query string). E.g., `/results?age=25&occupation=Student`. Then any shared link contains the required data to fetch results.
34. **Q: How did you implement Skeleton loaders?**
    **A:** By creating a component that mirrors the exact dimension and layout of a `SchemeCard`, but has a dull grey background and a CSS `animate-pulse` class. It renders while `loading === true`.
35. **Q: Why is `<StrictMode>` wrapping your app?**
    **A:** It intentionally double-invokes certain lifecycle methods and effects in development mode to help trace side-effect bugs and ensure components are pure.
36. **Q: What are Fragments (`<></>`) in React?**
    **A:** A way to group a list of children without adding extra DOM nodes (like redundant `<div>` tags).
37. **Q: How did you make the app responsive?**
    **A:** By using Tailwind's breakpoint prefixes. E.g., `flex-col md:flex-row`, which means col layout on mobile, but row layout on medium screens and larger.
38. **Q: How does Framer Motion work in your Home component?**
    **A:** `motion.div` extends standard divs with animation properties. By passing `variants={fadeInUp}` and `initial="hidden" animate="visible"`, it seamlessly manipulates CSS transforms under the hood when the component mounts.
39. **Q: Why use `disabled={!isStepValid()}` instead of an `if` block?**
    **A:** It provides immediate visual feedback. React handles the declarative binding—when state changes, the button's disabled attribute updates dynamically without manual DOM manipulation.
40. **Q: If a user enters text into an age number input, what happens in React?**
    **A:** Due to `type="number"`, the browser prevents text. But React's `handleChange` always returns values as strings from `e.target.value`. For critical match logic, I should parse it using `Number()` or `parseInt()`.

### 🔴 Advanced Level (Performance, Under-the-hood, MERN context)
41. **Q: How does React batch state updates?**
    **A:** React 18+ automatically batches multiple state updates done in the same event handler or effect into a single re-render natively, preventing performance bottlenecks.
42. **Q: How would you prevent `Results.jsx` from re-triggering the fetch effect unnecessarily?**
    **A:** Ensure the dependency array in `useEffect` strictly contains exactly what triggers the fetch (e.g., `formData`), and wrap heavy parsing logic in `useMemo` or `useCallback`.
43. **Q: Describe the layout shift problem and how your app prevents it.**
    **A:** Layout shift happens when data loads and suddenly expands the DOM. By mapping `Skeleton` components that have the identical CSS width/height of the actual data cards, the DOM dimensions are locked in during load.
44. **Q: Let’s say I want to turn this into a MERN app. Where do you start?**
    **A:** The frontend is mostly ready. I would build an Express.js server, connect it to MongoDB, define a `Scheme` Mongoose schema, create a filtering route (`GET /api/schemes/match?occupation=Student`), and swap `mockSchemes.filter()` with an `axios.get()` call.
45. **Q: How would you securely handle API keys if you implemented an external database?**
    **A:** API keys should NEVER be baked into React source code. They must be stored in a `.env` file (`VITE_API_URL`) and accessed via `import.meta.env.VITE_API_URL`.
46. **Q: What is Context API and when does it become necessary?**
    **A:** It provides a way to share values like user session state or theme preference through the component tree without having to explicitly pass props down manually at every level (Prop drilling).
47. **Q: What is a Higher Order Component (HOC)?**
    **A:** A function that takes a component and returns a new component. Useful for protecting routes (e.g., placing an auth wrapper over admin pages).
48. **Q: What is the difference between client-side routing (React Router) and Server-Side routing?**
    **A:** CSR intercepts the URL change in JS, prevents the browser from asking the server for a new page, and simply swaps out React components. Fast UX, but historically worse for SEO.
49. **Q: How would you improve SEO for SchemeScout?**
    **A:** React is a CSR framework, which search engines sometimes struggle to crawl accurately. I would either use React Helmet to inject dynamic meta-tags, OR migrate the project to Next.js for Server-Side Rendering (SSR).
50. **Q: How does the Reconciliation algorithm work?**
    **A:** React compares the old Virtual DOM with the newly updated Virtual DOM (Diffing). It determines the minimal number of changes needed, and patches only those exact nodes in the real DOM.
51. **Q: What is a memory leak in React and how do you avoid it?**
    **A:** It occurs when a component is unmounted but continues to try and update state (like an uncleared `setInterval` or uncancelled Axios request). You avoid it by returning a cleanup function from `useEffect`.
52. **Q: Explain `useMemo` and `useCallback`.**
    **A:** `useMemo` caches the calculated *result* of a heavy function between renders. `useCallback` caches the *reference to a function* between renders, preventing baby components receiving that function as a prop from unnecessarily re-rendering.
53. **Q: How would you handle a global state container containing huge amounts of data securely?**
    **A:** By normalizing state structure (treating state like database tables by ID rather than deep nested arrays) and using robust middleware like Redux Toolkit.
54. **Q: Why did you use Vite instead of Create React App (CRA)?**
    **A:** Vite leverages native ES modules in the browser, meaning it doesn't need to bundle the entire application during development. It results in near-instant hot module replacement (HMR), vastly outperforming CRA's Webpack bounds.
55. **Q: How would you implement unit testing here?**
    **A:** By using Vitest and React Testing Library. I would write suites asserting that `isStepValid` correctly disables buttons, and that the `SchemeCard` renders the correct titles given mock props.
56. **Q: How will CORS affect this app once you build the backend?**
    **A:** Cross-Origin Resource Sharing. Because the frontend runs on `localhost:5173` and the backend on `localhost:5000`, the browser will block requests for security. I must configure the Express app to `app.use(cors())`.
57. **Q: What is JWT Authentication and how would you add it here?**
    **A:** JSON Web Tokens. If I added user login, the backend would generate a JWT on successful password check. The frontend would store it in `localStorage` or `HttpOnly cookies`, and attach it to the `Authorization` header in all `axios` requests to access saved schemes.
58. **Q: If `Results.jsx` fails to fetch data, how is that handled?**
    **A:** Currently it's mocked, but with a real API, I would add a `try/catch` block inside the `fetchMatches` function. If it hits the `catch`, I would set an `error` state string and render an error UI block.
59. **Q: Describe exactly what `e.preventDefault()` does in a form submit handler.**
    **A:** By default, HTML `<form>` submission causes the browser to reload the page and execute a GET/POST request. In React, we handle forms via JS, so we call `e.preventDefault()` to stop the reload and maintain our SPA state.
60. **Q: How would you optimize the loading speed of your images and assets?**
    **A:** By using modern formats like WebP or AVIF, implementing lazy loading (`loading="lazy"`), and keeping SVGs inline instead of external asset fetching where appropriate.

---

## 8. DEBUGGING UNDERSTANDING

Common conceptual issues you might face (or be asked about):

1. **"The Screen is totally blank white"**
   - *Cause:* Fatal syntax error or attempting to render undefined/unsupported data types (like rendering an Object directly inside a `<div>`).
   - *Fix:* Open Chrome DevTools (F12) -> Console. The error will tell you exactly which line crashed. 
2. **"React Router says 'No Route matches URL'"**
   - *Cause:* You clicked a link to `/results`, but `/results` is not defined in `<Routes>` in `App.jsx`, or you typo-ed it as `/result`.
   - *Fix:* Ensure the `path` prop in `<Route>` exactly matches the `to` prop in `<Link>`.
3. **"State is one step behind / Data doesn't update immediately in `console.log()`"**
   - *Cause:* React `setState` is asynchronous. Calling `setFormData` and immediately calling `console.log(formData)` on the next line will show the *old* data.
   - *Fix:* Rely on `useEffect` listening to `formData` if you need to perform an action immediately after state updates.

---

## 9. REAL-WORLD IMPROVEMENTS

How you will take this project to "Production-level MERN code" (Good talking point for interviews!):

1. **URL-driven State:** Move the form's state into the URL (e.g., `?age=25&state=Delhi`) so query URLs can be bookmarked and shared.
2. **Backend API (MERN Integration):** Hook it up to a live Node.js/Express.js backend with a MongoDB storing thousands of real schemes.
3. **Data Fetching Libraries:** Swap manual `useEffect` fetching with **React Query (TanStack Query)**. It automatically provides caching, background updating, and simpler `isLoading` / `isError` flags.
4. **User Authentication:** Allow users to create accounts (using JWT or Firebase), save specific schemes to their "dashboard", and receive email alerts when deadlines approach.
5. **Internationalization (i18n):** India has many languages. Adding `react-i18next` would allow toggling the entire interface between Hindi, English, Tamil, etc.

---

## 10. PROJECT STORY (VERY IMPORTANT)

When an interviewer says: **"Walk me through your project, SchemeScout."**

**The 1-Minute Elevator Pitch:**
> "SchemeScout is a Gov-Tech platform I built using React and Tailwind CSS. I realized that Indian citizens struggle to find government schemes they qualify for—filtering out the noise is difficult. So, I built an interactive platform where users input their demographic and financial profile into a sleek, multi-step form. The app then evaluates their data and instantly returns exactly which state or central schemes they are eligible for. It focuses heavily on clean UI/UX and dynamic component rendering."

**The 3-Minute Detailed Answer:**
> "I developed SchemeScout as a modern Frontend React SPA designed to solve a real-world problem: information accessibility regarding government schemes. At the architecture level, I structured it using Vite for fast bundling, React Router for seamless client-side navigation, and Tailwind CSS for rapid, utility-based UI design. 
> 
> The core feature is the heavily validated multi-step Eligibility Form. I managed the form data centrally using React state, breaking the UI into a wizard pattern to prevent user fatigue. When the user finishes, the app programmatically routes them to a Results dashboard, passing the state through React Router's history API. 
> 
> On the Results page, I simulated a backend API using useEffect and setTimeout to mock network latency. During this time, I render skeleton loaders to prevent layout shifts and enhance perceived performance. The data is parsed, filtered against the user's explicit profile—like checking if they are a student or a farmer—and maps the results out into modular SchemeCard components. The ultimate goal is to convert this into a full MERN app with an Express backend algorithm in the future."

---

## 11. FRONTEND WORKFLOW FILE

### Bullet Flow
- User opens website → (Route: `/`, Component: `<Home>`)
- User clicks "Check Eligibility" → (Route: `/check-eligibility`, Component: `<EligibilityForm>`)
- User fills Personal Details → Clicks Next → State `currentStep` updates to 1.
- User fills Location Details → Clicks Next → State `currentStep` updates to 2.
- User fills Financial Details → Clicks "Find Schemes"
- App calls `navigate('/results')` and passes `formData`.
- App mounts `<Results>` → Triggers `useEffect` → Shows `<Skeleton>`.
- Filter Logic executes against `mockSchemes` → Returns matches.
- State `loading` changes to false → Screen updates with `<SchemeCard>` mapped components.

---

## 12. BONUS: MERN ARCHITECTURE (HOW IT CONNECTS)

If an interviewer asks how you turn this static frontend into a **MERN Full-Stack Map**:

**1. MongoDB (Database Layer):**
You build a NoSQL Collection named `Schemes`. 
```json
{
  "_id": "abc...",
  "title": "PM Kisan Samman Nidhi",
  "tags": ["Agriculture"],
  "targetAudience": {
     "occupation": "Farmer",
     "incomeLimit": null
  }
}
```

**2. Express & Node (Backend Layer):**
You build an API Endpoint: `POST /api/schemes/match`
The frontend sends the `formData` object to this endpoint via `axios.post`.
Express receives `req.body` and writes a Mongo query: `Scheme.find({ "targetAudience.occupation": req.body.occupation })`. It returns a JSON Array.

**3. React (Frontend Layer):**
In `Results.jsx`, instead of my fake `setTimeout`, you do:
```javascript
useEffect(() => {
  const fetchMatches = async () => {
    try {
       const response = await axios.post('http://localhost:5000/api/schemes/match', formData);
       setSchemes(response.data);
       setLoading(false);
    } catch(err) {
       console.error("Failed to fetch schemes", err);
    }
  }
  fetchMatches();
}, []);
```
**Data Flow Summary:** Database ➔ Queries Server ➔ Server Responds with JSON ➔ React stores JSON in State ➔ UI Renders.
