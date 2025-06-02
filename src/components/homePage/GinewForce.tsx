import React from 'react'
import { Carousel } from '@material-tailwind/react'
import Image from 'next/image'
import { FaReact } from 'react-icons/fa'
import { SiRedux, SiSqlite, SiKnex } from 'react-icons/si'

function GinewForce() {
  const techStack = [
    { name: 'React', icon: <FaReact /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'SQLite', icon: <SiSqlite /> },
    { name: 'Knex', icon: <SiKnex /> },
  ]

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
      <div className="flex flex-wrap gap-3 justify-center py-4">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded shadow text-base text-gray-700"
          >
            <span className="text-xl">{tech.icon}</span>
            {tech.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default GinewForce
