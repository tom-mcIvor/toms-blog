'use client'
import React from 'react'
import Navbar from '../../components/Nav'

function learningPlan() {
  return (
    <>  
    <Navbar/>
       <div> 
 <pre className="white-space-pre-wrap">       
key:
  before bootcamp: black
  after bootcamp: blue
          </pre>
       </div>
      <p className="qustion"> What is your long term goal or career pathway?</p>
      <ul>
        <p>My learning goals are to learn enough html css and js to get a job</p>
        <p className="reflection">This goal is still the same which is to gain knowledge and skills through all the learning
          modules that come up. I want to get employment in the web development industry. Find a job I like and can fit in to
          a team.</p>
      </ul>
      <p className="qustion"> What is your long term goal or career pathway?
        A description of your strengths and limitations when it comes to learning</p>
      <ul>
        <p>Just to get a job to start with</p>
        <p>My limitations are that i only have so much time</p>
        <p className="reflection">My strengths are that I keep trying. It took me more than one time of applying to get accepted
          on to this course. When I was at university I stuck at it when I found studying got harder and harder. One thing
          that was a limitation to my learning was I became so anxious and stressed at exams times that my performance
          suffered. I still find deadlines hard but I now try to pace myself. I need to work longer hours to get the work
          done.</p>
      </ul>
      <p className="qustion"> What skills (non-technical core/human skills) would you like to see developed in yourself while at
        Dev Academy?</p>
      <ul>
        <p>I think it&apos;s pretty much too late to &apos;develop&apos; my non-technical skills
          they will change based on what environment i&apos;m in, I am who I am</p>
        <p className="reflection">I think I have gone ahead with my technical skills and maybe feel i bit short of were I wanted
          to get to. There were lots of interesting modules and I kept up with the work load. In the human skills I have tried
          to take part in the team work and group projects. There have been things that I haven’t done before like the remote
          learning and the presentations.</p>
      </ul>
      <p className="qustion">A commitment to how you will manage your workload in this programme. This should include:</p>
      <ul>
        <p>Just study and plod away at the given tasks</p>
        <p className="reflection">I gave up full time work doing admin with the DHB Covid team that I’d had for over a year. I
          needed to have my full focus on the course and spend all my time on keeping up with the workload. I was able to stay
          at home which helped and I had no distractions like flatmates or planned social events. I have plodded away and
          tried to keep up even when I felt I hit the wall a few times. I have been able to work in the weekends to go over
          stuff I learned through the week.</p>
      </ul>
      <p className="qustion">An explanation of how you will manage yourself to work productively and safely with other learners,
        Facilitators and industry/community representatives
        What you will do when things are building up and starting to get to you
        A commitment as to how and where you will seek help in a timely way</p>
      <ul>
        <p>Well if I get stuck then I will use the facilitaors to help me. If another student wants to help then thats a bonus
        </p>
        <p>Likewise I will offer my help if needed</p>
        <p className="reflection">Well I did get stuck quite a few times. I accepted the help of a tutor and asked questions all
          the time. I am much better at asking for help now than I was at first. Lots of the others doing the course have
          helped me when I have reached out which was good.</p>
      </ul>
      <p className="qustion">A description of what you expect from the Facilitation team</p>
      <ul>
        <p>Clear instuctions and useful help if I need it</p>
        <p className="reflection">I work best if I know exactly what is expected. I find it hard to guess what is wanted so I need
          clear directions. Bullet points or lists help me get organised. Some of the jargon is hard to get my head around.
        </p>
      </ul>
      <p className="qustion">Any scheduling information such as block-out times when you are committed to other things. For
        example, you might have whānau commitments like school drop-offs. It&apos;s important to plan these in.</p>
      <ul>
        <p>Just some randomly timed sport</p>
        <p className="reflection">No I have not had any commitments that I needed to plan into my day. I still worked when the
          power was out in our street for a whole day. I was pleased that I managed to work something out so I could still
          join in but I was out of my comfort zone that day.</p>
      </ul>
      <div className="goals">
      </div>
      <div className="tada">
      </div>
      <br />
      <br />
      <div className="bar">
        <label htmlFor="skills">Web dev skills</label>
        <progress id="skills" value="80" max="100"/>
      </div>
      <br />
      <br />
      <br />
      <div className="bootcamp">
        <div>
      <pre className="white-space-pre-wrap">
        key:
        before bootcamp: pink
        after bootcamp: white
      </pre>
    </div>
    <p>My long-term goal is to establish a rewarding career in my chosen field. While finding employment is my immediate
      objective, I aim to continually enhance my skills and expertise. In the short term, I seek a position that aligns with
      my interests and allows me to contribute to meaningful projects. Over time, I hope to take on more responsibilities,
      potentially in leadership roles</p>
    <p className="reflection">Already discussed</p>
    <h3>What do you think your biggest strengths and limitations will be in Bootcamp?</h3>
    <p>limitations: I only have 24 hours in the day</p>
    <p className="reflection">Reflecting on my strength of keeping trying and never giving up.</p>
    <p className="reflection">I have found the pace frantic and really hard to keep up with. The human skills component was a
      rocky road for me, but I have developed some coping skills. I still worry and get anxious but have learned to let go
      of things that I can&apos;t change.</p>
    <h3>What do you think your biggest non-technical challenge at Bootcamp will be?</h3>
    <p>sleeping</p>
    <p className="reflection">Yes, because I work late I have found it hard to wind down and getting to sleep was a problem.
      Towards the end of boot camp, I woke up tired and it took me a while to get started.</p>
    <h3>What non-technical skills - human skills - would you like to see developed in yourself while at Dev Academy?</h3>
    <p>Don&apos;t know</p>
    <p className="reflection">I have learned in this course that focus is a big issue and when problems come up that I can&apos;t
      change I need to keep going and not let distractions get the better of me.</p>
    <h3>What are your expectations from the Bootcamp team?</h3>
    <p>They should be doing the work, I dont&apos; want someone that&apos;s been on holiday for foundations asking week 2 questions
    </p>
    <p className="reflection">That the team wants me to be successful and will help me reach my goal of graduating and getting a
      job.</p>
    <h3>What are your expectations of yourself on Bootcamp?</h3>
    <p>Just to do the work</p>
    <p className="reflection">I will work hard and be successful.</p>
    </div>
    </>
  )
}

export default learningPlan