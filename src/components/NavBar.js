import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

export default function NavBar() {
  return (
    // Add class="navbar in header to work on fixed top nav"
    <header className="bg-blue-800 dark:bg-gray-800">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink 
            to="/" 
            exact
            activeClassName="text-white"
              /* dark:text isn't working */
            className="inflex-flex items-center py-6 px-3 mr-4 text-white dark:text-blue-700 hover:text-yellow-500 text-4xl font-bold tracking-widest"
          >
            McFadden
          </NavLink>
          <NavLink 
            to="/post"
            activeClassName="text-yellow-400 bg-blue-400"
            className="inflex-flex items-center py-4 px-3 my-6 rounded text-blue-100 hover:text-yellow-500 font-bold"
          >
            Blog Posts
          </NavLink>
          <NavLink 
            to="/project"
            activeClassName="text-yellow-400 bg-blue-400"
            className="inflex-flex items-center py-4 px-3 my-6 rounded text-blue-100 hover:text-yellow-500 font-bold"
          >
            Projects
          </NavLink>
          <NavLink 
            to="/about"
            activeClassName="text-yellow-400 bg-blue-400"
            className="inflex-flex items-center py-4 px-3 my-6 rounded text-blue-100 hover:text-yellow-500 font-bold"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon 
            url="https://www.linkedin.com/in/matthew-mcfadden-268aa71a6/" 
            className="mr-4" 
            target="_blank" 
            fgColor="#fff" 
            style={{height: 35, width: 35}}
          />
          <SocialIcon 
            url="https://github.com/MatthewMcFadden" 
            className="mr-4" 
            target="_blank" 
            fgColor="#fff" 
            style={{height: 35, width: 35}}
          />
        </div>
      </div>
    </header>
  )
}