'use client' 

import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import profilePic from '../../../img/tom.png'
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  ThemeProvider,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
 
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          Docs
        </a>
      </Typography>
    </ul>
  );
}

function Nav() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
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
      <div className="flex items-center justify-between text-blue-gray-900">

        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
         <Menu>
            <MenuHandler>
              <Button>Tech &or;</Button>
            </MenuHandler>
            <MenuList>
            <MenuItem> <a href="html-css.html">CSS lessons</a></MenuItem>
              <MenuItem><a href="javascript-dom.html">Javascript DOM</a></MenuItem>
              <MenuItem> <a href="problem-solving.html">Problem Solving</a></MenuItem>
            </MenuList>
          </Menu>
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    
      
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
        
          
  
          <Menu>
            <MenuHandler>
              <Button>core &or;</Button>
            </MenuHandler>
            <MenuList>     
                  <MenuItem> <a href="neuroplasticity.html">Neuroplasticity ideas</a></MenuItem>
                  <MenuItem> <a href="emotional-intelligence.html">Emotional IQ</a></MenuItem>
                  <MenuItem> <a href="identity-values.html">Identity values</a></MenuItem>
                  <MenuItem> <a href="foundations-reflection.html">Foundations reflection</a></MenuItem>
                  <MenuItem> <a href="learning-plan.html">Learning plan</a></MenuItem>
                </MenuList>              
          </Menu>
      </div>
    </ThemeProvider>
    
  )
}

export default Nav