'use client'
import React, { useState, useEffect } from 'react'

function JavaScriptDom() {
  const [visibleQuestions, setVisibleQuestions] = useState<number[]>([])

  useEffect(() => {
    // Animate questions appearing one by one
    const timer1 = setTimeout(() => setVisibleQuestions([1]), 500)
    const timer2 = setTimeout(() => setVisibleQuestions([1, 2]), 1000)
    const timer3 = setTimeout(() => setVisibleQuestions([1, 2, 3]), 1500)
    const timer4 = setTimeout(() => setVisibleQuestions([1, 2, 3, 4]), 2000)
    const timer5 = setTimeout(() => setVisibleQuestions([1, 2, 3, 4, 5]), 2500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
    }
  }, [])

  return (
    <div className="javascript-dom-page">
      <div className="container5">
        
        {/* Animated Title */}
        <div className="animated-title-container">
          <h1 className="animated-title">
            <span className="title-word">JavaScript</span>
            <span className="title-word">&</span>
            <span className="title-word">DOM</span>
            <span className="title-word">Fundamentals</span>
          </h1>
          <div className="title-underline"></div>
        </div>
        
        {/* Question 1 */}
        <div className={`question-container ${visibleQuestions.includes(1) ? 'animate-slide-in-left' : 'opacity-0'}`}>
          <div className="animated-question">
            <h3 className="question-text">An analogy to describe JavaScript and its relationship to HTML and CSS.</h3>
          </div>
        </div>
        <div className={`answer-container ${visibleQuestions.includes(1) ? 'animate-fadeIn' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
          <div className="my-response-header">
            <span className="response-label">My response:</span>
          </div>
          <p>
            JavaScript is akin to a conductor orchestrating a symphony. Just as a conductor directs musicians HTML and CSS
            to create harmonious music, JavaScript guides HTML and CSS elements to produce dynamic and interactive web
            experiences. I like to think of it this way - HTML is like the skeleton of a house, CSS is the paint and decorations,
            but JavaScript is what makes the lights turn on, the doors open, and brings everything to life. Without JavaScript,
            websites would just be pretty static pictures!
          </p>
        </div>
        <br />

        {/* Question 2 */}
        <div className={`question-container ${visibleQuestions.includes(2) ? 'animate-slide-in-right' : 'opacity-0'}`}>
          <div className="animated-question">
            <h3 className="question-text">Explain control flow and loops using an example process from everyday life, for example, &apos;waking up&apos; or &apos;brushing your teeth&apos; (but not those).</h3>
          </div>
        </div>
        <div className={`answer-container ${visibleQuestions.includes(2) ? 'animate-fadeIn' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
          <div className="my-response-header">
            <span className="response-label">My response:</span>
          </div>
          <p>
            <h4>Control Flow:</h4> I chose baking cookies as my example because it&apos;s something I actually do! Control flow is like
            following a recipe - you make decisions at each step. Do I have enough flour? If yes, continue. If no, go to the store first.
            Should I add chocolate chips? That&apos;s an if/else decision right there.
            <br />
            <h4 className="inline mr-4">Loop:</h4>
            Loops are everywhere in baking! You repeat the same action - scoop dough, place on tray, repeat until all dough is used.
            Or mixing the batter - you keep stirring until it looks right. In programming, this would be like a while loop that continues
            until a condition is met. I find these real-world examples help me understand the concepts better than abstract explanations.
          </p>
        </div>
        <br />

        {/* Question 3 */}
        <div className={`question-container ${visibleQuestions.includes(3) ? 'animate-slide-in-left' : 'opacity-0'}`}>
          <div className="animated-question">
            <h3 className="question-text">Describe what the DOM is and an example of how you might interact with it.</h3>
          </div>
        </div>
        <div className={`answer-container ${visibleQuestions.includes(3) ? 'animate-fadeIn' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
          <div className="my-response-header">
            <span className="response-label">My response:</span>
          </div>
          <p>The DOM (Document Object Model) is a programming interface that represents the structure of a web document, like
            HTML, in a tree-like format. It allows you to interact with and manipulate the content and structure of a web page
            using languages like JavaScript. Think of it like a family tree, but for web elements - each element has parents,
            children, and siblings.
            <br />
            <br />
            A practical example I love: imagine you have a button on your website that says &apos;Click me!&apos; When someone clicks it,
            you can use JavaScript to change the text to &apos;Thanks for clicking!&apos; or make a hidden message appear. I&apos;ve actually
            built little interactive features like this - it&apos;s quite satisfying when you see the page respond to user actions in real-time!
          </p>
        </div>
        <br />
        
        {/* Question 4 */}
        <div className={`question-container ${visibleQuestions.includes(4) ? 'animate-slide-in-right' : 'opacity-0'}`}>
          <div className="animated-question">
            <h3 className="question-text">Explain the difference between accessing data from arrays and objects.</h3>
          </div>
        </div>
        <div className={`answer-container ${visibleQuestions.includes(4) ? 'animate-fadeIn' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
          <div className="my-response-header">
            <span className="response-label">My response:</span>
          </div>
          <p>This one took me a while to really grasp! Arrays are like numbered storage boxes - you know exactly which box
            something is in by its position. So myArray[0] gets the first item, myArray[1] gets the second, and so on.
            I use arrays when I have a list of similar things, like storing all the scores from a game or a shopping list.
            <br />
            <br />
            Objects are more like a filing cabinet with labeled folders. Instead of remembering &apos;it&apos;s in position 3&apos;,
            you can say &apos;get me the name&apos; or &apos;get me the age&apos;. Much more intuitive! When I&apos;m building something like
            a user profile, I&apos;ll use an object because it makes sense to have user.name and user.email rather than trying
            to remember that the name is at position 0 and email is at position 1.
          </p>
          
          <ul>
            <li>Arrays: great for lists where order matters (like steps in a recipe)</li>
            <li>Objects: perfect when you need named properties (like describing a person or product)</li>
            <li>I often use arrays OF objects - like a list of users where each user is an object with name, email, etc.</li>
            <li>Pro tip: if you find yourself thinking &apos;what was at index 2 again?&apos; - you probably want an object!</li>
          </ul>
        </div>
        <br />

        {/* Question 5 */}
        <div className={`question-container ${visibleQuestions.includes(5) ? 'animate-slide-in-left' : 'opacity-0'}`}>
          <div className="animated-question">
            <h3 className="question-text">Explain what functions are and why they are helpful.</h3>
          </div>
        </div>
        <div className={`answer-container ${visibleQuestions.includes(5) ? 'animate-fadeIn' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
          <div className="my-response-header">
            <span className="response-label">My response:</span>
          </div>
          <p>Functions are honestly one of my favorite concepts in programming! Think of them like recipes - you write the
            instructions once, then you can &apos;cook&apos; that recipe whenever you need it.
            <br />
            <br />
            <b>Reusability:</b> I learned this the hard way when I first started coding. I was copying and pasting the same
            validation code everywhere. Then I discovered functions and it was like a lightbulb moment! Now I write a
            validateEmail() function once and use it everywhere I need email validation.
            <br />
            <br />
            <b>Abstraction:</b> This is like using a microwave - you don&apos;t need to understand how microwaves work to heat
            your food. You just press buttons and get results. Same with functions - I can use someone else&apos;s sorting
            function without knowing the algorithm behind it.
          </p>
          
          <ul>
            <li>Functions are like having a helpful assistant - give them some data, they do the work and give you back results</li>
            <li>They make debugging SO much easier - if something breaks, you know exactly which function to check</li>
            <li>I like to think of them as building blocks - small, simple functions that combine to create complex applications</li>
            <li>Best practice I&apos;ve learned: if you&apos;re writing the same code twice, it probably should be a function!</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default JavaScriptDom