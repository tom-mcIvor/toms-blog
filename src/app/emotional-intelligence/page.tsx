'use client'
import React, { useEffect, useRef, useState } from 'react'


function Page() {
  const imageRef = useRef<HTMLDivElement>(null)
  const [showMoreInfo, setShowMoreInfo] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      {
        threshold: 0.3, // Trigger when 30% of the image is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before the image is fully visible
      }
    )

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current)
      }
    }
  }, [])

  const handleMoreInfoClick = () => {
    setShowMoreInfo(!showMoreInfo)
  }

  return (
    <div className="emotional-intelligence-page">
        <div className="container4">
        </div>
        <div className="move-me">
          {/* Animated Title */}
          <div className="animated-title-container">
            <h1 className="animated-title">
              <span className="title-word">Emotional</span>
              <span className="title-word">Intelligence</span>
            </h1>
            <div className="title-underline"></div>
          </div>
          
          {/* Animated Image */}
          <div className="animated-image-container">
            <div ref={imageRef} className="area"></div>
          </div>
          
          <h3>Definition:</h3>
          <p>
            Emotional Intelligence (EI) represents the sophisticated ability to recognize, understand, and effectively manage both your own emotions and those of others around you. This multifaceted skill encompasses five fundamental pillars: self-awareness (knowing your emotional patterns), self-regulation (controlling emotional responses), intrinsic motivation (driving yourself toward meaningful goals), empathy (connecting with others&apos; feelings), and advanced social skills (navigating complex interpersonal dynamics with finesse).
          </p>
          
          <h3>Why It&apos;s Important</h3>
          <p>
            Emotional intelligence serves as the cornerstone of human flourishing in both personal and professional spheres. Without the capacity to understand and regulate our emotional responses, we become prisoners of our impulses, limiting our potential for growth, meaningful relationships, and life satisfaction. When individuals lack emotional awareness, they often experience feelings of being trapped, leading to hopelessness, complacency, isolation, and resentment—emotions that contribute significantly to many of today&apos;s societal challenges and mental health crises.
          </p>
          <p>
            Moreover, EI directly impacts our ability to communicate effectively, resolve conflicts constructively, make sound decisions under pressure, and build the trust necessary for successful collaboration. In an increasingly interconnected world, these skills have become essential for leadership, innovation, and creating positive change.
          </p>
          
          <h3>My Thoughts</h3>
          <p>
            Emotional intelligence presents one of the most fascinating and challenging aspects of human development because it touches the very core of what makes us uniquely human. Unlike technical skills that can be learned through repetition, EI requires deep self-reflection and the courage to confront uncomfortable truths about ourselves and our behavioral patterns.
          </p>
          <p>
            What strikes me most is how EI explains the vast differences in how people approach learning and problem-solving. Some individuals thrive in challenging environments because they&apos;ve developed the emotional resilience to persist through difficulty, while others become overwhelmed by the same circumstances. This isn&apos;t about intelligence in the traditional sense—it&apos;s about emotional regulation and self-awareness.
          </p>
          <p>
            While we share fundamental human experiences and genetic similarities, our emotional responses are shaped by countless variables: upbringing, cultural context, personal experiences, and individual neurological differences. This complexity makes emotional intelligence both universally relevant and deeply personal.
          </p>
          <p>
            As someone learning to code, I&apos;ve noticed an interesting parallel: while programming requires logical, systematic thinking, developing emotional intelligence demands a more nuanced, adaptive approach. Both are essential skills, but they engage different aspects of our cognitive and emotional capabilities.
          </p>
          
          {/* More Info Button */}
          <div className="more-info-button-container">
            <button
              className="more-info-btn"
              onClick={handleMoreInfoClick}
            >
              {showMoreInfo ? 'Hide Details' : 'More Info'}
            </button>
          </div>
          
          {/* Animated More Info Section */}
          <div className={`more-info-section ${showMoreInfo ? 'show' : ''}`}>
            <div className="more-info-content">
              <h2>The Five Elements of Emotional Intelligence</h2>
              <div className="ei-elements">
                <div className="ei-element">
                  <h3>Self-awareness</h3>
                  <p>Understanding your own emotions, strengths, weaknesses, and values. This includes recognizing how your emotions affect your thoughts and behavior.</p>
                </div>
                <div className="ei-element">
                  <h3>Self-regulation</h3>
                  <p>Managing your emotions effectively and adapting to change. This involves controlling impulsive behaviors and managing stress in healthy ways.</p>
                </div>
                <div className="ei-element">
                  <h3>Motivation</h3>
                  <p>Being driven to achieve goals for personal satisfaction rather than external rewards. This includes having a passion for work and persisting in the face of obstacles.</p>
                </div>
                <div className="ei-element">
                  <h3>Empathy</h3>
                  <p>Understanding and sharing the feelings of others. This involves being able to read emotional cues and respond appropriately to others&apos; emotions.</p>
                </div>
                <div className="ei-element">
                  <h3>Social skills</h3>
                  <p>Managing relationships and building networks effectively. This includes communication skills, conflict resolution, and the ability to inspire and influence others.</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Page