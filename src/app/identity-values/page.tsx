'use client'
import React from 'react'

function page() {
  return (
    <>
    <p id="white"> Identity and personal stuff... </p>
    <span className="inside-container">
      <div className="question1">
        <p> Explain a situation where you have made an ethical decision. Discuss how you weighed up the values involved
          in that decision, the decision you made, and how you reflect on the decision now.
          <br/>
          <br/>
          I reported an accident at the airport. An Art-Deco plane had crashed just next to the runway and we were
          boarding our ATR plane. The best decision was to just wait hold the board of our plane and call in the issue
        </p>
      </div>
      <div className="question2">
        <p>
          Describe how your culture and the people around you have influenced your values and identity.
          <br/>
          <br/>
          I copy what other people do to some extent I think we all do. I get to choose who I copy the most and the set
          of values and identities I want to copy off them
        </p>
      </div>
      <div className="question3">
        <p>
          Identify your strengths and how they will support you during your learning journey.
          <br/>
          <br/>
          My stengths are: I&apos;ve got time to study and learn also I&apos;ve got good support around me
        </p>
      </div>
      <div className="question4">
        <p>
          Evaluate your limitations in terms of your learning and career development. How might these affect your
          learning journey?
          <br/>
          <br/>
          I&apos;ve only got 24 hours in the day
        </p>
      </div>
      <div className="question5">
        <p>
          Share an example of when you were trying to work productively with others, but there was resistance or
          tension. Discuss strategies you tried at the time, how effective they were, and your reflections on what other
          strategies you would try now and why.
          <br/>
          <br/>
          Sometimes we can get short staffed there is too much work to do
          we all only have 2 hands afterall..., there was no real stratergy around this apart from: Realising the job is
          going to take longer.
          Try not get angry at other people. And...
          After the issue, (or maybe during (if its feasible)) try address why it&apos;s happened eg:
          underskilled staff, people not pulling weight, mistakes.
        </p>
      </div>
    </span>
    <span className="direction">
      <input list="subjects" name="subject"/>
      <datalist id="subjects">
        <option> <a href="#top">Question 1</a> </option>
        <option>Question 2</option>
        <option>Question 3</option>
        <option>Question 4</option>
        <option>Question 5</option>
    </datalist>
    </span>
    </>
  )
}

export default page