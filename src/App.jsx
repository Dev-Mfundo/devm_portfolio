import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Contacts from './pages/Contacts'

const App = () => {
  return (
    <div className="app">
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </Router>
  </div>
  )
}

export default App
