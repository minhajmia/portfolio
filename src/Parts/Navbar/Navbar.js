import React from "react";
import { Link } from "react-router-dom";
import {
  FaHouseDamage,
  FaUserTie,
  FaWpforms,
  FaPhoneAlt,
  FaBlogger,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            htmlFor="portfolio-drawer"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {" "}
            <li>
              <Link to="/">
                <FaHouseDamage />
                Home
              </Link>
            </li>
            <li>
              <Link to="about">
                {" "}
                <FaUserTie />
                About
              </Link>
            </li>
            <li>
              <Link to="project">
                {" "}
                <FaWpforms />
                Project
              </Link>
            </li>
            <li>
              <Link to="contact">
                {" "}
                <FaPhoneAlt />
                Contact
              </Link>
            </li>
            <li>
              <Link to="blog">
                {" "}
                <FaBlogger />
                My Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
