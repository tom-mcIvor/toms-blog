'use client'
import React from 'react'

function Page() {
  return (
    <div className="identity-values-page">
      {/* Animated Title */}
      <div className="animated-title-container">
        <h1 className="animated-title">
          <span className="title-word">Identity</span>
          <span className="title-word">&</span>
          <span className="title-word">Values</span>
        </h1>
        <div className="title-underline"></div>
      </div>

      <div className="content-container">
        <div className="question-section question1">
          <h3 className="question-title">Ethical Decision Making</h3>
          <div className="question-content">
            <p className="question-prompt">
              Explain a situation where you have made an ethical decision. Discuss how you weighed up the values involved
              in that decision, the decision you made, and how you reflect on the decision now.
            </p>
            <div className="answer-content">
              <p>
                I reported an aircraft incident at the airport when I witnessed an Art-Deco plane crash near the runway while we were boarding our ATR aircraft. Despite the potential for flight delays and inconvenience, I immediately prioritized safety and reported the incident to airport authorities.
              </p>
              <p>
                The values I weighed were safety versus convenience, responsibility versus self-interest, and doing what&apos;s right versus what&apos;s easy. I chose to act on my core values of safety and responsibility, understanding that human lives and aviation safety protocols must always take precedence over personal convenience.
              </p>
            </div>
          </div>
        </div>

        <div className="question-section question2">
          <h3 className="question-title">Cultural Influence</h3>
          <div className="question-content">
            <p className="question-prompt">
              Describe how your culture and the people around you have influenced your values and identity.
            </p>
            <div className="answer-content">
              <p>
                I recognize that we naturally model behaviors and values from those around us—it&apos;s a fundamental part of human development. However, I&apos;ve learned to be intentional about who I choose as role models and which values I adopt.
              </p>
              <p>
                My cultural background has taught me the importance of community, respect, and continuous learning. The people I surround myself with reinforce values of integrity, perseverance, and empathy, which have become integral to my identity and decision-making process.
              </p>
            </div>
          </div>
        </div>

        <div className="question-section question3">
          <h3 className="question-title">Personal Strengths</h3>
          <div className="question-content">
            <p className="question-prompt">
              Identify your strengths and how they will support you during your learning journey.
            </p>
            <div className="answer-content">
              <p>
                My key strengths include having dedicated time for focused study and learning, which allows me to dive deep into complex topics without external pressures. Additionally, I have a strong support network of family, friends, and mentors who encourage my growth and provide guidance when needed.
              </p>
              <p>
                These strengths create an optimal learning environment where I can take risks, make mistakes, and iterate on my understanding without fear of judgment. This foundation enables sustained effort and resilience during challenging phases of the learning process.
              </p>
            </div>
          </div>
        </div>

        <div className="question-section question4">
          <h3 className="question-title">Learning Limitations</h3>
          <div className="question-content">
            <p className="question-prompt">
              Evaluate your limitations in terms of your learning and career development. How might these affect your
              learning journey?
            </p>
            <div className="answer-content">
              <p>
                Like everyone, I&apos;m constrained by the fundamental limitation of time—only 24 hours in each day. This means I must be strategic about prioritizing learning activities and managing my energy effectively throughout each day.
              </p>
              <p>
                This limitation requires me to develop strong time management skills, set clear priorities, and maintain focus on high-impact learning activities. It also means accepting that mastery takes time and being patient with the learning process rather than expecting immediate results.
              </p>
            </div>
          </div>
        </div>

        <div className="question-section question5">
          <h3 className="question-title">Working Through Conflict</h3>
          <div className="question-content">
            <p className="question-prompt">
              Share an example of when you were trying to work productively with others, but there was resistance or
              tension. Discuss strategies you tried at the time, how effective they were, and your reflections on what other
              strategies you would try now and why.
            </p>
            <div className="answer-content">
              <p>
                During periods of understaffing at work, tension arose when workload exceeded our team&apos;s capacity. Everyone was stretched thin, and frustration was building as deadlines approached.
              </p>
              <p>
                My initial strategy was to acknowledge the reality of the situation—that tasks would take longer than usual—and focus on maintaining team morale by avoiding blame and frustration. After addressing immediate needs, I worked to identify root causes: skill gaps, uneven workload distribution, and process inefficiencies.
              </p>
              <p>
                Reflecting now, I would implement more proactive communication strategies, suggest temporary role adjustments to balance workloads, and propose systematic solutions rather than just managing the immediate crisis. Prevention and early intervention are more effective than reactive problem-solving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page