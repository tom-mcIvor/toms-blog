'use client'
import React from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function ProblemSolvingPage(): JSX.Element {
  const introAnimation = useScrollAnimation(0.1)
  const firstParagraphAnimation = useScrollAnimation(0.1)
  const image2Animation = useScrollAnimation(0.1)
  const secondParagraphAnimation = useScrollAnimation(0.1)
  const image3Animation = useScrollAnimation(0.1)
  const section1Animation = useScrollAnimation(0.1)
  const section2Animation = useScrollAnimation(0.1)
  const section3Animation = useScrollAnimation(0.1)
  return (
    <div className="problem-solving-page">
    <div className="container-8">
      <div
        ref={introAnimation.ref}
        className={`transition-all duration-1000 ease-out ${
          introAnimation.isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="animated-title-container">
          <h1 className="animated-title">
            <span className="title-word">Problem</span>
            <span className="title-word">Solving</span>
            <span className="title-word">in</span>
            <span className="title-word">Programming</span>
          </h1>
          <div className="title-underline"></div>
        </div>
      </div>

      <div
        ref={firstParagraphAnimation.ref}
        className={`transition-all duration-1000 ease-out ${
          firstParagraphAnimation.isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="text-lg leading-relaxed mb-8">
          Solving problems is the core of computer science. Programmers must first
          understand how a human solves a problem, then understand how to
          translate this &quot;algorithm&quot; into something a computer can do,
          and finally how to &quot;write&quot; the specific syntax (required by a
          computer) to get the job done.
        </p>
      </div>

      <div
        ref={image2Animation.ref}
        className={`transition-all duration-1000 ease-out ${
          image2Animation.isVisible
            ? 'opacity-100 scale-100 rotate-0'
            : 'opacity-0 scale-95 rotate-1'
        }`}
      >
        <div className="image2 transform hover:scale-105 transition-transform duration-300"></div>
      </div>

      <div
        ref={secondParagraphAnimation.ref}
        className={`transition-all duration-1000 ease-out ${
          secondParagraphAnimation.isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="text-lg leading-relaxed mb-8">
          First, developers need to find a problem they can solve with software.
          Then, they have to figure out how humans solve that problem. And then,
          they have to find a way to effectively translate both the problem and
          the solution into code that can perform the task as well as (or better than) a person.
        </p>
      </div>

      <div
        ref={image3Animation.ref}
        className={`transition-all duration-1000 ease-out ${
          image3Animation.isVisible
            ? 'opacity-100 scale-100 rotate-0'
            : 'opacity-0 scale-95 -rotate-1'
        }`}
      >
        <div className="image3 transform hover:scale-105 transition-transform duration-300"></div>
      </div>

      <div
        ref={section1Animation.ref}
        className={`transition-all duration-1000 ease-out ${
          section1Animation.isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        <h1 className="text-3xl font-bold mb-8 text-center">Tell your non-tech friend a story about a time you:</h1>
      </div>
      
      <section
        ref={section1Animation.ref}
        className={`transition-all duration-1000 ease-out mb-12 ${
          section1Animation.isVisible
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-8'
        }`}
      >
        <h2 className="text-2xl font-semibold mb-6 text-blue-600">1. Were blocked on a simple problem:</h2>
        <div className="space-y-6 pl-4 border-l-4 border-blue-200">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-medium mb-3 text-gray-800">What was the problem?</h3>
            <p className="text-gray-700 leading-relaxed">
              I was trying to add a new key-value pair to a JavaScript object, but I wasn&apos;t sure about the correct syntax. For example, I had an empty object (let obj = {}) and wanted to add a property called value with the number 5 as its value.
            </p>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-medium mb-3 text-gray-800">What problem-solving techniques did you use?</h3>
            <p className="text-gray-700 leading-relaxed">
              I experimented with different ways of adding properties to objects, such as using dot notation and bracket notation. When my attempts didn&apos;t work, I searched online for examples and explanations, and read through documentation and forum posts to understand the correct approach.
            </p>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-medium mb-3 text-gray-800">How did you feel throughout the process?</h3>
            <p className="text-gray-700 leading-relaxed">
              At first, I felt frustrated and a bit embarrassed that I was stuck on something so basic. As I kept trying and researching, I became more determined to figure it out. When I finally got it working, I felt relieved and a bit more confident in my ability to solve problems, even if they seem simple.
            </p>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-medium mb-3 text-gray-800">What did you learn?</h3>
            <p className="text-gray-700 leading-relaxed">
              I learned the correct way to add a key-value pair to an object in JavaScript, and I also realized that it&apos;s normal to get stuck sometimes, even on basic things. The process reminded me that persistence and resourcefulness are important skills for a developer.
            </p>
          </div>
        </div>
      </section>

      <section
        ref={section2Animation.ref}
        className={`transition-all duration-1000 ease-out mb-12 ${
          section2Animation.isVisible
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-8'
        }`}
      >
        <h2 className="text-2xl font-semibold mb-6 text-green-600">2. Elegantly solved a problem.</h2>
        <div className="space-y-6 pl-4 border-l-4 border-green-200">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-medium mb-3 text-gray-800">What was the problem?</h3>
            <p className="text-gray-700 leading-relaxed">
              I needed to solve the classic &quot;fizzbuzz&quot; problem, and then a more advanced version called &quot;superfizzbuzz.&quot; The challenge was to write code that would process a list of numbers and output specific words depending on divisibility rules.
            </p>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-medium mb-3 text-gray-800">What problem-solving techniques did you use?</h3>
            <p className="text-gray-700 leading-relaxed">
              I broke the problem down into smaller steps and used trial and error to test my logic. I made use of console.log statements to check the output at each stage. For the superfizzbuzz problem, I realized that using the .map method on arrays would allow me to apply the logic to each number efficiently and concisely.
            </p>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-medium mb-3 text-gray-800">How did you feel throughout the process?</h3>
            <p className="text-gray-700 leading-relaxed">
              Initially, I felt a bit of pressure because I knew these are common interview questions. As I worked through the logic and saw my solution coming together, I felt more focused and motivated. When my code worked as intended, I felt a sense of accomplishment.
            </p>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-medium mb-3 text-gray-800">What did you learn?</h3>
            <p className="text-gray-700 leading-relaxed">
              I learned how to write more effective conditional statements and how to use array methods like .map to process data in a clean and readable way. This experience also reinforced the value of breaking problems into smaller parts and testing as I go.
            </p>
          </div>
        </div>
      </section>

      <section
        ref={section3Animation.ref}
        className={`transition-all duration-1000 ease-out ${
          section3Animation.isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-2xl font-semibold mb-8 text-purple-600 text-center">
          3. Reflect on how confident you feel using each of these
          problem-solving techniques/processes:
        </h2>
        <div className="container250">
          <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 'pseudocode', label: 'Pseudocode', delay: '0.1s' },
              { id: 'trying-something', label: 'Trying something', delay: '0.2s' },
              { id: 'rubber-ducky', label: 'Rubber ducky method', delay: '0.3s' },
              { id: 'reading-errors', label: 'Reading error messages', delay: '0.4s' },
              { id: 'console-logging', label: 'Console.logging', delay: '0.5s' },
              { id: 'googling', label: 'Googling', delay: '0.6s' },
              { id: 'asking-peers', label: 'Asking your peers for help', delay: '0.7s' },
              { id: 'asking-coaches', label: 'Asking coaches for help', delay: '0.8s' },
              { id: 'reflection', label: 'Improving your process with reflection', delay: '0.9s' }
            ].map((skill, index) => (
              <div
                key={skill.id}
                className={`skill-item p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                  section3Animation.isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: section3Animation.isVisible ? skill.delay : '0s',
                  animationDelay: skill.delay
                }}
              >
                <h3 className="text-lg font-medium mb-3 text-gray-800">
                  <em>{skill.label}</em>
                </h3>
                <div className="bar">
                  <label htmlFor={skill.id} className="block text-sm text-gray-600 mb-2">
                    {skill.label}
                  </label>
                  <div className="relative">
                    <progress
                      id={skill.id}
                      value={section3Animation.isVisible ? "90" : "0"}
                      max="100"
                      className="w-full h-3 rounded-full overflow-hidden bg-gray-200 transition-all duration-1000 ease-out"
                      style={{ transitionDelay: skill.delay }}
                    />
                    <div className="absolute top-0 right-0 text-xs text-gray-500 mt-1">
                      90%
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
    </div>
    </div>
  )
}
