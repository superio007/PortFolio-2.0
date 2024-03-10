import react from 'react'
import './App.css'
import Main from './components/home.jsx'
import About from './components/About.jsx';
import Projects from './components/Projects.jsx'
import Experiances from './components/Experiances.jsx';
import Contact from './components/Contact.jsx'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/About' element={<About/>}/>
          <Route path='/Projects' element={<Projects/>}/>
          <Route path='/Experiances' element={<Experiances/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </Router> 
    </>
  )
}

export default App
