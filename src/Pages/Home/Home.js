import React from "react";
import { Typewriter } from "react-simple-typewriter";
import img from "../../Utilities/Image/bgremove.png";
import {
  FaHouseDamage,
  FaUserTie,
  FaWpforms,
  FaPhoneAlt,
  FaBlogger,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero min-h-screen bg-black px-10">
      <div className="hero-content flex-col lg:flex-row justify-evenly">
        <div className=" " data-aos="fade-right">
          <img src={img} className="max-w-md rounded-lg  mr-10 " alt="" />
        </div>
        <div data-aos="fade-left">
          <p className="uppercase text-white">Hi, There ! </p>

          <h1 className=" text-white text-5xl ">
            I am a{" "}
            <span style={{ color: "#FFB400" }} className="text-5xl font-bold">
              {" "}
              <Typewriter
                words={[
                  "Front-end Developer",
                  "React Developer",
                  "MERN Stack Developer !",
                ]}
                cursor={true}
                cursorColor="Yellow"
                loop={true}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>{" "}
          </h1>
          <p className="py-6 text-white">
            I'm an enthusiastic web developer, in Bangladesh. I strive to build
            immersive and beautiful web applications through carefully crafted
            code and user-centric design. Creating any website or web
            application nock me freely and frankly.
          </p>
          <Link to="/about">
            {" "}
            <button
              type="button"
              class="inline-block px-10 py-2 text-white  transition duration-150 ease-in-out rounded-sm  mr-3 font-medium items-center"
              style={{ backgroundColor: "#FFB400" }}
            >
              <FaUserTie className="inline-block mr-2" />
              More About Me
            </button>
          </Link>
          <Link to="/project">
            {" "}
            <button
              type="button"
              class="inline-block px-10 py-3 border-2 font-medium text-xs leading-tight uppercase rounded transition duration-150 ease-in-out"
              style={{ color: "#FFB400", border: "2px solid #FFB400" }}
            >
              <FaWpforms className="inline-block mr-2" />
              Project
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
