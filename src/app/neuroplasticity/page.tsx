'use client'
import React, { useState, useEffect } from 'react'

function Page() {
  const [isRing, setIsRing] = useState(false)
  const [backfacesVisible, setBackfacesVisible] = useState(false)

  // Helper functions for className manipulation
  const hasClassName = (element: HTMLElement, className: string) => {
    const regExp = new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)')
    return regExp.test(element.className)
  }

  const addClassName = (element: HTMLElement, className: string) => {
    if (!hasClassName(element, className))
      element.className = [element.className, className].join(' ')
  }

  const removeClassName = (element: HTMLElement, className: string) => {
    if (hasClassName(element, className)) {
      const regExp = new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)', 'g')
      const curClasses = element.className
      element.className = curClasses.replace(regExp, ' ')
    }
  }

  const toggleShape = () => {
    const shape = document.getElementById('shape')
    const stage = document.getElementById('stage')
    
    if (shape && stage) {
      if (hasClassName(shape, 'ring')) {
        removeClassName(shape, 'ring')
        addClassName(shape, 'cube')
        stage.style.transform = ''
        setIsRing(false)
      } else {
        removeClassName(shape, 'cube')
        addClassName(shape, 'ring')
        stage.style.transform = 'translateZ(-200px)'
        setIsRing(true)
      }
    }
  }

  const toggleBackfaces = () => {
    const shape = document.getElementById('shape')
    if (shape) {
      if (backfacesVisible) {
        removeClassName(shape, 'backfaces')
        setBackfacesVisible(false)
      } else {
        addClassName(shape, 'backfaces')
        setBackfacesVisible(true)
      }
    }
  }

  useEffect(() => {
    // Initialize the cube on component mount
    const shape = document.getElementById('shape')
    if (shape) {
      addClassName(shape, 'cube')
    }
  }, [])

  return (
    <div className="neuroplasticity-page">
      <div className="container-11">
        {/* Animated Title */}
        <div className="animated-title-container">
          <h1 className="animated-title">
            <span className="title-word">Neuroplasticity</span>
            <span className="title-word">&</span>
            <span className="title-word">Learning</span>
          </h1>
          <div className="title-underline"></div>
        </div>
        
        <p>
          Neuroplasticity can be viewed as a general umbrella term that refers to the brain&apos;s ability to modify, change, and
          adapt both structure and function throughout life and in response to experience
        </p>
        <p>
          Our brains are a lot like computers. We collect inputs, make calculations, then respond with outputs. Part of what
          makes our brains different, however, is their power to change biological composition. This process of adaptation
          is called neuroplasticity, and it&apos;s something we should all know a little more about.
        </p>
        <p>
          Neuroplasticity occurs most heavily during infancy and adolescence, but even as adults our brains are constantly
          rewiring themselves based on challenges and habits. The reason you were able to learn multiplication tables, for
          instance, is because your brain physically created neural pathways over time to make this process easier.
        </p>
        <p>
          <strong> So why bring this up alongside programming?</strong> Because many believe that it is a skill reserved for
          the computer savvy geek archetype and that&apos;s simply not true. There&apos;s a massive learning curve, and getting over
          that hump takes a tremendous amount of time, patience, and support.
        </p>

        {/* 3D Animation Container */}
        <div id="container">
          <div id="stage">
            <div id="shape" className="cube">
              <div className="plane one">1</div>
              <div className="plane two">2</div>
              <div className="plane three">3</div>
              <div className="plane four">4</div>
              <div className="plane five">5</div>
              <div className="plane six">6</div>
              <div className="plane seven">7</div>
              <div className="plane eight">8</div>
              <div className="plane nine">9</div>
              <div className="plane ten">10</div>
              <div className="plane eleven">11</div>
              <div className="plane twelve">12</div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="controls">
          <div>
            <button onClick={toggleShape}>
              {isRing ? 'Show Cube' : 'Show Ring'}
            </button>
          </div>
          <div>
            <label>
              <input 
                type="checkbox" 
                id="backfaces"
                checked={backfacesVisible}
                onChange={toggleBackfaces}
              />
              Show Backfaces
            </label>
          </div>
        </div>

        <p>
          Just like this 3D cube can transform and adapt its structure, our brains constantly reshape their neural 
          connections. Each time we learn something new in programming, we&apos;re literally rewiring our brains to 
          create new pathways for problem-solving and logical thinking.
        </p>
      </div>
    </div>
  )
}

export default Page