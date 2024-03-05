"use client"

import Link from "next/link";
import { useState } from "react"
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon'
import XmarkIcon from '@heroicons/react/24/outline/XMarkIcon'

const navLinks = [
  {
    title: "About",
    path: "#about" 
  },
  {
    title: "Project",
    path: "#project"
  },
  {
    title: "Contact",
    path: "#contact"
  }
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
     <nav className="fixed top-0 left-0 w-full z-10 border border-[#33353F] border-l-transparent bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap lg:py-4 items-center justify-between mx-auto px-4 py-2">
        <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
          LOGO
        </Link>
        <div className="mobile-menu block md:hidden">
          {navbarOpen ? (
              <button 
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200"
              >
                <XmarkIcon className="h5 w-5" />
                
              </button> 
            ) : (
              <button 
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
      </div>
      
     </nav>
  )
}

export default Navbar;