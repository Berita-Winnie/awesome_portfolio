import React from 'react'
import Header from './components/Header'
import Testimonials from './components/Testimonials'
import LatestWork from './components/LatestWork'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />

      <Testimonials />
      <LatestWork />
      <Footer />
    </div>
  )
}

export default App
