import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import FooterOne from './components/FooterOne/FooterOne';
import FooterTwo from './components/FooterTwo/FooterTwo';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';
import NotFound from './pages/NotFound/NotFound';

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Portfolio' element={<Portfolio/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
