import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import EligibilityForm from './pages/EligibilityForm'
import Results from './pages/Results'
import SchemeDetails from './pages/SchemeDetails'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/check-eligibility" element={<EligibilityForm />} />
          <Route path="/results" element={<Results />} />
          <Route path="/scheme/:id" element={<SchemeDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
