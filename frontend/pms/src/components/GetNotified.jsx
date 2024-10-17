import React, { useState } from 'react';

const GetNotified = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">Get Notified!</h2>
        <p className="text-center text-gray-600 mb-4">
          Subscribe to our newsletter to stay updated with the latests updates.
        </p>
        <form onSubmit={handleEmailSubmit} className="flex justify-center">
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            className="border border-gray-300 rounded-l-md px-4 py-2 w-1/3 md:w-1/4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="bg-indigo-500 text-white rounded-r-md px-4 py-2 hover:bg-indigo-600 transition duration-200"
          >
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetNotified;
