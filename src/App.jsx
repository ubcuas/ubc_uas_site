import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './NavBar'
import HomeHero from './HomeHero'
import StatsSection from './components/StatsSection'
import MissionSection from './components/MissionSection'
import ProjectsPage from './ProjectsPage'
import TeamPage from './TeamPage'
import RecruitmentPage from './RecruitmentPage'
import SponsorshipPage from './SponsorshipPage'
import WhoWeAreSection from './components/WhoWeAreSection'
import Footer from './footer'
import './App.css'

const HomePage = () => (
  <>
    <HomeHero />
    <StatsSection />
    <MissionSection />
    <WhoWeAreSection />
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
            <Route path="/recruitment" element={<RecruitmentPage />} />
            <Route path="/sponsorship" element={<SponsorshipPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
