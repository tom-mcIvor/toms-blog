import React from 'react'
import { Carousel } from '@material-tailwind/react'
import Image from 'next/image'

function MyOwnParty() {
  return (
    <div>
      <h3>My-own-party</h3>
      <div className="project-left">
        <p>
          My own party is a fun app that lets the user randomly receive an
          excuss for a random activity
        </p>
      </div>
      <div className="project-right">
        <a href="https://github.com/tom-mcivor/My-own-party">My own party</a>
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
          {/* Add your images here */}
        </Carousel>
      </div>
    </div>
  )
}

export default MyOwnParty
