'use client'
import React from 'react'
import Image from 'next/image'
import cssSelector from '../../../public/css-selector.png'
import cssSelectorComplex from '../../../public/css-selector.png'
import cssSelectorEvenMoreComplex from '../../../public/css-selector.png'
import { CLIENT_STATIC_FILES_RUNTIME } from 'next/dist/shared/lib/constants'


function Page() {
  return (
    <div className="html-css-page">
      <div className="page-container">
        
        {/* Interactive Card Section */}
        <section className="interactive-section">
          <div className="box-model-card">
            <a href="/html-css-2" className="interactive-card-link">
              <div className="card-header">
                <div className="card-icon">🎯</div>
                <h3 className="card-title">CSS Box Model Explained</h3>
              </div>
              <div className="card-body">
                <p className="card-description">Discover the difference between padding, border, and margin with an interactive visual demo</p>
                <div className="concept-preview">
                  <div className="mini-box-demo">
                    <div className="mini-margin">
                      <div className="mini-border">
                        <div className="mini-padding">
                          <div className="mini-content">Content</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <span className="cta-text">Start Interactive Demo</span>
                <div className="cta-arrow">
                  <span>→</span>
                </div>
              </div>
              <div className="card-glow"></div>
            </a>
          </div>
        </section>

        {/* CSS Introduction Section */}
        <section className="content-section">
          <div className="section-header">
            <h1>CSS Selectors</h1>
            <p className="intro-text">In my guide we will learn how to use complex CSS selectors</p>
          </div>
          
          <div className="info-block">
            <p>If you didn&apos;t already know what CSS is and a CSS selector is then read this:</p>
            <div className="definition-box">
              <p><strong>CSS</strong> stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media.</p>
              <p><strong>A CSS selector</strong> is the first part of a CSS Rule. It is a pattern of elements and other terms that tell the browser which HTML elements should be selected to have the CSS property values inside the rule applied to them.</p>
            </div>
          </div>
        </section>

        {/* Basic CSS Selector Example */}
        <section className="example-section">
          <h2>Example of CSS Selector</h2>
          <div className="image-container">
            <Image src={cssSelector} alt="example of css selector" />
          </div>
          <div className="explanation-block">
            <p>This shows the CSS selector of H1 which relates to the HTML for the heading number 1 (H1) tag.</p>
            <p>It also shows the class of special being selected ie: .special</p>
            <div className="tip-box">
              <p>If a main tag is being selected it&apos;s just the main tag name in CSS followed by the rules. If it&apos;s a class then we use .&quot;name-of-class&quot;. This is something that&apos;s just going to have to be memorized and will come naturally if you write CSS and HTML code a lot.</p>
            </div>
          </div>
        </section>

        {/* Complex CSS Selectors Section */}
        <section className="complex-section">
          <div className="section-header">
            <h1>Complex CSS Selectors</h1>
            <p className="intro-text">Okay so that&apos;s the easy part out of the way, now for complex CSS selectors</p>
          </div>
          
          <div className="info-block">
            <p>Complex CSS selectors are 2 or more simple CSS selectors used together:</p>
          </div>

          <div className="example-group">
            <div className="image-container">
              <Image src={cssSelectorComplex} alt="example of complex css selector" />
            </div>
            
            <p className="transition-text">or even more complex...</p>
            
            <div className="image-container">
              <Image src={cssSelectorEvenMoreComplex} alt="example of even more complex css selector" />
            </div>
          </div>

          <div className="explanation-block">
            <p className="emphasis-text">This is where things get confusing...</p>
            <p>In order to select some HTML code (eg if you have a navbar and you want to apply JavaScript to it) you may need complex CSS selectors.</p>
            <div className="example-box">
              <p>The <code>.navbar ul</code> selector refers to both navbar class and the unordered list tag in HTML.</p>
            </div>
            <div className="tip-box">
              <p>It&apos;s important to remember you can add classes together and also list HTML code with more than one class.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Page