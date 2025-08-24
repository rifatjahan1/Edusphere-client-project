import React, { useState } from 'react';
import { useLocation } from 'react-router';


const ForgotPassword = () => {
  const location = useLocation();
  const initialEmail = location.state?.email || '';
  const [email, setEmail] = useState(initialEmail);

  const handleReset = () => {
  if (!email.trim()) {
    alert("Please enter your email address.");
    return;
  }

  // Optional: basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // All good, redirect to Gmail
  window.location.href = 'https://mail.google.com';
};


  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
      <input
        type="email"
        className="w-full border border-gray-300 p-2 rounded mb-4"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <button
        onClick={handleReset}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Reset Password
      </button>
    </div>
  );
};

export default ForgotPassword;
