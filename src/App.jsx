import './App.css'
import Banner from './components/Banner/Banner'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import BenefitsSection from './components/BenefitsSection/BenefitsSection'
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection'
import FaqSection from './components/FaqSection/FaqSection'
import PagesSection from './components/PagesSection/PagesSection'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
        <Banner text={'Admission is Open, Grab your seat now'} />
        <Nav />
        <Hero />
        <BenefitsSection />
      <TestimonialsSection />
      <FaqSection />
      <PagesSection />
      <Footer />
    </>
  )
}

export default App
