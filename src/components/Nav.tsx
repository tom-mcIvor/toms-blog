'use client' 
import React from 'react'
// import Image from 'next/image';
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
import {  ChevronUpIcon } from "@heroicons/react/24/solid";

 
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
  const [openMenu, setOpenMenu] = React.useState(false);
  const [openNav, setOpenNav] = React.useState(false);
  const [openMenuRight, setOpenMenuRight] = React.useState(false);
 
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
        <a href="/">
          <div className="pl-20 m-5 flex items-center h-full">
            <button className="mybutton">
              <div className="hello">Home</div>
              <svg className="w-[180px] h-[60px] inline">
                <polyline points="179,1 179,59 1,59 1,1 179,1" />
                <polyline points="179,1 179,59 1,59 1,1 179,1" />
              </svg>
            </button>
          </div>
        </a>
        <div className="flex-grow">
          <Collapse open={openNav}>
            <NavList />
          </Collapse>
        </div>
        <div className="flex-grow flex flex-row">
            <Menu allowHover>
              <MenuHandler>
                <Button className="normal-case">Bootcamp</Button>
              </MenuHandler>
              <MenuList>
                <Menu
                  placement="right-start"
                  open={openMenu}
                  handler={setOpenMenu}
                  allowHover
                  offset={15}
                >
                  <MenuHandler className="flex items-center justify-between">
                    <MenuItem>
                      TECH
                      <ChevronUpIcon
                        strokeWidth={2.5}
                        className={`h-3.5 w-3.5 transition-transform ${
                          openMenu ? 'rotate-90' : ''
                        }`}
                      />
                    </MenuItem>
                  </MenuHandler>
                  <MenuList>
                    <Link href="html-css">
                      <MenuItem className=" hover:text-blue-500 transition-colors">
                        {' '}
                        CSS lessons
                      </MenuItem>
                    </Link>
                    <Link href="javascript-dom">
                      <MenuItem className=" hover:text-blue-500 transition-colors">
                        Javascript DOM
                      </MenuItem>
                    </Link>
                    <Link href="problem-solving">
                      <MenuItem className=" hover:text-blue-500 transition-colors">
                        {' '}
                        Problem Solving
                      </MenuItem>
                    </Link>
                  </MenuList>
                </Menu>
                <Menu
                  placement="right-start"
                  open={openMenuRight}
                  handler={setOpenMenuRight}
                  allowHover
                  offset={15}
                >
                  <MenuHandler className="flex items-center justify-between">
                    <MenuItem>
                      CORE
                      <ChevronUpIcon
                        strokeWidth={2.5}
                        className={`h-3.5 w-3.5 transition-transform ${
                          openMenuRight ? 'rotate-90' : ''
                        }`}
                      />
                    </MenuItem>
                  </MenuHandler>
                  <MenuList>
                    <Link href="neuroplasticity">
                      <MenuItem className="hover:text-blue-500 transition-colors">
                        {' '}
                        Neuroplasticity ideas
                      </MenuItem>
                    </Link>
                    <Link href="emotional-intelligence">
                      <MenuItem className="hover:text-blue-500 transition-colors">
                        {' '}
                        Emotional IQ
                      </MenuItem>
                    </Link>
                    <Link href="identity-values">
                      <MenuItem className="hover:text-blue-500 transition-colors">
                        {' '}
                        Identity values
                      </MenuItem>
                    </Link>
                    <Link href="foundations-reflection">
                      <MenuItem className="hover:text-blue-500 transition-colors">
                        {' '}
                        Foundations reflection
                      </MenuItem>
                    </Link>
                    <Link href="learning-plan">
                      <MenuItem className="hover:text-blue-500 transition-colors">
                        {' '}
                        Learning plan
                      </MenuItem>
                    </Link>
                  </MenuList>
                </Menu>
              </MenuList>
            </Menu>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Nav