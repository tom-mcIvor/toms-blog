import { Carousel } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'

function PropertyManager() {
  return (
    <div>
      <h3>Property Manager</h3>
      <div className="project-left">
        <p>
          Property Manager is a comprehensive property management application designed 
          to streamline the management of rental properties. The app provides landlords 
          and property managers with tools to track tenancies, monitor rent arrears, 
          manage property details, and view comprehensive dashboards. With features 
          for tenant management, financial tracking, and property oversight, this 
          application simplifies the complex task of property management. The 
          user-friendly interface allows for efficient navigation between different 
          aspects of property management, making it an essential tool for anyone 
          managing rental properties.
        </p>
      </div>
      <div className="project-right">
        <a href="https://github.com/tom-mcivor/property-manager">Property Manager</a>
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
            src="/Property-Manager-Dashboard.PNG"
            alt="Property Manager Dashboard"
            width={300}
            height={300}
            className="w-[300px] h-[300px] object-cover"
          />
          <Image
            src="/Property-Manager-Properties.PNG"
            alt="Property Manager Properties"
            width={300}
            height={300}
            className="w-[300px] h-[300px] object-cover"
          />
          <Image
            src="/Property-Manager-Arrears.PNG"
            alt="Property Manager Arrears"
            width={300}
            height={300}
            className="w-[300px] h-[300px] object-cover"
          />
          <Image
            src="/Property-ManagerTenancy.PNG"
            alt="Property Manager Tenancy"
            width={300}
            height={300}
            className="w-[300px] h-[300px] object-cover"
          />
        </Carousel>
      </div>
    </div>
  )
}

export default PropertyManager