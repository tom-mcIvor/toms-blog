import { Carousel } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'

function StenoBriefs() {
  return (
    <div>
      <h3>Steno Briefs</h3>
      <div className="project-left">
        <p>
          Steno Briefs is a comprehensive stenography learning platform designed
          to help users master shorthand writing techniques. The application
          provides an interactive environment where users can practice stenographic
          briefs, create custom theories, and track their progress. With features
          like word addition, theory creation, and a comprehensive dashboard,
          Steno Briefs makes learning stenography accessible and engaging. The
          platform supports both beginners and advanced users with its intuitive
          interface and structured learning approach.
        </p>
      </div>
      <div className="project-right">
        <a href="https://github.com/tom-mcivor/steno-briefs">Steno Briefs</a>
        <Carousel
          className="rounded-xl w-[300px] h-[300px] overflow-hidden"
          prevArrow={({ handlePrev }) => (
            <button
              onClick={handlePrev}
              className="carousel-arrow-left"
              aria-label="Previous"
              type="button"
            />
          )}
          nextArrow={({ handleNext }) => (
            <button
              onClick={handleNext}
              className="carousel-arrow-right"
              aria-label="Next"
              type="button"
            />
          )}
        >
          <Image
            src="/Steno-briefs-home.PNG"
            alt="Steno Briefs Home"
            width={300}
            height={300}
            className="w-[300px] h-[300px] object-cover"
          />
          <Image
            src="/Steno-briefs-dashboard.PNG"
            alt="Steno Briefs Dashboard"
            width={300}
            height={300}
            className="w-[300px] h-[300px] object-cover"
          />
          <Image
            src="/Steno-briefs-add-word.PNG"
            alt="Steno Briefs Add Word"
            width={300}
            height={300}
            className="w-[300px] h-[300px] object-cover"
          />
          <Image
            src="/Steno-briefs-create-Theory.PNG"
            alt="Steno Briefs Create Theory"
            width={300}
            height={300}
            className="w-[300px] h-[300px] object-cover"
          />
          <Image
            src="/Support-steno-briefs.PNG"
            alt="Support Steno Briefs"
            width={300}
            height={300}
            className="w-[300px] h-[300px] object-cover"
          />
        </Carousel>
      </div>
    </div>
  )
}

export default StenoBriefs