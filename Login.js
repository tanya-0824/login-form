import React, { useState } from 'react';
import googleicon from '../images/googleicon.png'
import backgroundImg from '../images/background.png'


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formError, setFormError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
    setFormError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
    setFormError('');
  };

  const validateForm = () => {
    let isValid = true;

    if (!email.trim()) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email format');
      isValid = false;
    }

    if (!password.trim()) {
      setPasswordError('Password is required');
      isValid = false;
    }

    return isValid;
  };

  const handleLogin = () => {
    setEmailError('');
    setPasswordError('');
    setFormError('');

    if (validateForm()) {

      console.log(`Email: ${email}, Password: ${password}`);
    } else {
      setFormError('Please fill in the required fields');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{
        backgroundImage: `url(${backgroundImg})`}}>
      <div className="bg-white p-8 shadow-md rounded-md w-96 text-gray-600">
        <div className="flex items-center justify-center mb-4">
          <img src="https://staging-internal.d1nwfechdidmfz.amplifyapp.com/_next/static/media/hifiLogo.6b03b00d.svg" alt="HiFi Icon" className="w-8 h-8 mr-2" />
          <h1 className="text-3xl font-bold">HiFi Pay</h1>
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-center">Welcome</h2>
        <p className="text-center mb-4">Sign in to Hifi Pay</p>

        <div className="mb-4">
          <button className="bg-red-500 text-white p-2 rounded-md flex items-center justify-center w-full">
            <img src={googleicon} alt="Google Icon" className="w-6 h-6 mr-2" />
            Sign in using Google
          </button>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="border-b border-gray-300 w-1/4"></div>
          <span className="text-sm px-2">OR</span>
          <div className="border-b border-gray-300 w-1/4"></div>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className={`mt-1 p-2 w-full border rounded-md ${emailError && 'border-red-500'}`}
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
        </div>

        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            className={`mt-1 p-2 w-full border rounded-md ${passwordError && 'border-red-500'}`}
          />
          <span
            className="absolute right-2 top-2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
          {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
        </div>

        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white p-2 rounded-md w-full mb-4"
        >
          Sign In
        </button>

        <div className="text-blue-500 text-center mb-4">
          <a href="/forgot-password">Forgot Password?</a>
        </div>

        <div className="flex items-center justify-center">
          <span className="text-sm">Don't have an account?</span>
          <a href="/get-started" className="text-blue-500 text-sm ml-1">
            Get Started
          </a>
        </div>
        {formError && <p className="text-red-500 text-sm mt-4">{formError}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
