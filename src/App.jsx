import './App.css'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Banner from '../src/components/Banner/Banner'
import Nav from '../src/components/Nav/Nav'
import { pageData } from './../src/pages/Home/HomeData'

function App() {

  return (
    <>
      <header>
        <Banner text={'Admission is Open, Grab your seat now'} />
        <Nav navItems={pageData.navItems} />
      </header>
      <AboutUs />
    </>
  )
}

export default App
