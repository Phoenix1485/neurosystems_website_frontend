import React from 'react';
import { register } from '../services/authService';
import RegisterForm from '../Components/Register/RegisterForm';
import LoginImage from '../Assets/Img/login.png';
import { showSuccessToast, showErrorToast } from '../Components/ToastProvider';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const navigate = useNavigate();
    const handleSubmit = async ({ username, email, password }) => {
        try {
            const { data } = await register({ username, email, password });
            localStorage.setItem("username", data.username);
            showSuccessToast("Registration successful");
            navigate("/login");
        } catch (err) {
            console.error("ERROR: ", err);
            showErrorToast("Registration failed");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex max-w-6xl p-8">
                {/* Image on the Left */}
                <div className="relative w-auto mr-10 mt-32 animate-float">
                    <img src={LoginImage} alt="register" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
                {/* Register Form on the Right */}
                <div className='w-full'>
                    <RegisterForm handleSubmit={handleSubmit} />
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
