'use client'
import React from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};


function javaScriptDom() {
  const [open, setOpen] = React.useState(0)
 
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value)
  return (
    <>
    <br />
    <br />
    <br />
    <p></p>
    <br />
    <p>
    <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
        <AccordionHeader onClick={() => handleOpen(1)}>An analogy to describe JavaScript and its relationship to HTML and CSS.</AccordionHeader>

      <AccordionBody>
      JavaScript is akin to a conductor orchestrating a symphony. Just as a conductor directs musicians (HTML and CSS)
      to create harmonious music, JavaScript guides HTML and CSS elements to produce dynamic and interactive web
      experiences.
        </AccordionBody>
        </Accordion>
    </p>
    <br />
    <p></p>
    <br />
    <p>
    <details>
      <summary style={{color:"blueviolet", display: "list-item", margin: 0, cursor: "pointer"}}>
        Question
      </summary>
      <h3>Explain control flow and loops using an example process from everyday life, for example, &apos;waking up&apos; or
      &apos;br /ushing your teeth&apos; (but not those).</h3>
    </details>
    </p>
    <br />
    <p>
    <h4>Control Flow:</h4> Control flow is evident in the decision-making process throughout, including ingredient
    preparation, shaping cookies, setting the timer, and assessing doneness.
    <br />
    <h4 className="inline mr-4">Loop:</h4>
    Loops are present in the mixing process and baking process, where certain actions are repeated until a specific
    condition is met (mixing until the dough is well combined, baking for a set amount of time).
    </p>
   
    <br />
    
    <details>
      <summary style={{color:"blueviolet", display: "list-item", margin: 0, cursor: "pointer"}}>
        Question
      </summary>
      <h3>Describe what the DOM is and an example of how you might interact with it.</h3>
    </details>
    <br />
    <p>The DOM (Document Object Model) is a programming interface that represents the structure of a  web document, like
      HTML, in a tree-like format. It allows you to interact with and manipulate the content and structure of a web page
      using languages like JavaScript.
      <br />
      Example of interacting with the DOM: You can use JavaScript to change the text of a webpage element, like updating
      a paragraph or changing the color of a button when clicked.
    </p>
    <br />
    
    <details>
      <summary style={{color:"blueviolet", display: "list-item", margin: 0, cursor: "pointer"}}>
        Question
      </summary>
      <h3>Explain the difference between accessing data from arrays and objects.</h3>
    </details>
    <br />
    Arrays are like ordered containers of values, where each element has a numeric index, and you access data using
      square br /ackets with an index, such as myArray[0] for the first item. Arrays are suitable for managing lists of
      similar items, like a series of scores or names.
      <br />
      <br />
      <p>
      In contrast, objects are akin to labeled compartments, employing key-value pairs for data storage. To retrieve
      data from objects, you use either dot notation or square brackets with the specific key, for instance,
      myObject.property or myObject[&apos;property&apos;]. Objects are well-suited for organizing data with distinct attributes,
      making them valuable for representing entities such as customers or products. Your choice between arrays and
      objects hinges on your data&apos;s structure and the intended data manipulation tasks at hand.
      </p>
   
      <li>Access data from OBJECTS with dot nottation eg Products.Name</li>
    
      <li>Access data from ARRAYS with index eg Products[1]</li>
  
      <li>you can also access data with index&apos;s for OBJECTS eg Products.Name[1]</li>
  
      <li>Objects are suitable for organizing data with named attributes, making them great for representing entities
        like people or products.</li>
    
    <br />
    <br />
    <p>
    <details>
      <summary style={{color:"blueviolet", display: "list-item", margin: 0, cursor: "pointer"}}>
        Question
      </summary>
      <h3>Explain what functions are and why they are helpful.</h3>
    </details>
    </p>
    <br />
  
      <b>Reusability:</b> Once you define a function, you can call it multiple times from different parts of your code.
      This reusability reduces code duplication and makes maintenance more efficient. If you need to perform the same
      task in various places, you can simply call the function instead of rewriting the same code.
      <br />
      <br />
      <b>Abstraction</b>: Functions abstract away the details of their implementation. When you call a function, you
      don&apos;t need to know how it works internally; you only need to understand what it does and how to use it. This
      simplifies the overall codebase and allows for better collaboration among developers.
    
      <li>A set of statements that performs a task or calculates a value</li>
    
      <li>Reduces duplication of code. Decomposes complex problems into simpler pieces</li>
    </>
  )
}

export default javaScriptDom