import NavBar from './navBar'
import HomeHero from './HomeHero'
import StatsSection from './components/StatsSection'
import Footer from './footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <NavBar />
      <main className="app__content">
        <HomeHero />
        <StatsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
