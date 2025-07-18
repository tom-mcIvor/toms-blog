import { Carousel } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'

function PropertyManager() {
  return (
    <div>
      <h3>Property Manager</h3>
      
      {/* Tech Stack Icons */}
      <div className="flex justify-center items-center gap-4 mb-6 py-4">
        {/* Vue.js */}
        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-gray-200">
          <Image
            src="/Vue-logo.svg"
            alt="Vue.js"
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </div>
        
        {/* .NET Core */}
        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-gray-200">
          <Image
            src="/DotNet-logo.svg"
            alt=".NET"
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </div>
        
        {/* C# */}
        <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">C#</span>
        </div>
        
        {/* SQL Server */}
        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
            <path fill="currentColor" d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z"/>
          </svg>
        </div>
        
        {/* TypeScript */}
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">TS</span>
        </div>
        
        {/* Bootstrap/CSS */}
        <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">CSS</span>
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="text-lg font-semibold mb-2">Tech Stack</h4>
        <div className="text-sm text-gray-700 space-y-1">
          <div><strong>Frontend:</strong> Vue.js, TypeScript, CSS/Bootstrap</div>
          <div><strong>Backend:</strong> .NET Core, C#, Entity Framework</div>
          <div><strong>Database:</strong> SQL Server</div>
          <div><strong>Architecture:</strong> Modern full-stack application with RESTful API</div>
        </div>
      </div>
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