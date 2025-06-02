import { Carousel } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'
import nightMareOnDevSelect from '../../public/nightmare-on-dev-select.png'
import nightmare from '../../public/nightmare.png'
import nightmareOnDevComments from '../../public/nightmare-on-dev-comments.png'
import { FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiHandlebarsdotjs } from 'react-icons/si'

function Nightmare() {
  const techStack = [
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'Handlebars', icon: <SiHandlebarsdotjs /> },
  ]

  return (
    <div className="project-left">
      <p>
        Nightmare on dev street allows the users to rate there favorite horror
        movie
      </p>
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

export default Nightmare
