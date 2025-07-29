'use client'
import React from 'react'


function Page() {
  return (
    <div className="emotional-intelligence-page">
        <div className="container4">
        </div>
        <div className="move-me">
          <h3>Definition:</h3>
          <p>
            Emotional Intelligence (EI) is the ability to manage both your own emotions and understand the emotions of people
            around you. There are five key elements to EI: self-awareness, self-regulation, motivation, empathy, and social
            skills.
          </p>
          
          <h3>Why It&apos;s Important</h3>
          <p>
            Without knowing how to regulate our emotions and to stretch our discomfort, we&apos;re limited in our personal and
            professional growth, relationships, and fulfillment in our lives. When humans feel contained, we&apos;ll also feel
            stuck, hopeless, complacent, lonely, even bitter, which plays a large part in many of our social issues today.
          </p>
          
          <h3>My Thoughts</h3>
          <p>
            Emotional IQ is the hardest thing to deal with as it gets to the core of why people act in certain ways. This is
            the reason why some people find it hard to study while others don&apos;t have a problem with it. It&apos;s about how the brain
            works around the environment - very complicated.
          </p>
          <p>
            In general, people have the same kind of ideas and thoughts as we are genetically so much the same.
            It&apos;s also important to realize that this topic, while helpful, is different from writing code.
          </p>
        </div>
        <div className="area"></div>
        
        {/* Animated balls */}
        <div className="ball"></div>
        
        {/* Interactive dropdown */}
        <div className="dropdown">
          <button className="dropbtn">More Info</button>
          <div className="dropdown-content">
            <a href="#">Self-awareness</a>
            <a href="#">Self-regulation</a>
            <a href="#">Motivation</a>
            <a href="#">Empathy</a>
            <a href="#">Social skills</a>
          </div>
        </div>
    </div>
  )
}

export default Page