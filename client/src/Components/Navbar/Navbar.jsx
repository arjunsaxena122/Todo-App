import React from "react";
import {Link} from "react-router-dom"
import { useTodoContext } from "../../Store";
import Logout from "../Logout/Logout";

const Navbar = () => {

  const {isAuthenticated, setIsAuthenticated} = useTodoContext()

  return (
    <nav className="bg-blue-500 text-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <a href="#" className="hover:text-gray-200">
            MyWebsite
          </a>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-6">
          <Link to={'/'}
            className="hover:text-gray-200 transition duration-300"
          >
            Home
          </Link>
          <Link
            to={'/about'}
            className="hover:text-gray-200 transition duration-300"
          >
            About
          </Link>
          <Link
            to={'/login'}
            onClick={()=>setIsAuthenticated(!isAuthenticated)}
            className="hover:text-gray-200 transition duration-300"
          >
            {isAuthenticated?<Logout setIsAuthenticated={setIsAuthenticated}/>:"Login"}
          </Link>
          <Link
          to={'/register'}
            className="hover:text-gray-200 transition duration-300"
          >
            SignUp
          </Link>
        </div>

        {/* Hamburger Menu (for Mobile) */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
