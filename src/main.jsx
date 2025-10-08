import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Banner from '../src/components/Banner/Banner'
import Nav from '../src/components/Nav/Nav'
import { BrowserRouter } from 'react-router-dom'
import { pageData } from './../src/pages/Home/HomeData'
import Footer from './components/Footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/academy-task3/'>
      <Banner text={'Admission is Open, Grab your seat now'} />
      <Nav navItems={pageData.navItems} />
      <App />
      <Footer footerData={pageData.footer} />
    </BrowserRouter>
  </StrictMode>,
)
