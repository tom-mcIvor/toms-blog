'use client'
import React from 'react'

function Foundations() {
  return (
    <div className="foundations-reflection-page">
      {/* Animated Title */}
      <div className="animated-title-container">
        <h1 className="animated-title">
          <span className="title-word">Foundations</span>
          <span className="title-word">Reflection</span>
        </h1>
        <div className="title-underline"></div>
      </div>

      <div className="content-container">
        {/* Weekly Learning Section */}
        <div className="weekly-section">
          <h2 className="section-title">Learning Journey: Weeks 1-5</h2>
          
          <div className="week-card week1">
            <h3 className="week-title">Week 1: GitHub & Version Control</h3>
            <div className="week-content">
              <p>
                Discovered the power of GitHub as a collaborative platform that enables developers worldwide to build advanced technologies together. The &quot;Introduction to GitHub&quot; course provided a comprehensive foundation for contributing to projects and understanding version control workflows that are essential in professional development environments.
              </p>
            </div>
          </div>

          <div className="week-card week2">
            <h3 className="week-title">Week 2: HTML & CSS Fundamentals</h3>
            <div className="week-content">
              <p>
                Explored the foundational technologies of web development. HTML provides the structural backbone of web pages, while CSS brings them to life with styling and layout. These technologies form the essential building blocks for creating engaging, responsive websites and user interfaces.
              </p>
            </div>
          </div>

          <div className="week-card week3">
            <h3 className="week-title">Week 3: JavaScript Basics</h3>
            <div className="week-content">
              <p>
                Delved into JavaScript, one of the most versatile and powerful programming languages on the web. Understanding how JavaScript enables dynamic behavior and interactivity opened up possibilities for creating engaging user experiences and complex web applications.
              </p>
            </div>
          </div>

          <div className="week-card week4">
            <h3 className="week-title">Week 4: Functions & Logic</h3>
            <div className="week-content">
              <p>
                Mastered functions as fundamental building blocks in JavaScript. Learning how functions encapsulate logic, accept inputs, and return outputs revealed the importance of modular programming and code reusability in creating maintainable applications.
              </p>
            </div>
          </div>

          <div className="week-card week5">
            <h3 className="week-title">Week 5: Template Literals & Advanced Strings</h3>
            <div className="week-content">
              <p>
                Explored template literals and their powerful capabilities for string interpolation and multi-line strings. Understanding tagged templates and embedded expressions provided new tools for creating dynamic content and more readable code structures.
              </p>
            </div>
          </div>
        </div>

        {/* Reflection Questions Section */}
        <div className="reflection-section">
          <h2 className="section-title">Core Learning Reflections</h2>

          <div className="reflection-card reflection1">
            <h3 className="reflection-title">Self-Discovery Through Learning</h3>
            <div className="question-prompt">
              What are three new things you have learnt about yourself and your ego due to the core learning?
            </div>
            <div className="reflection-content">
              <p>
                Through this learning journey, I&apos;ve rediscovered and reinforced several key aspects of my personality and learning style:
              </p>
              <ul>
                <li><strong>Independence:</strong> I thrive when given autonomy to explore and learn at my own pace</li>
                <li><strong>Spontaneous Learning:</strong> I sometimes sabotage structured approaches in favor of intuitive exploration</li>
                <li><strong>Mental Reset Ability:</strong> I can surprisingly refresh my focus through off-task activities when feeling overwhelmed</li>
              </ul>
            </div>
          </div>

          <div className="reflection-card reflection2">
            <h3 className="reflection-title">Values in Programming</h3>
            <div className="question-prompt">
              What are the role of values, empathy, and self-awareness in learning and programming?
            </div>
            <div className="reflection-content">
              <p>
                These human elements are crucial in programming because they shape how we approach problems, collaborate with others, and create solutions that truly serve users. Valuing clean, maintainable code, being self-aware of our limitations and biases, and having empathy for both teammates and end-users creates better software and more effective development teams.
              </p>
            </div>
          </div>

          <div className="reflection-card reflection3">
            <h3 className="reflection-title">Surprising Discoveries</h3>
            <div className="question-prompt">
              What has surprised you the most about the core learning?
            </div>
            <div className="reflection-content">
              <p>
                The most surprising aspect has been realizing that other developers have experienced similar emotional and psychological challenges during their learning journey. Understanding that programming involves a unique type of cognitive load compared to other subjects like mathematics has been enlightening and validating.
              </p>
            </div>
          </div>

          <div className="reflection-card reflection4">
            <h3 className="reflection-title">Learning Challenges</h3>
            <div className="question-prompt">
              What were the most challenging aspects of the core learning?
            </div>
            <div className="reflection-content">
              <p>
                The most challenging aspect has been understanding the purpose and application of &quot;core&quot; people-skills learning within a technical curriculum. Balancing time investment between developing interpersonal skills and advancing coding abilities has required careful consideration of long-term career goals versus immediate technical progress.
              </p>
            </div>
          </div>

          <div className="reflection-card reflection5">
            <h3 className="reflection-title">The Importance of Soft Skills</h3>
            <div className="question-prompt">
              Why do you think we, a programming school, are spending so much time focusing on core learning in a web development Bootcamp course?
            </div>
            <div className="reflection-content">
              <p>
                Programming is fundamentally a collaborative discipline. Strong interpersonal skills are essential for effective teamwork, clear communication of technical concepts, and creating inclusive development environments. These skills often determine career success more than technical ability alone.
              </p>
            </div>
          </div>

          <div className="reflection-card reflection6">
            <h3 className="reflection-title">Time Investment Perspective</h3>
            <div className="question-prompt">
              Does the time you spent studying core learning here feel like a waste of time? Should you have just used that time to practise programming instead?
            </div>
            <div className="reflection-content">
              <p>
                While my technical skills advance more rapidly than my interpersonal skills, I recognize that both are necessary for long-term success. Having developed people skills over many years, the incremental improvements from a 5-week program may seem minimal, but reinforcing these concepts in a professional development context adds valuable perspective to my career preparation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Foundations