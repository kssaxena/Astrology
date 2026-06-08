import React from 'react'
import Button from './components/Button'
import Header from './components/Header'
import Footer from './components/Footer'
import Input from './components/Input'
import Login from './components/Login'
import SignUp from './components/Signup'
import AstrologyCard from './components/ui/AstrologyProfileCard'
import FacilityCard from './components/ui/Facility'


function App() {
  return (
    <div>
      
      <Header />
     <AstrologyCard />
     <FacilityCard />
      <Footer />
   
    </div>
  )
}

export default App
