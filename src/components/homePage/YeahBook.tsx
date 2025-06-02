import { Carousel } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
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

function YeahBook() {
  const techStack = [
    { name: 'JavaScript', icon: <FaJs /> },
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
    <div>
      <h3 className="text-lg flex items-center gap-2">
        YeahBook <span className="text-2xl text-cyan-400">TEST</span>
      </h3>
      <div className="project-left">
        <p>
          Our Yeah-Book app is a platform that allows users to create yearbooks
          and upload their profile and details to each yearbook. Similar to
          Facebook, Yeah-Book provides a social setting for users to connect
          with others and share content. The app&apos;s unique feature of
          customizable yearbooks makes it a great tool for preserving memories
          and staying connected with friends and classmates. With its
          user-friendly interface and innovative approach to social networking,
          Yeah-Book is a valuable app that provides a unique service to its
          users.
        </p>
      </div>
      <div className="project-right">
        <a href="https://github.com/tom-mcivor/Yeah-book">Yeah-book</a>
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
            src="/yeah-book-profile-2.png"
            alt="image 1"
            width={300}
            height={300}
            className="w-[300px] h-[300px] object-cover"
          />
          <Image
            src="/yeah-book-profile.png"
            alt="image 2"
            width={300}
            height={300}
            className="w-[300px] h-[300px] object-cover"
          />
          <Image
            src="/yeah-book.png"
            alt="image 3"
            width={300}
            height={300}
            className="w-[300px] h-[300px] object-cover"
          />
        </Carousel>
      </div>
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

export default YeahBook
