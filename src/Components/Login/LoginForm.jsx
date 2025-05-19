import React, { useState } from 'react';
import InputField from '../InputField';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const LoginForm = ({ handleSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit({ email, password });
    };

    return (
        <form onSubmit={onSubmit} className="p-6 rounded max-w-lg mx-auto w-full">
            <h1 className="text-4xl font-bold mb-6 text-center">Login</h1>

            {/* Email Input */}
            <div className="mb-6">
                <label htmlFor="email" className="text-md font-semibold mb-2 flex items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 mr-2" />
                    Email
                </label>
                <InputField
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                />
            </div>

            {/* Password Input */}
            <div className="mb-6">
                <label htmlFor="password" className="text-md font-semibold mb-2 flex items-center">
                    <FontAwesomeIcon icon={faLock} className="w-5 h-5 mr-2" />
                    Password
                </label>
                <InputField
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                />
            </div>

            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 hover:scale-y-105 duration-300 text-white p-3 rounded-md mb-4">
                Login
            </button>

            <p className="text-md text-center">No account? Create one <Link to="/register"  className="text-indigo-600 cursor-pointer">here</Link></p>
        </form>
    );
};

export default LoginForm;
