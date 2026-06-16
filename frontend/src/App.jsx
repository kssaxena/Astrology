import React from 'react'
import { useState, useEffect} from 'react'
import Loader from './components/Loader';
import Home from "./pages/Home"
import Footer from './components/Footer'
import Header from './components/Header';



function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  

  return (
    <div className="manrope-p1 overflow-hidden">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App
