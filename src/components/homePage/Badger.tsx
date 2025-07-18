import { Carousel } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'
import badgerMatchHome from '../../../public/badger-match-home.png'
import badgerMatch from '../../../public/badger-match.png'
import badgerMachUploads from '../../../public/badger-match-uploads.png'

function Badger() {
  return (
    <>
      <h3>BadgerMatch</h3>
      
      {/* Tech Stack Icons */}
      <div className="flex justify-center items-center gap-4 mb-6 py-4">
        {/* React */}
        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
            <path fill="currentColor" d="M12,10.11C13.03,10.11 13.87,10.95 13.87,12C13.87,13.05 13.03,13.89 12,13.89C10.97,13.89 10.13,13.05 10.13,12C10.13,10.95 10.97,10.11 12,10.11M7.37,20C8,20.38 9.38,19.8 10.97,18.3C10.45,17.71 9.94,17.07 9.46,16.4C8.64,16.32 7.83,16.2 7.06,16.04C6.55,18.18 6.74,19.65 7.37,20M8.08,14.26L7.79,13.75C7.68,14.04 7.57,14.33 7.5,14.61C7.77,14.67 8.07,14.72 8.38,14.77C8.28,14.6 8.18,14.43 8.08,14.26M14.62,13.5L15.43,12L14.62,10.5C14.32,9.97 14,9.5 13.71,9.03C13.17,9 12.6,9 12,9C11.4,9 10.83,9 10.29,9.03C10,9.5 9.68,9.97 9.38,10.5L8.57,12L9.38,13.5C9.68,14.03 10,14.5 10.29,14.97C10.83,15 11.4,15 12,15C12.6,15 13.17,15 13.71,14.97C14,14.5 14.32,14.03 14.62,13.5M12,6.78C11.81,7 11.61,7.23 11.41,7.5C11.61,7.5 11.8,7.5 12,7.5C12.2,7.5 12.39,7.5 12.59,7.5C12.39,7.23 12.19,7 12,6.78M12,17.22C12.19,17 12.39,16.77 12.59,16.5C12.39,16.5 12.2,16.5 12,16.5C11.8,16.5 11.61,16.5 11.41,16.5C11.61,16.77 11.81,17 12,17.22M16.62,4C16,3.62 14.62,4.2 13.03,5.7C13.55,6.29 14.06,6.93 14.54,7.6C15.36,7.68 16.17,7.8 16.94,7.96C17.45,5.82 17.26,4.35 16.62,4M15.92,9.74L16.21,10.25C16.32,9.96 16.43,9.67 16.5,9.39C16.23,9.33 15.93,9.28 15.62,9.23C15.72,9.4 15.82,9.57 15.92,9.74M17.37,2.69C18.84,3.53 19,5.74 18.38,8.32C20.92,9.07 22.75,10.31 22.75,12C22.75,13.69 20.92,14.93 18.38,15.68C19,18.26 18.84,20.47 17.37,21.31C15.91,22.15 13.92,21.19 12,19.36C10.08,21.19 8.09,22.15 6.62,21.31C5.16,20.47 5,18.26 5.62,15.68C3.08,14.93 1.25,13.69 1.25,12C1.25,10.31 3.08,9.07 5.62,8.32C5,5.74 5.16,3.53 6.62,2.69C8.09,1.85 10.08,2.81 12,4.64C13.92,2.81 15.91,1.85 17.37,2.69M17.08,12C17.42,12.75 17.72,13.5 17.97,14.26C20.07,13.63 21.25,12.73 21.25,12C21.25,11.27 20.07,10.37 17.97,9.74C17.72,10.5 17.42,11.25 17.08,12M6.92,12C6.58,11.25 6.28,10.5 6.03,9.74C3.93,10.37 2.75,11.27 2.75,12C2.75,12.73 3.93,13.63 6.03,14.26C6.28,13.5 6.58,12.75 6.92,12M15.92,14.26C15.82,14.43 15.72,14.6 15.62,14.77C15.93,14.72 16.23,14.67 16.5,14.61C16.43,14.33 16.32,14.04 16.21,13.75L15.92,14.26M8.08,9.74C8.18,9.57 8.28,9.4 8.38,9.23C8.07,9.28 7.77,9.33 7.5,9.39C7.57,9.67 7.68,9.96 7.79,10.25L8.08,9.74M7.37,4C6.74,4.35 6.55,5.82 7.06,7.96C7.83,7.8 8.64,7.68 9.46,7.6C9.94,6.93 10.45,6.29 10.97,5.7C9.38,4.2 8,3.62 7.37,4Z"/>
          </svg>
        </div>
        
        {/* Redux */}
        <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
            <path fill="currentColor" d="M16.634 16.504C16.745 16.651 16.815 16.830 16.815 17.027C16.815 17.430 16.491 17.754 16.088 17.754C15.685 17.754 15.361 17.430 15.361 17.027C15.361 16.624 15.685 16.300 16.088 16.300C16.285 16.300 16.464 16.370 16.611 16.481L17.077 15.973C16.815 15.711 16.464 15.550 16.088 15.550C15.272 15.550 14.611 16.211 14.611 17.027C14.611 17.843 15.272 18.504 16.088 18.504C16.904 18.504 17.565 17.843 17.565 17.027C17.565 16.651 17.404 16.300 17.142 16.038L16.634 16.504ZM18.315 16.300C18.718 16.300 19.042 16.624 19.042 17.027C19.042 17.430 18.718 17.754 18.315 17.754C17.912 17.754 17.588 17.430 17.588 17.027C17.588 16.624 17.912 16.300 18.315 16.300ZM18.315 15.550C17.499 15.550 16.838 16.211 16.838 17.027C16.838 17.843 17.499 18.504 18.315 18.504C19.131 18.504 19.792 17.843 19.792 17.027C19.792 16.211 19.131 15.550 18.315 15.550ZM12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12 20.5C7.305 20.5 3.5 16.695 3.5 12C3.5 7.305 7.305 3.5 12 3.5C16.695 3.5 20.5 7.305 20.5 12C20.5 16.695 16.695 20.5 12 20.5Z"/>
          </svg>
        </div>
        
        {/* Node.js */}
        <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
            <path fill="currentColor" d="M12,1.85C11.73,1.85 11.45,1.92 11.22,2.05L3.78,6.35C3.32,6.61 3,7.12 3,7.66V16.34C3,16.88 3.32,17.39 3.78,17.65L11.22,21.95C11.45,22.08 11.73,22.15 12,22.15C12.27,22.15 12.55,22.08 12.78,21.95L20.22,17.65C20.68,17.39 21,16.88 21,16.34V7.66C21,7.12 20.68,6.61 20.22,6.35L12.78,2.05C12.55,1.92 12.27,1.85 12,1.85M12,3.05L19,7L12,11L5,7L12,3.05M5,8.6L11,12.4V19.9L5,16.1V8.6M13,12.4L19,8.6V16.1L13,19.9V12.4Z"/>
          </svg>
        </div>
        
        {/* Express */}
        <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">EX</span>
        </div>
        
        {/* SCSS */}
        <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
            <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M10,17L8,12L10,7H14L16,12L14,17H10Z"/>
          </svg>
        </div>
        
        {/* Auth0 */}
        <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">A0</span>
        </div>
        
        {/* Knex.js */}
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">KX</span>
        </div>
        
        {/* SQL Database */}
        <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
            <path fill="currentColor" d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z"/>
          </svg>
        </div>
        
        {/* Jest */}
        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">JS</span>
        </div>
      </div>
      
      <p>
        What is Badger Match? A companion finding application. We&apos;ll show
        you different candidates to help you decide which animal is your ideal
        match.
      </p>
      
      <div className="mb-4">
        <h4 className="text-lg font-semibold mb-2">Tech Stack</h4>
        <div className="text-sm text-gray-700 space-y-1">
          <div><strong>Frontend:</strong> React (JSX), Redux, React Router, SCSS/Sass (CSS Modules), Auth0, Webpack, Babel</div>
          <div><strong>Backend:</strong> Node.js, Express.js, RESTful API, Knex.js, SQLite3/PostgreSQL</div>
          <div><strong>Testing & Tools:</strong> Jest, ESLint, Superagent, npm scripts</div>
          <div><strong>Architecture:</strong> Modern full-stack JavaScript application with modular, testable code</div>
        </div>
      </div>
      
      <a href="https://github.com/tom-mcivor/BadgerMatch">BadgerMatch</a>
      <Carousel
        className="rounded-xl w-[300px] h-[300px] overflow-hidden"
        prevArrow={({ handlePrev }) => (
          <button
            onClick={handlePrev}
            className="carousel-arrow-left"
            aria-label="Previous"
            type="button"
          />
        )}
        nextArrow={({ handleNext }) => (
          <button
            onClick={handleNext}
            className="carousel-arrow-right"
            aria-label="Next"
            type="button"
          />
        )}
      >
        <Image
          src={badgerMatchHome}
          alt="image 1"
          className="w-[300px] h-[300px] object-cover"
        />
        <Image
          src={badgerMatch}
          alt="image 2"
          className="w-[300px] h-[300px] object-cover"
        />
        <Image
          src={badgerMachUploads}
          alt="image 3"
          className="w-[300px] h-[300px] object-cover"
        />
      </Carousel>
    </>
  )
}

export default Badger
