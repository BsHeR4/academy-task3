import './App.css'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import { pageData } from './../src/pages/Home/HomeData'
import Footer from './components/Footer/Footer'
import Academics from './pages/Academics/Academics'
import { Route, Routes } from 'react-router-dom'
import Admission from './pages/Admission/Admission'
import StudentLife from './pages/StudentLife/StudentLife'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about-us' element={<AboutUs />}></Route>
        <Route path='/academics' element={<Academics />}></Route>
        <Route path='/admissions' element={<Admission />}></Route>
        <Route path='/student-life' element={<StudentLife />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </>
  )
}

export default App
