import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 py-12 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          {/* Contact Title */}
          <h3 className="text-2xl font-bold text-gray-800 text-center">
            Get In Touch
          </h3>
          
          {/* Contact Details */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            {/* Email */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <a 
                href="mailto:ttmcivor@gmail.com" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                ttmcivor@gmail.com
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {/* GitHub */}
              <a 
                href="https://github.com/tom-mcIvor" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className="transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Image
                  src="/Github-image.PNG"
                  alt="GitHub"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </a>
              
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/tom-mcivor-5b280488/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Image
                  src="/LinkedIn-image.PNG"
                  alt="LinkedIn"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </a>
            </div>
          </div>
          
          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          
          {/* Copyright */}
          <div className="text-center text-gray-600 text-sm">
            <p>&copy; {new Date().getFullYear()} Thomas McIvor. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}