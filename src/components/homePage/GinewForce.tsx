import React from 'react'
import { Carousel } from '@material-tailwind/react'
import Image from 'next/image'

function GinewForce() {
  return (
    <div>
      <h3>GinewForce</h3>
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
  )
}

export default GinewForce
