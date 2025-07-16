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
              "The app's unique feature of customizable yearbooks makes it a great tool for preserving memories and staying connected with friends and classmates.",
              "With its user-friendly interface and innovative approach to social networking, Yeah-Book is a valuable app that provides a unique service to its users."
            ]}
            images={[
              { src: yeakbookHome, alt: "YeahBook Home" },
              { src: yeakBookProfile, alt: "YeahBook Profile" },
              { src: yeakBookProfile2, alt: "YeahBook Profile 2" }
            ]}
            animationDirection="left"
            delay={0}
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
          />

          <AnimatedProject
            title="Steno Briefs"
            githubUrl="https://github.com/tom-mcivor/steno-briefs"
            description={[
              "Steno Briefs is a comprehensive stenography learning platform designed to help users master shorthand writing techniques. The application provides an interactive environment where users can practice stenographic briefs, create custom theories, and track their progress.",
              "With features like word addition, theory creation, and a comprehensive dashboard, Steno Briefs makes learning stenography accessible and engaging.",
              "The platform supports both beginners and advanced users with its intuitive interface and structured learning approach, making it an ideal tool for anyone looking to develop their stenographic skills."
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
          />

          {/* Mint to be Project - two-column layout */}
          <div className="project">
            <div className="project-content">
              <h3 className="project-title">
                <a href="https://github.com/tom-mcivor/Mint-to-be" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                  Mint to be
                </a>
              </h3>
              <p className="mb-5">
                Mint to be is a user-friendly app that allows gardening enthusiasts to explore a wide range of garden herbs and learn about their unique properties. Users can select from an extensive list of herbs, view detailed descriptions, and discover tips for growing and using each plant.
              </p>
              <p className="mb-5">
                The app features high-quality images, care instructions, and fun facts to help users make the most of their gardening experience.
              </p>
              <p className="mb-5">
                Whether you&apos;re a seasoned gardener or just starting out, Mint to be provides valuable information and inspiration for cultivating your own herb garden and enjoying the benefits of fresh, homegrown herbs.
              </p>
            </div>
            <div className="project-carousel-container">
              <Carousel className="rounded-xl w-[400px] h-[400px] overflow-hidden">
                <Image
                  src={mintToBeAddHerb}
                  alt="image 1"
                  className="w-[400px] h-[400px] object-cover"
                />
                <Image
                  src={mintToBeHome}
                  alt="image 2"
                  className="w-[400px] h-[400px] object-cover"
                />
                <Image
                  src={mintToBeUpdate}
                  alt="image 3"
                  className="w-[400px] h-[400px] object-cover"
                />
              </Carousel>
            </div>
          </div>

          {/* Ginew force Project - two-column layout */}
          <div className="project">
            <div className="project-content">
              <h3 className="project-title">
                <a href="https://github.com/tom-mcivor/Ginew-force" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                  Ginew force
                </a>
              </h3>
              <p className="mb-5">
                Ginew force is an interactive app that lets users pit their favorite Dragon Ball Super characters against each other in epic battles. Users can select from a roster of iconic heroes and villains, customize their teams, and simulate exciting matchups to determine the ultimate winner.
              </p>
              <p className="mb-5">
                The app features detailed character stats, special moves, and dynamic battle animations that bring the Dragon Ball universe to life.
              </p>
              <p className="mb-5">
                Whether you&apos;re strategizing for victory or just having fun with friends, Ginew force offers a unique and entertaining way to explore the world of Dragon Ball. Challenge yourself, discover new character combinations, and see who will emerge as the champion in this action-packed fan experience.
              </p>
            </div>
            <div className="project-carousel-container">
              <Carousel className="rounded-xl w-[400px] h-[400px] overflow-hidden">
                <Image
                  src={ginewForeCode2}
                  alt="image 1"
                  className="w-[400px] h-[400px] object-cover"
                />
                <Image
                  src={genewForceCode}
                  alt="image 2"
                  className="w-[400px] h-[400px] object-cover"
                />
                <Image
                  src={ginewForce}
                  alt="image 3"
                  className="w-[400px] h-[400px] object-cover"
                />
              </Carousel>
            </div>
          </div>

          {/* Nightmare on dev street Project - two-column layout */}
          <div className="project">
            <div className="project-content">
              <h3 className="project-title">
                <a href="https://github.com/tom-mcivor/Nightmare-on-dev-street" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                  Nightmare on dev street
                </a>
              </h3>
              <p className="mb-5">
                Nightmare on dev street is a fun and interactive app that allows users to rate their favorite horror movies. Users can browse through a curated selection of classic and modern horror films, view details and images, and submit their own ratings.
              </p>
              <p className="mb-5">
                The app provides a social platform for horror movie enthusiasts to share opinions, discover new films, and engage in discussions about what makes a movie truly terrifying.
              </p>
              <p className="mb-5">
                Whether you&apos;re a fan of psychological thrillers or slasher flicks, Nightmare on dev street offers a unique way to connect with other fans and celebrate the best (and worst) of the horror genre.
              </p>
            </div>
            <div className="project-carousel-container">
              <Carousel className="rounded-xl w-[400px] h-[400px] overflow-hidden">
                <Image
                  src={nightmareComments}
                  alt="image 1"
                  className="w-[400px] h-[400px] object-cover"
                />
                <Image
                  src={nightmareDev}
                  alt="image 2"
                  className="w-[400px] h-[400px] object-cover"
                />
                <Image
                  src={nightmare}
                  alt="image 3"
                  className="w-[400px] h-[400px] object-cover"
                />
              </Carousel>
            </div>
          </div>

          {/* Property Manager Project - two-column layout */}
          <div className="project">
            <div className="project-content">
              <h3 className="project-title">
                <a href="https://github.com/tom-mcivor/property-manager" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                  Property Manager
                </a>
              </h3>
              <p className="mb-5">
                Property Manager is a comprehensive property management application designed to streamline the management of rental properties. The app provides landlords and property managers with tools to track tenancies, monitor rent arrears, manage property details, and view comprehensive dashboards.
              </p>
              <p className="mb-5">
                With features for tenant management, financial tracking, and property oversight, this application simplifies the complex task of property management.
              </p>
              <p className="mb-5">
                The user-friendly interface allows for efficient navigation between different aspects of property management, making it an essential tool for anyone managing rental properties.
              </p>
            </div>
            <div className="project-carousel-container">
              <Carousel className="rounded-xl w-[400px] h-[400px] overflow-hidden">
                <Image
                  src="/Property-Manager-Dashboard.PNG"
                  alt="Property Manager Dashboard"
                  width={400}
                  height={400}
                  className="w-[400px] h-[400px] object-cover"
                />
                <Image
                  src="/Property-Manager-Properties.PNG"
                  alt="Property Manager Properties"
                  width={400}
                  height={400}
                  className="w-[400px] h-[400px] object-cover"
                />
                <Image
                  src="/Property-Manager-Arrears.PNG"
                  alt="Property Manager Arrears"
                  width={400}
                  height={400}
                  className="w-[400px] h-[400px] object-cover"
                />
                <Image
                  src="/Property-ManagerTenancy.PNG"
                  alt="Property Manager Tenancy"
                  width={400}
                  height={400}
                  className="w-[400px] h-[400px] object-cover"
                />
              </Carousel>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home
