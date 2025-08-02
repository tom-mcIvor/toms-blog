'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer')
      if (footer) {
        const rect = footer.getBoundingClientRect()
        const isInView = rect.top < window.innerHeight - 100 && rect.bottom > 0
        setIsVisible(isInView)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <footer className={`w-full bg-gray-50 border-t border-gray-200 py-12 px-4 md:px-16 footer-container ${isVisible ? 'animate-in' : ''}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          {/* Contact Title */}
          <h3 className="text-2xl font-bold text-gray-800 text-center footer-title">
            Get In Touch
          </h3>
          
          {/* Contact Details */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 footer-content">
            {/* Email */}
            <div className="flex items-center footer-email">
              <a
                href="mailto:ttmcivor@gmail.com"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                ttmcivor@gmail.com
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4 footer-social">
              {/* GitHub */}
              <a
                href="https://github.com/tom-mcIvor"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl social-link"
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
                className="transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl social-link"
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
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent footer-divider"></div>
          
          {/* Copyright */}
          <div className="text-center text-gray-600 text-sm footer-copyright">
            <p>&copy; {new Date().getFullYear()} Thomas McIvor. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}