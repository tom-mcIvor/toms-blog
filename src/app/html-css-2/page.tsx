'use client'
import Link from 'next/link'
import React, { useState } from 'react'

function HtmlCss() {
  const [activeDemo, setActiveDemo] = useState('all')

  return (
    <div className="html-css-2-page">
      <div className="container">
        <Link href="/html-css" className="back-link">← Back to CSS Selectors</Link>
        
        <h1 className="main-title">What is the difference between Margin, Border, and Padding?</h1>
        
        <div className="explanation">
          <p>In CSS, these three properties control the spacing and appearance around elements:</p>
          <ul>
            <li><strong>Content:</strong> The actual content of the element</li>
            <li><strong>Padding:</strong> Space between content and border (inside the element)</li>
            <li><strong>Border:</strong> The border around the padding and content</li>
            <li><strong>Margin:</strong> Space outside the border (between elements)</li>
          </ul>
        </div>

        <div className="demo-controls">
          <h2>Interactive Box Model Demo</h2>
          <p>Click the buttons to highlight different parts:</p>
          <div className="control-buttons">
            <button
              className={activeDemo === 'all' ? 'active' : ''}
              onClick={() => setActiveDemo('all')}
            >
              Show All
            </button>
            <button
              className={activeDemo === 'content' ? 'active' : ''}
              onClick={() => setActiveDemo('content')}
            >
              Content
            </button>
            <button
              className={activeDemo === 'padding' ? 'active' : ''}
              onClick={() => setActiveDemo('padding')}
            >
              Padding
            </button>
            <button
              className={activeDemo === 'border' ? 'active' : ''}
              onClick={() => setActiveDemo('border')}
            >
              Border
            </button>
            <button
              className={activeDemo === 'margin' ? 'active' : ''}
              onClick={() => setActiveDemo('margin')}
            >
              Margin
            </button>
          </div>
        </div>

        <div className="demo-container">
          <div className={`box-model-demo ${activeDemo}`}>
            <div className="margin-area">
              <div className="margin-label">Margin</div>
              <div className="border-area">
                <div className="border-label">Border</div>
                <div className="padding-area">
                  <div className="padding-label">Padding</div>
                  <div className="content-area">
                    <div className="content-label">Content</div>
                    <div className="content-text">Hello World!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="code-example">
          <h3>CSS Code Example:</h3>
          <pre><code>{`.my-element {
  margin: 20px;        /* Space outside the border */
  border: 3px solid #333; /* Border around the element */
  padding: 15px;       /* Space inside the border */
  background: #f0f0f0; /* Content background */
}`}</code></pre>
        </div>

        <div className="reference-links">
          <h3>Learn More:</h3>
          <div className="link-container">
            <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding" target="_blank">
              📖 Padding Documentation
            </Link>
            <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/border" target="_blank">
              📖 Border Documentation
            </Link>
            <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin" target="_blank">
              📖 Margin Documentation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HtmlCss