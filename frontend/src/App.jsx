import React from "react";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Astrologer from "./pages/Authentication/Astrologer"
import User from "./pages/Authentication/User"

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
      <div className="pt-[75px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authentication/astrologer" element={<Astrologer />} />
          <Route path="/authentication/user" element={<User />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
