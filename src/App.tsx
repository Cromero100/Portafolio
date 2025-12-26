import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero'
import Projects from './pages/Projects'
import About from './pages/About'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/sobremi" element={<About />} />
        <Route path="*" element={<Hero />} />
      </Routes>
    </Router>
  )
}

export default App
