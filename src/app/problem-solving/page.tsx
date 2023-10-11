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
              I didnt know how to add a key value to an object
              <dl>(ie: let obj = {} ; obj.value = 5)</dl>
            </p>
          </ul>
          <h3>What problem-solving techniques did you use?</h3>
          <ul>
            <p>Trial and error and researching</p>
          </ul>
          <h3>How did you feel throughout the process?</h3>
          <ul>
            <p>Annoyed , angry, exhausted then happy 😤 😠 😩 😊</p>
          </ul>
          <h3>What did you learn?</h3>
          <ul>
            <p>How to add a key value to an object</p>
          </ul>
        </ul>
        <h2>2. Elegantly solved a problem.</h2>
        <ul>
          <h3>What was the problem?</h3>
          <ul>
            <p>fizzbuzz</p>
          </ul>
          <h3>What problem-solving techniques did you use?</h3>
          <ul>
            <p>
              Trial and error and console logging. The fizz buzz question only
              took me 10 minutes to get this felt elegant as the suggested time
              is 4 hours (for both fizzbuzz and superfizzbuzz)
            </p>
          </ul>
          <h3>How did you feel throughout the process?</h3>
          <ul>
            <p>Determined, angry, drained then happy 🤔 😠 😩 😊</p>
          </ul>
          <h3>What did you learn?</h3>
          <ul>
            <p>
              <ul>
                <li>
                  {' '}
                  How to become more affective with my <em>
                    if
                  </em> statments{' '}
                </li>
                <li>
                  {' '}
                  I felt very happy using .map to solve the superfizzbuzz
                  question this solution was <em>very satisfying</em>
                </li>
              </ul>
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
