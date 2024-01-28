import { Carousel } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'
import badgerMatchHome from  "../../../public/badger-match-home.png"
import badgerMatch from "../../../public/badger-match.png"
import badgerMachUploads from "../../../public/badger-match-uploads.png"


function Badger() {
  return (
    <>
      <h3>BadgerMatch</h3>
      <p>
        What is Badger Match? A companion finding application. We&apos;ll show you
        different candidates to help you decide which animal is your ideal
        match.
      </p>
        <a href="https://github.com/tom-mcivor/BadgerMatch">BadgerMatch</a>
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
    </>
  )
}

export default Badger