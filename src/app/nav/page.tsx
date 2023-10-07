'use client' 

import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import profilePic from '../../../img/tom.png'
import { useState } from 'react';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Card,
  Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";


const menuItems = [
  {
    title: "@material-tailwind/html",
    description:
      "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
  },
  {
    title: "@material-tailwind/react",
    description:
      "Learn how to use @material-tailwind/react, packed with rich components for React.",
  },
  {
    title: "Material Tailwind PRO",
    description:
      "A complete set of UI Elements for building faster websites in less time.",
  },
];


function Nav() {

  const [openMenu, setOpenMenu] = React.useState(false)

  return (
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

        <Menu open={openMenu} handler={setOpenMenu} allowHover>
      <MenuHandler>
        <Button
          variant="text"
          className="flex items-center gap-3 text-base font-normal capitalize tracking-normal"
        >
          Technology{" "}
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
        <Card
          color="gray"
          shadow={false}
          variant="gradient"
          className="col-span-3 grid h-full w-full place-items-center rounded-md"
        >
          <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
        </Card>
        <ul className="col-span-4 flex w-full flex-col gap-1">
          {menuItems.map(({ title, description }) => (
            <a href="#" key={title}>
              <MenuItem>
                <Typography variant="h6" color="blue-gray" className="mb-1">
                  {title}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  {description}
                </Typography>
              </MenuItem>
            </a>
          ))}
        </ul>
      </MenuList>
    </Menu>

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
  )
}

export default Nav