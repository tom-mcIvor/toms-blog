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
        className="w-screen relative left-1/2 right-1/2 -mx-[50vw] py-10"
        style={{
          minHeight: '400px', // adjust as needed
          backgroundImage:
            'url(\'data:image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" fill="%23111a22"/><circle cx="2" cy="2" r="2" fill="%23222b33"/><circle cx="12" cy="12" r="2" fill="%23222b33"/><circle cx="22" cy="22" r="2" fill="%23222b33"/></svg>\')',
          backgroundSize: '24px 24px',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
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
          <div className="project pt-10">
            <h1
              className="pb-20 text-lg text-white"
              style={{ fontFamily: 'Profile Font', fontSize: '2em' }}
            >
              My Portfolio
            </h1>
            <h3 className="text-lg">YeahBook</h3>
            <p>
              Our Yeah-Book app is a platform that allows users to create
              yearbooks and upload their profile and details to each yearbook.
              Similar to Facebook, Yeah-Book provides a social setting for users
              to connect with others and share content. The app&apos;s unique
              feature of customizable yearbooks makes it a great tool for
              preserving memories and staying connected with friends and
              classmates. With its user-friendly interface and innovative
              approach to social networking, Yeah-Book is a valuable app that
              provides a unique service to its users.
            </p>
          </div>
          <a
            className="text-blue-500 hover:text-blue-700"
            href="https://github.com/tom-mcivor/BadgerMatch"
          >
            YeahBook
          </a>
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
          <div className="project pt-10">
            <h1
              className="pb-20 text-lg text-white"
              style={{ fontFamily: 'Profile Font', fontSize: '2em' }}
            >
              My Portfolio
            </h1>
            <h3 className="text-lg">BadgerMatch</h3>
            <p>
              What is Badger Match? A companion finding application. We&apos;ll
              show you different candidates to help you decide which animal is
              your ideal match.
            </p>
          </div>
          <a
            className="text-blue-500 hover:text-blue-700"
            href="https://github.com/tom-mcivor/BadgerMatch"
          >
            BadgerMatch
          </a>
          =
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
          <h3>Mint to be</h3>
          <div className="project-right">
            <a
              className="text-blue-500 hover:text-blue-700"
              href="https://github.com/tom-mcivor/Mint-to-be"
            >
              Mint to be
            </a>
          </div>
          <div className="project-left">
            <p>
              Mint to be lets the user select from a range of garden herbs and
              gives details and each herb selected
            </p>
          </div>
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
          <h3 className="text-lg">Ginew force</h3>
          <div className="project-right">
            <div className="project-right">
              <a
                className="text-blue-500 hover:text-blue-700"
                href="https://github.com/tom-mcivor/Ginew-force"
              >
                Ginew Force
              </a>
            </div>
          </div>
          <div className="project-left">
            <p>
              Ginew force lets the user fight selectable dragon-ball super
              characters against each other with an ultimate winner
            </p>
          </div>
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
          <h3>Nightmare on dev street</h3>
          <div className="project-right">
            <div className="project-right">
              <a
                className="text-blue-500 hover:text-blue-700"
                href="https://github.com/tom-mcivor/Nightmare-on-dev-street"
              >
                Nightmare on dev street
              </a>
            </div>
          </div>
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
    </>
  )
}

export default Home
