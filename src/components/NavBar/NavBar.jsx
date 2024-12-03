import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";

const NavBar = () => {
  const [navActive, setNavActive] = useState(false);
  return (
    <div className="relative w-full border-b bg-gray-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center h-16 px-5 md:px-10 lg:px-20">
        {/* Left Side: Logo and Toggle Button */}
        <div className="flex items-center gap-2">
          {!navActive && (
            <FaBars
              className="text-2xl text-[#0d7a5f] cursor-pointer lg:hidden"
              onClick={() => setNavActive((prev) => !prev)}
            />
          )}
          <Link to="/" className="flex items-center">
            <h1 className="text-3xl font-extrabold text-[#0d7a5f]">ServEz Hub</h1>
          </Link>
        </div>

        {/* Right Side: Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          <li>
            <Link to="/services" className="text-lg text-[#0d7a5f] hover:text-[#005f45] transition">
              Services
            </Link>
          </li>
          <li className="text-lg font-medium text-[#0d7a5f]">
            <Link to="/signin" className="hover:text-[#005f45] transition">
              Sign Up
            </Link>
            <span className="mx-1">/</span>
            <Link to="/login" className="hover:text-[#005f45] transition">
              Log In
            </Link>
          </li>
          <li>
            <Link to="/become-a-tasker">
              <button className="bg-[#0d7a5f] text-white text-lg font-semibold px-5 py-2 rounded-full hover:bg-[#005f45] transition">
                Become a Tasker
              </button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Side Menu */}
      {navActive && (
        <div className="fixed inset-0 z-50 bg-black/50 flex">
          <div className="w-4/5 bg-white p-6 pt-10 shadow-md flex flex-col space-y-6">
            <FaTimes
              className="text-2xl text-[#0d7a5f] mb-4 self-end cursor-pointer"
              onClick={() => setNavActive(false)}
            />
            <Link to="/services" onClick={() => setNavActive(false)}>
              <div className="text-[#0d7a5f] font-semibold text-lg border-b pb-4 flex justify-between items-center">
                Services <FaChevronRight className="text-sm" />
              </div>
            </Link>
            <Link to="/login" onClick={() => setNavActive(false)}>
              <div className="text-[#0d7a5f] font-semibold text-lg border-b pb-4">Log In</div>
            </Link>
            <Link to="/signin" onClick={() => setNavActive(false)}>
              <div className="text-[#0d7a5f] font-semibold text-lg border-b pb-4">Sign Up</div>
            </Link>
            <Link to="/become-a-tasker" onClick={() => setNavActive(false)}>
              <div className="text-[#0d7a5f] font-semibold text-lg border-b pb-4">
                Become a Tasker
              </div>
            </Link>
          </div>
          <div className="w-1/5 bg-transparent" onClick={() => setNavActive(false)}></div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
