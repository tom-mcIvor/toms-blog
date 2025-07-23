'use client'
import React from 'react'
import { Carousel } from '@material-tailwind/react'
import Image, { StaticImageData } from 'next/image'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface TechStackIcon {
  name: string
  color?: string
  icon?: React.ReactNode
  imageSrc?: string
}

interface AnimatedProjectProps {
  title: string
  githubUrl: string
  description: string[]
  images: Array<{
    src: string | StaticImageData
    alt: string
    width?: number
    height?: number
  }>
  animationDirection?: 'left' | 'right'
  delay?: number
  techStack?: TechStackIcon[]
}

export default function AnimatedProject({
  title,
  githubUrl,
  description,
  images,
  animationDirection = 'left',
  delay = 0,
  techStack
}: AnimatedProjectProps) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible
          ? 'opacity-100 translate-x-0'
          : `opacity-0 ${animationDirection === 'left' ? '-translate-x-20' : 'translate-x-20'}`
      }`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : '0ms'
      }}
    >
      {/* Main project content in flex layout */}
      <div className="project flex-col lg:flex-row">
        <div className="project-content relative z-10">
          <h3 className="project-title">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              {title}
            </a>
          </h3>
          
          {description.map((paragraph, index) => (
            <div
              key={index}
              className={`mb-5 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay: isVisible ? `${delay + 200 + index * 100}ms` : '0ms'
              }}
            >
              {paragraph.startsWith('•') ? (
                <ul className="list-disc pl-4 py-0 text-white">
                  <li className="ml-4">
                    {paragraph.substring(2)}
                  </li>
                </ul>
              ) : (
                <p>{paragraph}</p>
              )}
            </div>
          ))}
        </div>
        
        <div
          className={`project-carousel-container relative z-10 transition-all duration-1000 flex flex-col items-center ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{
            transitionDelay: isVisible ? `${delay + 500}ms` : '0ms'
          }}
        >
          <Carousel className="rounded-xl w-[500px] h-[500px] overflow-hidden">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={image.width || 500}
                height={image.height || 500}
                className="w-[500px] h-[500px] object-cover"
              />
            ))}
          </Carousel>
          
          {/* Tech Stack Icons - Now directly below the carousel */}
          {techStack && (
            <div
              className={`flex justify-center items-center gap-3 mt-4 py-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay: isVisible ? `${delay + 600}ms` : '0ms'
              }}
            >
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-500 hover:scale-110 ${
                    tech.name.toLowerCase().includes('handlebars') ? 'handlebars-contrast' : ''
                  } ${
                    tech.name.toLowerCase().includes('express') ? 'express-contrast' : ''
                  }`}
                  style={{ backgroundColor: tech.color }}
                  title={tech.name}
                >
                  {tech.imageSrc ? (
                    <Image
                      src={tech.imageSrc}
                      alt={tech.name}
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                    />
                  ) : (
                    tech.icon
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
