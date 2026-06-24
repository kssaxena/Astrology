import React from "react";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Astrologer from "./pages/Authentication/Astrologer";
import User from "./pages/Authentication/User";
import AstrologerFeed from "./pages/AstrologerFeed";
import Tarot from "./pages/Free services/Tarot"

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
      <div className="pt-18.75 bg-linear-to-br from-[#fffefb] via-[#fff8eb] to-[#fff2d6]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authentication/astrologer" element={<Astrologer />} />
          <Route path="/authentication/user" element={<User />} />
          <Route path="/astrologerfeed" element={<AstrologerFeed />} />
          <Route path="/tarot" element={<Tarot />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
