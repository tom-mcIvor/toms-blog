import React from 'react'

function Home() {
  return (
    <>
      <div className="project">
        <h1>My Portfolio</h1>
        <h3>YearBook</h3>
        <div className="project-left">
          <p>
            Our Yeah-Book app is a platform that allows users to create
            yearbooks and upload their profile and details to each yearbook.
            Similar to Facebook, Yeah-Book provides a social setting for users
            to connect with others and share content. The app&apos;s unique feature
            of customizable yearbooks makes it a great tool for preserving
            memories and staying connected with friends and classmates. With its
            user-friendly interface and innovative approach to social
            networking, Yeah-Book is a valuable app that provides a unique
            service to its users.
          </p>
        </div>
        <div className="project-right">
          <a href="https://github.com/tom-mcivor/Yeah-book">Yeah-book</a>
        </div>
        <h3>BadgerMatch</h3>
        <p>
          What is Badger Match? A companion finding application. We&apos;ll show you
          different candidates to help you decide which animal is your ideal
          match.
        </p>
      </div>
      <a href="https://github.com/tom-mcivor/BadgerMatch">BadgerMatch</a>
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
      <h3>My-own-party</h3>
      <div className="project-left">
        <p>
          My own party is a fun app that lets the user randomly receive an
          excuss for a random activity
        </p>
      </div>
      <div className="project-right">
        <a href="https://github.com/tom-mcivor/My-own-party">My own party</a>
      </div>
      <h3>Nightmare on dev street</h3>
      <div className="project-right">
        <div className="project-right">
          <a href="https://github.com/tom-mcivor/Nightmare-on-dev-street">
            Nightmare on dev street
          </a> 
        </div>
      </div>
      <div className="project-left">
        <p>
          Nightmare on dev street allows the users to rate there favorite horror
          movie
        </p>
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
    </>
  )
}

export default Home
