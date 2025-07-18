import { Carousel } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'
import nightMareOnDevSelect from '../../public/nightmare-on-dev-select.png'
import nightmare from '../../public/nightmare.png'
import nightmareOnDevComments from '../../public/nightmare-on-dev-comments.png'

function Nightmare() {
  return (
    <div>
      <h3>Nightmare on Dev Street</h3>
      
      {/* Tech Stack Icons */}
      <div className="flex justify-center items-center gap-4 mb-6 py-4">
        {/* Node.js */}
        <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
            <path fill="currentColor" d="M12,1.85C11.73,1.85 11.45,1.92 11.22,2.05L3.78,6.35C3.32,6.61 3,7.12 3,7.66V16.34C3,16.88 3.32,17.39 3.78,17.65L11.22,21.95C11.45,22.08 11.73,22.15 12,22.15C12.27,22.15 12.55,22.08 12.78,21.95L20.22,17.65C20.68,17.39 21,16.88 21,16.34V7.66C21,7.12 20.68,6.61 20.22,6.35L12.78,2.05C12.55,1.92 12.27,1.85 12,1.85M12,3.05L19,7L12,11L5,7L12,3.05M5,8.6L11,12.4V19.9L5,16.1V8.6M13,12.4L19,8.6V16.1L13,19.9V12.4Z"/>
          </svg>
        </div>
        
        {/* Express.js */}
        <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">EX</span>
        </div>
        
        {/* Handlebars */}
        <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">HBS</span>
        </div>
        
        {/* HTML5 */}
        <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
            <path fill="currentColor" d="M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z"/>
          </svg>
        </div>
        
        {/* CSS3 */}
        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
            <path fill="currentColor" d="M5,3L4.35,6.34H17.94L17.5,8.5H3.92L3.26,11.83H16.85L16.09,15.64L10.61,17.45L5.86,15.64L6.19,14H2.85L2.06,18L9.91,21L18.96,18L20.16,11.97L20.4,10.76L21.94,3H5Z"/>
          </svg>
        </div>
        
        {/* JavaScript */}
        <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">JS</span>
        </div>
      </div>
      
      <div className="project-left">
        <p>
          Nightmare on dev street allows the users to rate there favorite horror
          movie
        </p>
      </div>
      <div className="project-right">
        <a href="https://github.com/tom-mcivor/Nightmare-on-dev-street">Nightmare on Dev Street</a>
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
            src={nightMareOnDevSelect}
            alt="image 1"
            className="w-[300px] h-[300px] object-cover"
          />
          <Image
            src={nightmare}
            alt="image 2"
            className="w-[300px] h-[300px] object-cover"
          />
          <Image
            src={nightmareOnDevComments}
            alt="image 3"
            className="w-[300px] h-[300px] object-cover"
          />
        </Carousel>
      </div>
    </div>
  )
}

export default Nightmare
