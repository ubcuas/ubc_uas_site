import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './NavBar'
import HomeHero from './HomeHero'
import StatsSection from './components/StatsSection'
import ProjectsPage from './ProjectsPage'
import TeamPage from './TeamPage'
import Footer from './footer'
import './App.css'

const HomePage = () => (
  <>
    <HomeHero />
    <StatsSection />
  </>
)

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <main className="app__content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/team" element={<TeamPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
