'use client'
import React from 'react'

function LearningPlan() {
  return (
    <div className="learning-plan-page">
      {/* Animated Title */}
      <div className="animated-title-container">
        <h1 className="animated-title">
          <span className="title-word">Learning</span>
          <span className="title-word">Plan</span>
        </h1>
        <div className="title-underline"></div>
      </div>

      <div className="content-container">
        {/* Foundations Section */}
        <div className="foundations-section">
          
          <div className="question-card question1">
            <h3 className="question-title">Long-term Goals & Career Pathway</h3>
            <div className="question-prompt">What is your long term goal or career pathway?</div>
            <div className="answer-content">
              <p><strong>Initial Response:</strong> My learning goals are to learn enough HTML, CSS and JavaScript to get a job.</p>
              <p className="reflection"><strong>Reflection:</strong> This goal is still the same which is to gain knowledge and skills through all the learning modules that come up. I want to get employment in the web development industry. Find a job I like and can fit in to a team.</p>
            </div>
          </div>

          <div className="question-card question2">
            <h3 className="question-title">Strengths & Limitations</h3>
            <div className="question-prompt">A description of your strengths and limitations when it comes to learning</div>
            <div className="answer-content">
              <p><strong>Initial Response:</strong> Just to get a job to start with. My limitations are that I only have so much time.</p>
              <p className="reflection"><strong>Reflection:</strong> My strengths are that I keep trying. It took me more than one time of applying to get accepted on to this course. When I was at university I stuck at it when I found studying got harder and harder. One thing that was a limitation to my learning was I became so anxious and stressed at exams times that my performance suffered. I still find deadlines hard but I now try to pace myself. I need to work longer hours to get the work done.</p>
            </div>
          </div>

          <div className="question-card question3">
            <h3 className="question-title">Non-Technical Skills Development</h3>
            <div className="question-prompt">What skills (non-technical core/human skills) would you like to see developed in yourself while at Dev Academy?</div>
            <div className="answer-content">
              <p><strong>Initial Response:</strong> I think it&apos;s pretty much too late to &apos;develop&apos; my non-technical skills - they will change based on what environment I&apos;m in, I am who I am.</p>
              <p className="reflection"><strong>Reflection:</strong> I think I have gone ahead with my technical skills and maybe feel I bit short of where I wanted to get to. There were lots of interesting modules and I kept up with the work load. In the human skills I have tried to take part in the team work and group projects. There have been things that I haven&apos;t done before like the remote learning and the presentations.</p>
            </div>
          </div>

          <div className="question-card question4">
            <h3 className="question-title">Workload Management</h3>
            <div className="question-prompt">A commitment to how you will manage your workload in this programme</div>
            <div className="answer-content">
              <p><strong>Initial Response:</strong> Just study and plod away at the given tasks.</p>
              <p className="reflection"><strong>Reflection:</strong> I gave up full time work doing admin with the DHB Covid team that I&apos;d had for over a year. I needed to have my full focus on the course and spend all my time on keeping up with the workload. I was able to stay at home which helped and I had no distractions like flatmates or planned social events. I have plodded away and tried to keep up even when I felt I hit the wall a few times. I have been able to work in the weekends to go over stuff I learned through the week.</p>
            </div>
          </div>

          <div className="question-card question5">
            <h3 className="question-title">Working with Others & Seeking Help</h3>
            <div className="question-prompt">How you will manage yourself to work productively and safely with other learners, facilitators and industry/community representatives. What you will do when things are building up and starting to get to you. A commitment as to how and where you will seek help in a timely way.</div>
            <div className="answer-content">
              <p><strong>Initial Response:</strong> Well if I get stuck then I will use the facilitators to help me. If another student wants to help then that&apos;s a bonus. Likewise I will offer my help if needed.</p>
              <p className="reflection"><strong>Reflection:</strong> Well I did get stuck quite a few times. I accepted the help of a tutor and asked questions all the time. I am much better at asking for help now than I was at first. Lots of the others doing the course have helped me when I have reached out which was good.</p>
            </div>
          </div>

          <div className="question-card question6">
            <h3 className="question-title">Expectations from Facilitation Team</h3>
            <div className="question-prompt">A description of what you expect from the Facilitation team</div>
            <div className="answer-content">
              <p><strong>Initial Response:</strong> Clear instructions and useful help if I need it.</p>
              <p className="reflection"><strong>Reflection:</strong> I work best if I know exactly what is expected. I find it hard to guess what is wanted so I need clear directions. Bullet points or lists help me get organised. Some of the jargon is hard to get my head around.</p>
            </div>
          </div>

          <div className="question-card question7">
            <h3 className="question-title">Scheduling & Commitments</h3>
            <div className="question-prompt">Any scheduling information such as block-out times when you are committed to other things. For example, you might have whānau commitments like school drop-offs.</div>
            <div className="answer-content">
              <p><strong>Initial Response:</strong> Just some randomly timed sport.</p>
              <p className="reflection"><strong>Reflection:</strong> No I have not had any commitments that I needed to plan into my day. I still worked when the power was out in our street for a whole day. I was pleased that I managed to work something out so I could still join in but I was out of my comfort zone that day.</p>
            </div>
          </div>
        </div>

        {/* Keep the images */}
        <div className="tada"></div>

        {/* Keep the colored bootcamp section */}
        <div className="bootcamp">
          <div className="bootcamp-content">
            <h2 className="section-title">Bootcamp Learning Plan</h2>
            
            <div className="bootcamp-question">
              <h3>Long-term Career Goals</h3>
              <p><strong>Initial Response:</strong> My long-term goal is to establish a rewarding career in my chosen field. While finding employment is my immediate objective, I aim to continually enhance my skills and expertise. In the short term, I seek a position that aligns with my interests and allows me to contribute to meaningful projects. Over time, I hope to take on more responsibilities, potentially in leadership roles.</p>
              <p className="reflection"><strong>Reflection:</strong> My career goals have remained consistent throughout this journey. I want to build a sustainable career in web development where I can continue learning and growing. The bootcamp experience has reinforced my commitment to this path and given me confidence that I can achieve these goals through dedication and continuous improvement.</p>
            </div>

            <div className="bootcamp-question">
              <h3>What do you think your biggest strengths and limitations will be in Bootcamp?</h3>
              <p><strong>Initial Response:</strong> Limitations: I only have 24 hours in the day</p>
              <p className="reflection"><strong>Reflection:</strong> Reflecting on my strength of keeping trying and never giving up. I have found the pace frantic and really hard to keep up with. The human skills component was a rocky road for me, but I have developed some coping skills. I still worry and get anxious but have learned to let go of things that I can&apos;t change.</p>
            </div>

            <div className="bootcamp-question">
              <h3>What do you think your biggest non-technical challenge at Bootcamp will be?</h3>
              <p><strong>Initial Response:</strong> Sleeping</p>
              <p className="reflection"><strong>Reflection:</strong> Yes, because I work late I have found it hard to wind down and getting to sleep was a problem. Towards the end of boot camp, I woke up tired and it took me a while to get started.</p>
            </div>

            <div className="bootcamp-question">
              <h3>What non-technical skills - human skills - would you like to see developed in yourself while at Dev Academy?</h3>
              <p><strong>Initial Response:</strong> Don&apos;t know</p>
              <p className="reflection"><strong>Reflection:</strong> I have learned in this course that focus is a big issue and when problems come up that I can&apos;t change I need to keep going and not let distractions get the better of me.</p>
            </div>

            <div className="bootcamp-question">
              <h3>What are your expectations from the Bootcamp team?</h3>
              <p><strong>Initial Response:</strong> They should be doing the work, I don&apos;t want someone that&apos;s been on holiday for foundations asking week 2 questions</p>
              <p className="reflection"><strong>Reflection:</strong> That the team wants me to be successful and will help me reach my goal of graduating and getting a job.</p>
            </div>

            <div className="bootcamp-question">
              <h3>What are your expectations of yourself on Bootcamp?</h3>
              <p><strong>Initial Response:</strong> Just to do the work</p>
              <p className="reflection"><strong>Reflection:</strong> I will work hard and be successful.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearningPlan