'use client'
import React from 'react'

function page() {
  return (
    <>
    <div className="container-8">
      <p>
        Solving problems is the core of computer science. Programmers must first
        understand how a human solves a problem, then understand how to
        translate this &quot;algorithm&quot; into something a computer can do,
        and finally how to &quot;write&quot; the specific syntax (required by a
        computer) to get the job done.
      </p>
      <div className="image2"></div>
      <p>
        First, developers need to find a problem they can solve with software.
        Then, they have to figure out how humans solve that problem. And then,
        they have to find a way to effectively translate both the problem and
        well as (or better than) a person.
      </p>
      <div className="image3"></div>
      <h1>Tell your non-tech friend a story about a time you:</h1>
      <ul>
        <h2>1. Were blocked on a simple problem:</h2>
        <ul>
          <h3>What was the problem?</h3>
          <ul>
            <p>
              I was trying to add a new key-value pair to a JavaScript object, but I wasn&apos;t sure about the correct syntax. For example, I had an empty object (let obj = {}) and wanted to add a property called value with the number 5 as its value.
            </p>
          </ul>
          <h3>What problem-solving techniques did you use?</h3>
          <ul>
            <p>
              I experimented with different ways of adding properties to objects, such as using dot notation and bracket notation. When my attempts didn&apos;t work, I searched online for examples and explanations, and read through documentation and forum posts to understand the correct approach.
            </p>
          </ul>
          <h3>How did you feel throughout the process?</h3>
          <ul>
            <p>
              At first, I felt frustrated and a bit embarrassed that I was stuck on something so basic. As I kept trying and researching, I became more determined to figure it out. When I finally got it working, I felt relieved and a bit more confident in my ability to solve problems, even if they seem simple.
            </p>
          </ul>
          <h3>What did you learn?</h3>
          <ul>
            <p>
              I learned the correct way to add a key-value pair to an object in JavaScript, and I also realized that it&apos;s normal to get stuck sometimes, even on basic things. The process reminded me that persistence and resourcefulness are important skills for a developer.
            </p>
          </ul>
        </ul>
        <h2>2. Elegantly solved a problem.</h2>
        <ul>
          <h3>What was the problem?</h3>
          <ul>
            <p>
              I needed to solve the classic &quot;fizzbuzz&quot; problem, and then a more advanced version called &quot;superfizzbuzz.&quot; The challenge was to write code that would process a list of numbers and output specific words depending on divisibility rules.
            </p>
          </ul>
          <h3>What problem-solving techniques did you use?</h3>
          <ul>
            <p>
              I broke the problem down into smaller steps and used trial and error to test my logic. I made use of console.log statements to check the output at each stage. For the superfizzbuzz problem, I realized that using the .map method on arrays would allow me to apply the logic to each number efficiently and concisely.
            </p>
          </ul>
          <h3>How did you feel throughout the process?</h3>
          <ul>
            <p>
              Initially, I felt a bit of pressure because I knew these are common interview questions. As I worked through the logic and saw my solution coming together, I felt more focused and motivated. When my code worked as intended, I felt a sense of accomplishment.
            </p>
          </ul>
          <h3>What did you learn?</h3>
          <ul>
            <p>
              I learned how to write more effective conditional statements and how to use array methods like .map to process data in a clean and readable way. This experience also reinforced the value of breaking problems into smaller parts and testing as I go.
            </p>
          </ul>
        </ul>
        <h2>
          3. Reflect on how confident you feel using each of these
          problem-solving techniques/processes:
        </h2>
        <div className="container250">
          <ul>
            <ul>
              <h3>
                {' '}
                <em>Pseudocode</em>
              </h3>
              <div className="bar">
                <label htmlFor="skills">Pseudocode</label>
                <progress id="skills" value="90" max="100" />
              </div>
              <h3>
                <em>Trying something</em>
              </h3>
              <div className="bar">
                <label htmlFor="skills">Trying something</label>
                <progress id="skills" value="90" max="100" />
              </div>
              <h3>
                <em>Rubber ducky method</em>
              </h3>
              <div className="bar">
                <label htmlFor="skills">Rubber ducky method</label>
                <progress id="skills" value="90" max="100" />
              </div>
              <h3>
                <em>Reading error messages</em>
              </h3>
              <div className="bar">
                <label htmlFor="skills">Reading error messages</label>
                <progress id="skills" value="90" max="100" />
              </div>
              <h3>
                <em>Console.logging</em>
              </h3>
              <div className="bar">
                <label htmlFor="skills">Console.logging</label>
                <progress id="skills" value="90" max="100" />
              </div>
              <h3>
                <em>Googling</em>
              </h3>
              <div className="bar">
                <label htmlFor="skills">Googling</label>
                <progress id="skills" value="90" max="100" />
              </div>
              <h3>
                <em>Asking your peers for help</em>
              </h3>
              <div className="bar">
                <label htmlFor="skills">Asking your peers for help</label>
                <progress id="skills" value="90" max="100" />
              </div>
              <h3>
                <em>Asking coaches for help</em>
              </h3>
              <div className="bar">
                <label htmlFor="skills">Asking coaches for help</label>
                <progress id="skills" value="90" max="100" />
              </div>
              <h3>
                <em>Improving your process with reflection</em>
              </h3>
              <div className="bar">
                <label htmlFor="skills">
                  Improving your process with reflection
                </label>
                <progress id="skills" value="90" max="100" />
              </div>
            </ul>
          </ul>
        </div>
      </ul>
      <br />
      <br />
      <br />
    </div>
    </>
  )
}

export default page
