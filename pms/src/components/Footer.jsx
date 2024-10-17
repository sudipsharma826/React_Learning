import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col space-y-10 justify-center m-10">
        
        {/* Internal Navigation Links */}
        <nav className="flex justify-center space-x-6 text-gray-800 font-medium">
          <Link to="/">Home</Link>
          <Link to="/product">Products</Link>
          <Link to="/about">Contacts</Link>
        </nav>

        {/* Social Media and Contact Links */}
        <div className="flex justify-center space-x-5">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/sudipsharma.np"
            className="transition-transform duration-200 hover:scale-125"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt="Facebook" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sudipsharmanp/"
            className="transition-transform duration-200 hover:scale-125"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt="LinkedIn" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/sudeep_sharma.np/"
            className="transition-transform duration-200 hover:scale-125"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt="Instagram" />
          </a>

          {/* Email */}
          <a
            href="mailto:info@sudipsharma.com.np"
            className="transition-transform duration-200 hover:scale-125"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/new-post.png" alt="Email" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/sudipsharma826"
            className="transition-transform duration-200 hover:scale-125"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/github.png" alt="GitHub" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/9779816662624"
            className="transition-transform duration-200 hover:scale-125"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/whatsapp.png" alt="WhatsApp" />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-center text-gray-700 font-medium">
          &copy; 2024 Sudip Sharma. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
