import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../App.css'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h2 className="text-xl font-bold mb-4">About Pen and Pulse</h2>
            <p className="text-sm">
              Pen and Pulse is your platform to explore, create, and share stories that resonate. 
              Join a community of writers and readers united by the love of words.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <div className="hover:text-blue-600" style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "0.5rem" }}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
            <FaGithub size={24} />
          </a>
        </div>
          </div>

         
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300"
              >
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>

       
        <div className="text-center border-t border-gray-700 mt-8 pt-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Pen and Pulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
