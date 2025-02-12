import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Events } from './pages/Events'
import { AuthProvider } from './context/AuthContext'
import './styles/global.css'

/**
 * Main App component that manages and displays hackathon events
 * Implements data fetching and event rendering with proper error handling
 */
function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App