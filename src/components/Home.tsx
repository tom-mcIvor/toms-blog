'use client'
import React from 'react'
import { Carousel } from '@material-tailwind/react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import badgerMatchHome from '../../public/badger-match-home.png'
import badgerMatch from '../../public/badger-match.png'
import badgerMachUploads from '../../public/badger-match-uploads.png'
import ginewForeCode2 from '../../public/ginew-foce-code2.png'
import genewForceCode from '../../public/ginew-force-code.png'
import ginewForce from '../../public/ginew-force.png'
import mintToBeAddHerb from '../../public/mint-to-be-add-herb.png'
import mintToBeHome from '../../public/mint-to-be-home.png'
import mintToBeUpdate from '../../public/mint-to-be-update-herb.png'
import yeakbookHome from '../../public/yeah-book.png'
import yeakBookProfile from '../../public/yeah-book-profile.png'
import yeakBookProfile2 from '../../public/yeah-book-profile-2.png'
import nightmareComments from '../../public/nightmare-on-dev-comments.png'
import nightmareDev from '../../public/nightmare-on-dev-select.png'
import nightmare from '../../public/nightmare.png'
import AboutMeAndSkills from './homePage/AboutMeAndSkills'
import AnimatedProject from './AnimatedProject'

function Home() {
  return (
    <>
      <Head>
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com" />
        <Link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AboutMeAndSkills />

      {/* Full-width background for portfolio section */}
      <div className="portfolio-section portfolio-bg">
        <div className="home-page portfolio-content">
          <h1 className="portfolio-title">My Portfolio</h1>
          <AnimatedProject
            title="YeahBook"
            githubUrl="https://github.com/tom-mcIvor/Yeah-book"
            description={[
              "Our Yeah-Book app is a platform that allows users to create yearbooks and upload their profile and details to each yearbook. Similar to Facebook, Yeah-Book provides a social setting for users to connect with others and share content.",
              "• View & Edit Books: Each book contains profiles with images, names, and quotes, with full editing capabilities including cover customization",
              "• Profiles: Users can view and manage detailed member profiles within each yearbook",
              "• Authentication: Secure user authentication ensures only authorized users can modify content and post comments",
              "With its user-friendly interface and innovative approach to social networking, Yeah-Book is a valuable app that provides a unique service to its users while demonstrating modern web development practices."
            ]}
            images={[
              { src: yeakbookHome, alt: "YeahBook Home" },
              { src: yeakBookProfile, alt: "YeahBook Profile" },
              { src: yeakBookProfile2, alt: "YeahBook Profile 2" }
            ]}
            animationDirection="left"
            delay={0}
            techStack={[
              {
                name: "React",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              },
              {
                name: "Redux",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              },
              {
                name: "Node.js",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              },
              {
                name: "Express",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              },
              {
                name: "SCSS",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
              },
              {
                name: "Mantine",
                imageSrc: "/Mantine-logo.PNG"
              },
              {
                name: "Knex.js",
                imageSrc: "/Knex-logo.PNG"
              },
              {
                name: "SQLite",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
              }
            ]}
          />

          <AnimatedProject
            title="BadgerMatch"
            githubUrl="https://github.com/tom-mcivor/BadgerMatch"
            description={[
              "BadgerMatch is a playful and engaging companion-finding application designed to help users discover their ideal animal match. The app presents a variety of animal candidates, each with unique traits and personalities, and guides users through a fun selection process to determine which animal best fits their preferences and lifestyle.",
              "With interactive quizzes, detailed animal profiles, and vibrant images, BadgerMatch offers a delightful way to learn more about different species while finding your perfect match.",
              "Whether you're curious about your spirit animal or just looking for a bit of entertainment, BadgerMatch makes the journey both informative and enjoyable."
            ]}
            images={[
              { src: badgerMatchHome, alt: "BadgerMatch Home" },
              { src: badgerMatch, alt: "BadgerMatch Game" },
              { src: badgerMachUploads, alt: "BadgerMatch Uploads" }
            ]}
            animationDirection="right"
            delay={200}
            techStack={[
              {
                name: "React",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              },
              {
                name: "Redux",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              },
              {
                name: "Node.js",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              },
              {
                name: "Express",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              },
              {
                name: "SCSS",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
              },
              {
                name: "Auth0",
                imageSrc: "/Auth0.PNG"
              },
              {
                name: "Knex.js",
                imageSrc: "/Knex-logo.PNG"
              },
              {
                name: "SQLite",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
              }
            ]}
          />

          <AnimatedProject
            title="Steno Briefs"
            githubUrl="https://github.com/tom-mcivor/steno-briefs"
            description={[
              "StenoBriefs is a modern, web-based platform for the stenography community to collaborate on and vote for the best stenography briefs. The app helps stenographers discover, share, and improve stenographic briefs across different theories like Phoenix, Plover, StenEd, and Magnum Steno.",
              "• Browse & Search: Users can browse a database of English words and view various community-contributed briefs",
              "• Vote & Discuss: Each word can have multiple briefs, and users can vote for the most efficient ones and participate in discussions",
              "• Theory Support: Briefs are categorized by stenography theory, with user accounts enabling voting, submissions, and community interaction",
              "Built with React/Next.js, TypeScript, Tailwind CSS, and features Stripe integration for donations, making it a comprehensive tool for the stenography community."
            ]}
            images={[
              { src: "/Steno-briefs-home.PNG", alt: "Steno Briefs Home", width: 400, height: 400 },
              { src: "/Steno-briefs-dashboard.PNG", alt: "Steno Briefs Dashboard", width: 400, height: 400 },
              { src: "/Steno-briefs-add-word.PNG", alt: "Steno Briefs Add Word", width: 400, height: 400 },
              { src: "/Steno-briefs-create-Theory.PNG", alt: "Steno Briefs Create Theory", width: 400, height: 400 },
              { src: "/Support-steno-briefs.PNG", alt: "Support Steno Briefs", width: 400, height: 400 }
            ]}
            animationDirection="left"
            delay={400}
            techStack={[
              {
                name: "React",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              },
              {
                name: "Next.js",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              },
              {
                name: "TypeScript",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              },
              {
                name: "Tailwind CSS",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
              },
              {
                name: "Knex.js",
                imageSrc: "/Knex-logo.PNG"
              },
              {
                name: "SQLite",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
              }
            ]}
          />

          <AnimatedProject
            title="Mint to Be"
            githubUrl="https://github.com/tom-mcivor/Mint-to-be"
            description={[
              "Mint to be is a user-friendly app that allows gardening enthusiasts to explore a wide range of garden herbs and learn about their unique properties. Users can select from an extensive list of herbs, view detailed descriptions, and discover tips for growing and using each plant.",
              "The app features high-quality images, care instructions, and fun facts to help users make the most of their gardening experience.",
              "Whether you're a seasoned gardener or just starting out, Mint to be provides valuable information and inspiration for cultivating your own herb garden and enjoying the benefits of fresh, homegrown herbs."
            ]}
            images={[
              { src: mintToBeAddHerb, alt: "Mint to Be Add Herb", width: 400, height: 400 },
              { src: mintToBeHome, alt: "Mint to Be Home", width: 400, height: 400 },
              { src: mintToBeUpdate, alt: "Mint to Be Update", width: 400, height: 400 }
            ]}
            animationDirection="right"
            delay={300}
            techStack={[
              {
                name: "React",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              },
              {
                name: "Node.js",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              },
              {
                name: "Express",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              },
              {
                name: "HTML5",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              },
              {
                name: "CSS3",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              },
              {
                name: "JavaScript",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              }
            ]}
          />

          <AnimatedProject
            title="Ginew Force"
            githubUrl="https://github.com/tom-mcivor/Ginew-force"
            description={[
              "The Ginew-force app is a web-based battle simulator themed around the Dragon Ball Super universe, specifically featuring the Ginyu Force characters. The app allows users to select characters from the Dragon Ball Super series, fetched from an external API.",
              "Users can simulate battles between selected characters by comparing their randomly assigned strengths, view the winner of a match, or see a draw if both characters have equal strength. The interactive interface is built with React, Redux, and Mantine components.",
              "The app is structured as a fullstack JavaScript project, with a React/Redux frontend, Node.js backend, and uses Webpack/Babel for bundling. It is designed for fun and demonstrates concepts like state management, API integration, and modern React development."
            ]}
            images={[
              { src: ginewForeCode2, alt: "Ginew Force Code", width: 400, height: 400 },
              { src: genewForceCode, alt: "Ginew Force Development", width: 400, height: 400 },
              { src: ginewForce, alt: "Ginew Force Game", width: 400, height: 400 }
            ]}
            animationDirection="right"
            delay={350}
            techStack={[
              {
                name: "React",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              },
              {
                name: "Redux",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              },
              {
                name: "Node.js",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              },
              {
                name: "Mantine",
                imageSrc: "/Mantine-logo.PNG"
              },
              {
                name: "HTML5",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              },
              {
                name: "CSS3",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              }
            ]}
          />

          <AnimatedProject
            title="Nightmare on Dev Street"
            githubUrl="https://github.com/tom-mcivor/Nightmare-on-dev-street"
            description={[
              "Nightmare on dev street is a fun and interactive app that allows users to rate their favorite horror movies. Users can browse through a curated selection of classic and modern horror films, view details and images, and submit their own ratings.",
              "The app provides a social platform for horror movie enthusiasts to share opinions, discover new films, and engage in discussions about what makes a movie truly terrifying.",
              "Whether you're a fan of psychological thrillers or slasher flicks, Nightmare on dev street offers a unique way to connect with other fans and celebrate the best (and worst) of the horror genre."
            ]}
            images={[
              { src: nightmareComments, alt: "Nightmare Comments", width: 400, height: 400 },
              { src: nightmareDev, alt: "Nightmare Dev Select", width: 400, height: 400 },
              { src: nightmare, alt: "Nightmare Home", width: 400, height: 400 }
            ]}
            animationDirection="left"
            delay={500}
            techStack={[
              {
                name: "Node.js",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              },
              {
                name: "Express",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              },
              {
                name: "Handlebars",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg"
              },
              {
                name: "HTML5",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              },
              {
                name: "CSS3",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              },
              {
                name: "JavaScript",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              }
            ]}
          />

          <AnimatedProject
            title="Property Manager"
            githubUrl="https://github.com/tom-mcivor/property-manager"
            description={[
              "Property Manager is a comprehensive property management application designed to streamline the management of rental properties. The app provides landlords and property managers with tools to track tenancies, monitor rent arrears, manage property details, and view comprehensive dashboards.",
              "With features for tenant management, financial tracking, and property oversight, this application simplifies the complex task of property management.",
              "The user-friendly interface allows for efficient navigation between different aspects of property management, making it an essential tool for anyone managing rental properties."
            ]}
            images={[
              { src: "/Property-Manager-Dashboard.PNG", alt: "Property Manager Dashboard", width: 400, height: 400 },
              { src: "/Property-Manager-Properties.PNG", alt: "Property Manager Properties", width: 400, height: 400 },
              { src: "/Property-Manager-Arrears.PNG", alt: "Property Manager Arrears", width: 400, height: 400 },
              { src: "/Property-ManagerTenancy.PNG", alt: "Property Manager Tenancy", width: 400, height: 400 }
            ]}
            animationDirection="right"
            delay={600}
            techStack={[
              {
                name: "Vue.js",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
              },
              {
                name: ".NET Core",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
              },
              {
                name: "TypeScript",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              },
              {
                name: "JavaScript",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              },
              {
                name: "HTML5",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              },
              {
                name: "SCSS",
                imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
              }
            ]}
          />

        </div>
      </div>
    </>
  )
}

export default Home
