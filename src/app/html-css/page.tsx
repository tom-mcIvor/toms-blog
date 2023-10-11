'use client'
import React from 'react'
import Image from 'next/image'
import cssSelector from '../../../img/css-selector.png'
import cssSelectorComplex from '../../../img/css-selector.png'
import cssSelectorEvenMoreComplex from '../../../img/css-selector.png'


function page() {
  return (
    <>
    <div className="container5">
    <a href="html-css-2.html">Whats the difference between padding border and margin?</a>
    <h1>CSS selectors </h1>
    <p>in this guide we will learn how to use complex css selctors </p>
    <p>If you didnt already know what css is and a css selecotr is then read this:</p>
    <p>CSS stands for Cascading Style Sheets · CSS describes how HTML elements are to be displayed on screen, paper, or
      in other media</p>
    <p>A CSS selector is the first part of a CSS Rule. It is a pattern of elements and other terms that tell the browser
      which HTML elements should be selected to have the CSS property values inside the rule applied to them eg :</p>
    <h2>Example of CSS selector</h2>
    <Image src={cssSelector} alt="example of css selector" />
    <p>This shows the css selector of H1 which relates to the HTML for the heading number 1 (H1) tag</p>
    <p>It also shows the class of special being selected ie: .special</p>
    <p>If a mian tag is being selected its just the main tag name in css followed by the rules
      If its a class then we use .&quot;name-of-class&quot;
      This is something thats just going to have to be memorised and will come naturally if you write css and HTML code
      a lot.
    </p>
    <h1>Complex CSS selectors</h1>
    <p>okay so thats the easy part out of the way now for complex CSS selectors</p>
    <p>Complex css sectors are 2 or more simple css selectors used together eg:</p>
    <Image src={cssSelectorComplex} alt="example of css selector" />
    <p>or even more complex...</p>
    <Image src={cssSelectorEvenMoreComplex} alt="example of css selector" />
    <p>This is where things get confusing...</p>
    <p>In order to select some HTML code (eg if you have a navbar and you want to apply jarfvascript to it) you may need
      complex CSS selectors</p>
    <p>The .navbar ul selector refers to both navbar class and the orderd list tag in HTML
    </p>
    <p>Its important to remember you can add classes togehter and also list HTML code with more than one class</p>
  </div>
  </>
  )
}

export default page