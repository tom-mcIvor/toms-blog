'use client'
import React from 'react'
import { Carousel } from "@material-tailwind/react";
import Image from 'next/image'

import ginewForeCode2 from "../../public/ginew-foce-code2.png"
import genewForceCode from "../../public/ginew-force-code.png"
import ginewForce from "../../public/ginew-force.png"
import mintToBeAddHerb from "../../public/mint-to-be-add-herb.png"
import mintToBeHome from "../../public/mint-to-be-home.png"
import mintToBeUpdate from "../../public/mint-to-be-update-herb.png"


function Home() {

  return (
    <>
      
        <div className="project">
          <h1>My Portfolio</h1>
         
        
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
        <h3>Ginew force</h3>
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
