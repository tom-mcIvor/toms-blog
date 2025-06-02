import { Carousel } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'
import badgerMatchHome from '../../../public/badger-match-home.png'
import badgerMatch from '../../../public/badger-match.png'
import badgerMachUploads from '../../../public/badger-match-uploads.png'
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from 'react-icons/fa'
import {
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiJest,
  SiVite,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from 'react-icons/si'

function Badger() {
  const techStack = [
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss /> },
    { name: 'Bootstrap', icon: <FaBootstrap /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Jest', icon: <SiJest /> },
    { name: 'Vite', icon: <SiVite /> },
  ]

  return (
    <>
      <h3>BadgerMatch</h3>
      <p>
        What is Badger Match? A companion finding application. We&apos;ll show
        you different candidates to help you decide which animal is your ideal
        match.
      </p>
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
    </>
  )
}

export default Badger
