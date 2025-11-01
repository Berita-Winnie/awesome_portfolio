import React from 'react'
import Header from './components/Header'
import Testimonials from './components/Testimonials'
import LatestWork from './components/LatestWork'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Header />

      <Testimonials />
      <LatestWork />
      <Footer />
    </div>
  )
}

export default App
