import BookingSection from './components/BookingSection.jsx'
import ExperienceSection from './components/ExperienceSection.jsx'
import Hero from './components/Hero.jsx'
import ResultsSection from './components/ResultsSection.jsx'
import ServicesSection from './components/ServicesSection.jsx'
import './App.css'

function App() {
  return (
    <>
      <Hero />
      <main id="main-content">
        <ServicesSection />
        <ExperienceSection />
        <ResultsSection />
        <BookingSection />
      </main>
    </>
  )
}

export default App
