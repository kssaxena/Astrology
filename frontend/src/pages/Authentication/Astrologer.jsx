import React from 'react'
import { useState } from 'react';
import { RegisterAstrologer } from '../../components/Register'
import LoginAstrologer from '../../components/Login';

function Astrologer() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="">
      {isLogin ? (
        <LoginAstrologer switchForm={() => setIsLogin(false)} />
      ) : (
        <RegisterAstrologer switchForm={() => setIsLogin(true)} />
      )}
    </div>
  );
}

export default Astrologer
