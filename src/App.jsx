import './App.css'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Banner from '../src/components/Banner/Banner'
import Nav from '../src/components/Nav/Nav'
import { pageData } from './../src/pages/Home/HomeData'
import Footer from './components/Footer/Footer'
import Academics from './pages/Academics/Academics'

function App() {

  return (
    <>
      <header>
        <Banner text={'Admission is Open, Grab your seat now'} />
        <Nav navItems={pageData.navItems} />
      </header>
      <Academics />
      <Footer footerData={pageData.footer} />
    </>
  )
}

export default App
