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
            background: 'rgba(255,255,255,0.7)',
            borderRadius: '1rem',
            padding: '2rem',
          }}
        >
          <h1 className="text-5xl font-black mb-10">My Portfolio</h1>
          {/* YeahBook Project - two-column layout */}
          <div className="project pt-10 w-full flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
            <div className="md:w-1/2 text-left">
              <h3 className="text-lg mb-2 project-title-link">
                <a href="https://github.com/tom-mcivor/YeahBook" target="_blank" rel="noopener noreferrer">
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
                <a href="https://github.com/tom-mcivor/BadgerMatch" target="_blank" rel="noopener noreferrer">
                  BadgerMatch
                </a>
              </h3>
              <p className="mb-4">
                What is Badger Match? A companion finding application. We&apos;ll show you different candidates to help you decide which animal is your ideal match.
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
                <a href="https://github.com/tom-mcivor/Mint-to-be" target="_blank" rel="noopener noreferrer">
                  Mint to be
                </a>
              </h3>
              <p className="mb-4">
                Mint to be lets the user select from a range of garden herbs and gives details and each herb selected
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
                <a href="https://github.com/tom-mcivor/Ginew-force" target="_blank" rel="noopener noreferrer">
                  Ginew force
                </a>
              </h3>
              <p className="mb-4">
                Ginew force lets the user fight selectable dragon-ball super characters against each other with an ultimate winner
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
                <a href="https://github.com/tom-mcivor/Nightmare-on-dev-street" target="_blank" rel="noopener noreferrer">
                  Nightmare on dev street
                </a>
              </h3>
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
