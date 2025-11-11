import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './components/Home'

import { Routes, Route } from 'react-router-dom'
import About from './components/About'
const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
