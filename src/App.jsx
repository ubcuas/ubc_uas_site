import { useCallback, useState } from 'react'
import NavBar from './navBar'
import HomeHero from './HomeHero'
import StatsSection from './components/StatsSection'
import ProjectsPage from './ProjectsPage'
import TeamPage from './TeamPage'
import Footer from './footer'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('home')

  const handleNavigate = useCallback((page, targetId) => {
    setActivePage(page)

    if (typeof window === 'undefined') {
      return
    }

    window.requestAnimationFrame(() => {
      if (page === 'home') {
        if (targetId) {
          const element = document.getElementById(targetId)
          element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' })
      }
    })
  }, [])

  return (
    <div className="app">
      <NavBar activePage={activePage} onNavigate={handleNavigate} />
      <main className="app__content">
        {activePage === 'projects' && <ProjectsPage />}
        {activePage === 'team' && <TeamPage />}
        {activePage === 'home' && (
          <>
            <HomeHero />
            <StatsSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
