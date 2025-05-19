// LoginPage.jsx

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';
import { AuthContext } from '../Contexts/AuthContexts';
import LoginForm from '../Components/Login/LoginForm';
import LoginImage from '../Assets/Img/login.png';
import { showErrorToast, showSuccessToast } from '../Components/ToastProvider';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login: setToken } = useContext(AuthContext);

  const handleSubmit = async ({ email, password }) => {
    try {
      const { data } = await login({ email, password });
      setToken(data.token); // Token im AuthContext setzen
      localStorage.setItem('email', data.email);
      localStorage.setItem('username', data.username);
      navigate("/");
      showSuccessToast("Logged in successfully!");
    } catch (err) {
      console.error("ERROR: ", err);
      showErrorToast("Please check your credentials");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex max-w-6xl p-8">
        <div className="relative w-auto mr-10 animate-float">
          <img src={LoginImage} alt="login" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="w-full">
          <LoginForm handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
