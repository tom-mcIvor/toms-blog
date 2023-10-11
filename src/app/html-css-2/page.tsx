'use client'
import Link from 'next/link'
import React from 'react'


function htmlCss() {
  return (
    <>
      <Link href="html-css.html">back to selector lesson </Link>
      <h1>What is the difference between Margin, Border, and Padding?</h1>
      <p>In CSS, a margin is the space around an element&apos;s border, while padding is the space between an element&apos;s border
        and the element&apos;s content.</p>
      <p>And.. Border - A border that goes around the padding and content. Margin - Clears an area outside the border. The
        margin is transparent.</p>
      <p className="pool">Here are links for further information...</p>
      <div className="link-container">
        <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding">Padding</Link>
        <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-style">Border</Link>
        <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding">Margin</Link> 
    </div>
    <div className="jewls ">
      <p className="jewl"></p>
    </div>
    <div className="middle">Hello World</div>
    <div className="pad">Padding</div>
    <div className="outer">Margin</div>
    </>
  )
}

export default htmlCss