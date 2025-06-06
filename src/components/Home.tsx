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
      <div
        className="w-screen relative left-1/2 right-1/2 -mx-[50vw] py-10 portfolio-bg"
        style={{
          minHeight: '400px', // adjust as needed
        }}
      >
        <div
          className="home-page align-middle text-center justify-center items-center flex flex-col mb-20"
          style={{
            background: 'rgba(255,255,255,0.0)',
            borderRadius: '1rem',
            padding: '2rem',
            color: '#fff',
          }}
        >
          <h1 className="text-5xl font-black mb-10">My Portfolio</h1>
          {/* YeahBook Project - two-column layout */}
          <div className="project pt-10 w-full flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
            <div className="md:w-1/2 text-left">
              <h3 className="text-lg mb-2 project-title-link">
                <a href="https://github.com/tom-mcivor/YeahBook" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                  YeahBook
                </a>
              </h3>
              <p className="mb-4">
                Our Yeah-Book app is a platform that allows users to create yearbooks and upload their profile and details to each yearbook. Similar to Facebook, Yeah-Book provides a social setting for users to connect with others and share content. The app&apos;s unique feature of customizable yearbooks makes it a great tool for preserving memories and staying connected with friends and classmates. With its user-friendly interface and innovative approach to social networking, Yeah-Book is a valuable app that provides a unique service to its users.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Carousel className="rounded-xl w-[300px] h-[300px] overflow-hidden">
                <Image
                  src={yeakbookHome}
                  alt="image 1"
                  className="w-[300px] h-[300px] object-cover"
                />
                <Image
                  src={yeakBookProfile}
                  alt="image 2"
                  className="w-[300px] h-[300px] object-cover"
                />
                <Image
                  src={yeakBookProfile2}
                  alt="image 3"
                  className="w-[300px] h-[300px] object-cover"
                />
              </Carousel>
            </div>
          </div>

          {/* BadgerMatch Project - two-column layout */}
          <div className="project pt-10 w-full flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
            <div className="md:w-1/2 text-left">
              <h3 className="text-lg mb-2 project-title-link">
                <a href="https://github.com/tom-mcivor/BadgerMatch" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                  BadgerMatch
                </a>
              </h3>
              <p className="mb-4">
                BadgerMatch is a playful and engaging companion-finding application designed to help users discover their ideal animal match. The app presents a variety of animal candidates, each with unique traits and personalities, and guides users through a fun selection process to determine which animal best fits their preferences and lifestyle. With interactive quizzes, detailed animal profiles, and vibrant images, BadgerMatch offers a delightful way to learn more about different species while finding your perfect match. Whether you&apos;re curious about your spirit animal or just looking for a bit of entertainment, BadgerMatch makes the journey both informative and enjoyable.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Carousel className="rounded-xl w-[300px] h-[300px] overflow-hidden">
                <Image
                  src={badgerMatchHome}
                  alt="image 1"
                  className="w-[300px] h-[300px] object-cover"
                />
                <Image
                  src={badgerMatch}
                  alt="image 2"
                  className="w-[300px] h-[300px] object-cover"
                />
                <Image
                  src={badgerMachUploads}
                  alt="image 3"
                  className="w-[300px] h-[300px] object-cover"
                />
              </Carousel>
            </div>
          </div>

          {/* Mint to be Project - two-column layout */}
          <div className="project pt-10 w-full flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
            <div className="md:w-1/2 text-left">
              <h3 className="text-lg mb-2 project-title-link">
                <a href="https://github.com/tom-mcivor/Mint-to-be" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                  Mint to be
                </a>
              </h3>
              <p className="mb-4">
                Mint to be is a user-friendly app that allows gardening enthusiasts to explore a wide range of garden herbs and learn about their unique properties. Users can select from an extensive list of herbs, view detailed descriptions, and discover tips for growing and using each plant. The app features high-quality images, care instructions, and fun facts to help users make the most of their gardening experience. Whether you&apos;re a seasoned gardener or just starting out, Mint to be provides valuable information and inspiration for cultivating your own herb garden and enjoying the benefits of fresh, homegrown herbs.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Carousel className="rounded-xl w-[300px] h-[300px] overflow-hidden">
                <Image
                  src={mintToBeAddHerb}
                  alt="image 1"
                  className="w-[300px] h-[300px] object-cover"
                />
                <Image
                  src={mintToBeHome}
                  alt="image 2"
                  className="w-[300px] h-[300px] object-cover"
                />
                <Image
                  src={mintToBeUpdate}
                  alt="image 3"
                  className="w-[300px] h-[300px] object-cover"
                />
              </Carousel>
            </div>
          </div>

          {/* Ginew force Project - two-column layout */}
          <div className="project pt-10 w-full flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
            <div className="md:w-1/2 text-left">
              <h3 className="text-lg mb-2 project-title-link">
                <a href="https://github.com/tom-mcivor/Ginew-force" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                  Ginew force
                </a>
              </h3>
              <p className="mb-4">
                Ginew force is an interactive app that lets users pit their favorite Dragon Ball Super characters against each other in epic battles. Users can select from a roster of iconic heroes and villains, customize their teams, and simulate exciting matchups to determine the ultimate winner. The app features detailed character stats, special moves, and dynamic battle animations that bring the Dragon Ball universe to life. Whether you&apos;re strategizing for victory or just having fun with friends, Ginew force offers a unique and entertaining way to explore the world of Dragon Ball. Challenge yourself, discover new character combinations, and see who will emerge as the champion in this action-packed fan experience.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Carousel className="rounded-xl w-[300px] h-[300px] overflow-hidden">
                <Image
                  src={ginewForeCode2}
                  alt="image 1"
                  className="w-[300px] h-[300px] object-cover"
                />
                <Image
                  src={genewForceCode}
                  alt="image 2"
                  className="w-[300px] h-[300px] object-cover"
                />
                <Image
                  src={ginewForce}
                  alt="image 3"
                  className="w-[300px] h-[300px] object-cover"
                />
              </Carousel>
            </div>
          </div>

          {/* Nightmare on dev street Project - two-column layout */}
          <div className="project pt-10 w-full flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
            <div className="md:w-1/2 text-left">
              <h3 className="text-lg mb-2 project-title-link">
                <a href="https://github.com/tom-mcivor/Nightmare-on-dev-street" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                  Nightmare on dev street
                </a>
              </h3>
              <p className="mb-4">
                Nightmare on dev street is a fun and interactive app that allows users to rate their favorite horror movies. Users can browse through a curated selection of classic and modern horror films, view details and images, and submit their own ratings. The app provides a social platform for horror movie enthusiasts to share opinions, discover new films, and engage in discussions about what makes a movie truly terrifying. Whether you&apos;re a fan of psychological thrillers or slasher flicks, Nightmare on dev street offers a unique way to connect with other fans and celebrate the best (and worst) of the horror genre.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Carousel className="rounded-xl w-[300px] h-[300px] overflow-hidden">
                <Image
                  src={nightmareComments}
                  alt="image 1"
                  className="w-[300px] h-[300px] object-cover"
                />
                <Image
                  src={nightmareDev}
                  alt="image 2"
                  className="w-[300px] h-[300px] object-cover"
                />
                <Image
                  src={nightmare}
                  alt="image 3"
                  className="w-[300px] h-[300px] object-cover"
                />
              </Carousel>
            </div>
          </div>
        </div>
        {/* Social Icons Bar - absolutely positioned at bottom center */}
        <div
          className="social-icons-bar flex justify-center gap-8"
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: 32,
            zIndex: 1000,
          }}
        >
          <a href="https://github.com/tom-mcIvor" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            {/* <GitHubIcon className="icon hover:text-black transition-colors duration-300" size={40} /> */}
          </a>
          <a href="https://www.linkedin.com/in/tom-mcivor-5b280488/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            {/* <LinkedInIcon className="icon hover:text-blue-700 transition-colors duration-300" size={40} /> */}
          </a>
        </div>
      </div>
    </>
  )
}

export default Home
