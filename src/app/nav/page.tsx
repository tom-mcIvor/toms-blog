'use client' 

import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import profilePic from '../../../img/tom.png'
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  ThemeProvider,
} from "@material-tailwind/react";

function Nav() {
  const theme = {
    menu: {
      styles: {
        base: { 
          menu: {
            zIndex: "z-[1000]",
          },
        },
      },
    },
  }
  return (
    <ThemeProvider value={theme}>
      <div className="navbar active">
        <div className="left-part">
          <Link href="https://github.com/tom-mcivor">
            <div className="small">Toms Blog</div>
            <Image src={profilePic} alt="toms profile" />
          </Link>
          <a className="change" href="/">
            <div className="container50">
              <div className="center1">
                <button className="btn">
                  <div className="hello">Home</div>
                  <svg
                    width="180px"
                    height="60px"
                    viewBox="0 0 180 60"
                    className="border"
                  >
                    <polyline
                      points="179,1 179,59 1,59 1,1 179,1"
                      className="bg-line"
                    />
                    <polyline
                      points="179,1 179,59 1,59 1,1 179,1"
                      className="hl-line"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </a>
        </div>
        <div className="menu">
          <Menu>
            <MenuHandler>
              <Button>Tech &or;</Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>Menu Item 1</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
              <Menu placement="right-start" offset={15}>
                <MenuHandler>
                  <MenuItem>Nested Item</MenuItem>
                </MenuHandler>
                <MenuList>
                  <MenuItem>Nested Item 1</MenuItem>
                  <MenuItem>Nested Item 2</MenuItem>
                  <MenuItem>Nested Item 3</MenuItem>
                </MenuList>
              </Menu>
              <MenuItem>Menu Item 3</MenuItem>
            </MenuList>
          </Menu>
        </div>
        <nav className="hello10">
          <ul>
            <li>
              <a href="#"></a>
              <ul>
                <li>
                  <a href="html-css.html">CSS lessons</a>
                </li>
                <li>
                  <a href="javascript-dom.html">Javascript DOM</a>
                </li>
                <li>
                  <a href="problem-solving.html">Problem Solving</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#"></a>
              <ul>
                <li>
                  <a href="neuroplasticity.html">Neuroplasticity ideas</a>
                </li>
                <li>
                  <a href="emotional-intelligence.html">Emotional IQ</a>
                </li>
                <li>
                  <a href="identity-values.html">Identity values</a>
                </li>
                <li>
                  <a href="foundations-reflection.html">
                    Foundations reflection
                  </a>
                </li>
                <li>
                  <a href="learning-plan.html">Learning plan</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <ul className="this-one">
          <div className="tech">
            <li>
              <a href="html-css.html">CSS lessons</a>
            </li>
            <li>
              <a href="javascript-dom.html">Javascript DOM</a>
            </li>
            <li>
              <a href="problem-solving.html">Problem solving</a>
            </li>
          </div>
          <div className="core">
            <li>
              <a href="neuroplasticity.html">Neuroplasticity ideas</a>
            </li>
            <li>
              <a href="emotional-intelligence.html">Emotional IQ</a>
            </li>
            <li>
              <a className="change-3" href="identity-values.html">
                Identity values
              </a>
            </li>
            <li>
              <a href="foundations-reflection.html">Foundations reflection</a>
            </li>
            <li>
              <a href="learning-plan.html">Learning plan</a>
            </li>
          </div>
        </ul>
      </div>
    </ThemeProvider>
  )
}

export default Nav