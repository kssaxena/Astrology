import React from 'react'
import { useState, useEffect} from 'react'
import Loader from './components/Loader';
import Register from './components/Register';
import TodayHoroscope from './components/ui/TodayHoroscope';


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  

  return (
    <div>
      {loading && <Loader />}

      {!loading && <Register />}
      <TodayHoroscope/>
    </div>
  );
}

export default App
