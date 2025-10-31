import React from 'react'
import Header from './components/Header'
import Testimonials from './components/Testimonials'
import LatestWork from './components/LatestWork'

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />

      <Testimonials />
      <LatestWork />
    </div>
  )
}

export default App
