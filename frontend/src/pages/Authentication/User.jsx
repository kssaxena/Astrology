import React from 'react'
import { useState } from "react";
import Login from '../../components/Login'
import LoginUser from '../../components/UserLogin';
import { RegisterUser } from '../../components/UserRegister';

function UserLogin() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className=''>
      {isLogin ? (
        <LoginUser switchForm={() => setIsLogin(false)} />
      ) : (
        <RegisterUser switchForm={() => setIsLogin(true)}/>
      )}
     
    </div>
  )
}

export default UserLogin
