import React from 'react'
import Image from 'next/image'
import AnimatedText from '../AnimatedText'

const skills = [
  { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Redux', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Express', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'NodeJS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'SASS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
  { name: 'HTML', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'NPM', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
  { name: 'Jest', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
  { name: 'Webpack', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg' },
  { name: 'Babel', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg' },
  { name: 'ESLint', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg' },
  { name: 'VIM', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg' },
  { name: 'VSCode', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'TailwindCSS', image: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
  { name: 'Plover', image: '/Plover-Icon.PNG' },
]

export default function AboutMeAndSkills() {
  return (
    <section className="w-full flex flex-col justify-between items-start gap-10 py-12 px-4 md:px-16 lg:flex-row">
      <div className="lg:w-1/2">
        <h1 className="text-5xl font-black mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>About Me</h1>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
          <p className="mb-4 text-lg text-gray-800">
            Hi, I&apos;m Thomas, a passionate developer with a keen interest in web
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
            I&apos;m continuously learning and improving my skills. I love
            experimenting with new technologies and implementing innovative
            solutions. Explore my projects, including a production ready custom
            node.js project: YeahBook, a tennis dashboard, two profile pages and
            loads of React training projects.
          </p>
        </div>
        
        {/* Social Icons */}
        <div className="flex gap-6 mt-6 justify-center animate-fade-in-up" style={{ animationDelay: '2s', animationFillMode: 'both' }}>
          <a href="https://github.com/tom-mcIvor" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl">
            <Image
              src="/Github-image.PNG"
              alt="GitHub"
              width={64}
              height={64}
              className="rounded-full"
            />
          </a>
          <a href="https://www.linkedin.com/in/tom-mcivor-5b280488/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl">
            <Image
              src="/LinkedIn-image.PNG"
              alt="LinkedIn"
              width={64}
              height={64}
            />
          </a>
        </div>
      </div>
      <div className="lg:w-1/2">
        <h2 className="text-5xl font-black mb-6">My Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded shadow text-lg text-gray-700 hover:bg-gray-800 hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-110 hover:shadow-2xl hover:-translate-y-2"
            >
              <Image
                src={skill.image}
                alt={skill.name}
                width={24}
                height={24}
                className="w-6 h-6"
              />
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
