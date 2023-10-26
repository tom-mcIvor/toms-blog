import { Carousel } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'
import nightMareOnDevSelect from "../../public/nightmare-on-dev-select.png"
import nightmare from "../../public/nightmare.png"
import nightmareOnDevComments from "../../public/nightmare-on-dev-comments.png"

function Nightmare() {
  return (
    <div className="project-left">
    <p>
      Nightmare on dev street allows the users to rate there favorite horror
      movie
    </p>
    <Carousel className="rounded-xl w-[300px] h-[300px] overflow-hidden">
   <Image
     src={nightMareOnDevSelect}
     alt="image 1"
     className="w-[300px] h-[300px] object-cover"
   />
 <Image
   src={nightmare}
   alt="image 2"
   className="w-[300px] h-[300px] object-cover"
 />
 <Image
   src={nightmareOnDevComments}
   alt="image 3"
   className="w-[300px] h-[300px] object-cover"
 />
</Carousel>
  </div>
  )
}

export default Nightmare