'use client' 
import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
// import profilePic from '../../public/tom.png'
import {
  Collapse,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  ThemeProvider,
} from "@material-tailwind/react";

 
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 lg:w-auto">
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
        <div className="flex items-center justify-between text-blue-gray-900 w-full sticky top-0 bg-black   shadow-md transition duration-400 h-20 z-50">
          <Link href="https://github.com/tom-mcivor">
            <div className="small flex-grow">My Blog</div>
            {/* <Image src={profilePic} alt="toms profile" /> */}
          </Link>
          <a href="/">
            <div>
              <div>
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
          <div className="flex-grow">   
              <Collapse open={openNav}>
              <NavList />
            </Collapse>
          </div>
        <div className="flex-grow flex flex-row" >
          <div className="flex-grow flex">
            <Menu>
              <MenuHandler>
                <Button>Tech &or;</Button>
              </MenuHandler>
              <MenuList>
              <Link href="html-css">
                <MenuItem className=' hover:text-blue-500 transition-colors'>
                  {' '}
                  CSS lessons
                </MenuItem>
              </Link>
                <Link href="javascript-dom">
                <MenuItem className=' hover:text-blue-500 transition-colors'>
                  Javascript DOM
                </MenuItem>
                </Link>
                <Link href="problem-solving">
                <MenuItem className=' hover:text-blue-500 transition-colors'>
                  {' '}
                  Problem Solving
                </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </div>

          <div className="flex-grow">
            <Menu>
              <MenuHandler>
                <Button className='hover:text-blue-500 transition-colors'>core &or;</Button>
              </MenuHandler>
              <MenuList>
                <Link href="neuroplasticity">
                <MenuItem className='hover:text-blue-500 transition-colors'>
                  {' '}
                  Neuroplasticity ideas
                </MenuItem>
                </Link>
                <Link href="emotional-intelligence">
                <MenuItem className='hover:text-blue-500 transition-colors'> 
                  {' '}
                  Emotional IQ
                </MenuItem>
                </Link>
                <Link href="identity-values">
                <MenuItem className='hover:text-blue-500 transition-colors'>
                  {' '}
                  Identity values
                </MenuItem>
                </Link>
                <Link href="foundations-reflection">
                <MenuItem className='hover:text-blue-500 transition-colors'>
                  {' '}
                  Foundations reflection
                </MenuItem>
                </Link>
                <Link href="learning-plan">
                <MenuItem className='hover:text-blue-500 transition-colors'>
                  {' '}
                  Learning plan
                </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </div>
        </div>
        </div>    
    </ThemeProvider>
  )
}

export default Nav