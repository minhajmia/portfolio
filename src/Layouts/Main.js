import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import Navbar from "../Parts/Navbar/Navbar";
import "./Main.css";

import {
  FaHouseDamage,
  FaUserTie,
  FaWpforms,
  FaPhoneAlt,
  FaBlogger,
} from "react-icons/fa";

const Main = () => {
  const activeStyle = { color: "#FFB400" };
  return (
    <>
      <div className=" md:hidden">
        <Navbar />
      </div>
      <div className="drawer drawer-mobile  ">
        <input
          id="portfolio-drawer"
          type="checkbox"
          className="drawer-toggle "
        />
        <div className="drawer-content ">
          <Outlet />
        </div>
        <div className="drawer-side  bg-black ">
          <label htmlFor="portfolio-drawer" className="drawer-overlay"></label>
          <ul
            className={` p-4 w-30  text-white flex md:flex-col focus:bg:none active:bg-none justify-center items-center gap-2 ${(
              isActive
            ) => (isActive ? " active" : "undefined")}`}
          >
            {/* ${({ isActive }) => (isActive ? "active" : undefined)} */}
            <li>
              <NavLink
                to="/"
                className="flex justify-center items-center gap-2 "
              >
                <FaHouseDamage className="mr-3" /> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className="flex justify-center items-center gap-2"
              >
                <FaUserTie className="mr-3" /> About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="project"
                className="flex justify-center items-center gap-2"
              >
                <FaWpforms className="mr-2" />
                Project
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className="flex justify-center items-center gap-2"
              >
                <FaPhoneAlt className="mr-2" />
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="blog"
                className="flex justify-center items-center gap-2"
              >
                <FaBlogger className="mr-2" />
                My Blog
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Main;
