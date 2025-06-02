import { Carousel } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'
import yeahBookProfile2 from '../../public/yeah-book-profile-2.png'
import yeahBookProfile from '../../public/yeah-book-profile.png'
import yeahBook from '../../public/yeah-book.png'

function YeahBook() {
  return (
    <div>
      <h3>YearBook</h3>
      <div className="project-left">
        <p>
          Our Yeah-Book app is a platform that allows users to create yearbooks
          and upload their profile and details to each yearbook. Similar to
          Facebook, Yeah-Book provides a social setting for users to connect
          with others and share content. The app&apos;s unique feature of
          customizable yearbooks makes it a great tool for preserving memories
          and staying connected with friends and classmates. With its
          user-friendly interface and innovative approach to social networking,
          Yeah-Book is a valuable app that provides a unique service to its
          users.
        </p>
      </div>
      <div className="project-right">
        <a href="https://github.com/tom-mcivor/Yeah-book">Yeah-book</a>
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
            src={yeahBookProfile2}
            alt="image 1"
            className="w-[300px] h-[300px] object-cover"
          />
          <Image
            src={yeahBookProfile}
            alt="image 2"
            className="w-[300px] h-[300px] object-cover"
          />
          <Image
            src={yeahBook}
            alt="image 3"
            className="w-[300px] h-[300px] object-cover"
          />
        </Carousel>
      </div>
    </div>
  )
}

export default YeahBook
