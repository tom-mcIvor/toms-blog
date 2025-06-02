import React from 'react'
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
} from 'react-icons/fa'
import {
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiJest,
  SiVite,
  SiExpress,
  SiMongodb,
  SiVercel,
  SiTailwindcss,
} from 'react-icons/si'

const skills = [
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Redux', icon: <SiRedux /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'Jest', icon: <SiJest /> },
  { name: 'Vite', icon: <SiVite /> },
  { name: 'Vercel', icon: <SiVercel /> },
]

export default function AboutMeAndSkills() {
  return (
    <section className="w-full flex flex-col md:flex-row justify-between items-start gap-10 py-12 px-4 md:px-16">
      <div className="md:w-1/2">
        <h1 className="text-5xl font-black mb-6">About Me</h1>
        <p className="mb-4 text-lg text-gray-800">
          Hi, I'm Thomas, a passionate developer with a keen interest in web
          development.
          <br />
          <br />
          Throughout my studies, I gained a strong foundation in programming
          languages such as JavaScript, TypeScript, and CSS. I have experience
          working on team-based projects that required problem-solving and
          critical thinking skills. I am eager to find a position where I can
          use my knowledge and skills to positively impact a company and
          continue to grow as a software engineer. I am open to new
          opportunities and am committed to delivering high-quality work.
          <br />
          <br />
          I'm continuously learning and improving my skills. I love
          experimenting with new technologies and implementing innovative
          solutions. Explore my projects, including a production ready custom
          node.js project: YeahBook, a tennis dashboard, two profile pages and
          loads of React training projects.
        </p>
      </div>
      <div className="md:w-1/2 flex flex-col items-center">
        <h2 className="text-4xl font-black mb-6">My Skills</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded shadow text-lg text-gray-700"
            >
              <span className="text-2xl">{skill.icon}</span>
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
