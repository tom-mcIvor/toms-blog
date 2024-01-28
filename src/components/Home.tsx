'use client'
import React from 'react'
import { Carousel } from "@material-tailwind/react";
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import badgerMatchHome from  "../../public/badger-match-home.png"
import badgerMatch from "../../public/badger-match.png"
import badgerMachUploads from "../../public/badger-match-uploads.png"
import ginewForeCode2 from "../../public/ginew-foce-code2.png"
import genewForceCode from "../../public/ginew-force-code.png"
import ginewForce from "../../public/ginew-force.png"
import mintToBeAddHerb from "../../public/mint-to-be-add-herb.png"
import mintToBeHome from "../../public/mint-to-be-home.png"
import mintToBeUpdate from "../../public/mint-to-be-update-herb.png"


function Home() {

  return (
    <>
   <Head>
 <Link rel="preconnect" href="https://fonts.googleapis.com"/>
 <Link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true}/>
 <Link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"/>
</Head>
      <div className="home-page align-middle text-center justify-center items-center flex flex-col ">
        <div className="project pt-10">
          <h1 className="pb-20 text-lg text-white" style={{ fontFamily: 'Profile Font', fontSize: '2em' }}>My Portfolio</h1>
          <h3 className="text-lg">BadgerMatch</h3>
          <p>
            What is Badger Match? A companion finding application. We&apos;ll show you
            different candidates to help you decide which animal is your ideal
            match.
          </p>
        </div>
        <a className="text-blue-500" href="https://github.com/tom-mcivor/BadgerMatch">BadgerMatch</a>
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
          <a href="https://github.com/tom-mcivor/Mint-to-be">Mint to be</a>
        </div>
        <div className="project-left">
          <p>
            Mint to be lets the user select from a range of garden herbs and gives
            details and each herb selected
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
            <a href="https://github.com/tom-mcivor/Ginew-force">Ginew Force</a>
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
            <a href="https://github.com/tom-mcivor/Nightmare-on-dev-street">
              Nightmare on dev street
            </a>

          </div>
        </div>
        
        <h3>Tennis dashboard</h3>
        <div className="project-right">
           <a href="https://github.com/tom-mcivor/Tennis-dashboard">
            Tennis Dashboard
          </a>
        </div>
        <div className="project-left">
          <p>
            I developed the Tennis-Dashboard app using React and Redux, which
            allows users to search for ATP and WTA tennis players through an
            external API. The app also includes a feature that randomly selects
            players for users to view, making it a valuable resource for tennis
            fans looking to see who is ranked in the top 100. This app
            demonstrates my technical skills in React and Redux, as well as my
            ability to work with external APIs and create user-friendly features
          </p>
        </div>
      </div>
    </>
  )
}

export default Home