import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaGithub, FaEye } from "react-icons/fa";
import carPhoto from "../../Utilities/Image/carbazar.png";
import serviePhoto from "../../Utilities/Image/service.png";
import quizePhoto from "../../Utilities/Image/Quize.png";

const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="bg-black text-white md:overflow-hidden min-h-screen">
      <div className=" py-10">
        <h2 className="text-white  text-center text-5xl font-bold mb-5">
          My <span style={{ color: "#FFB400" }}>Projects</span>
        </h2>
        <p className="text-white text-center uppercase">
          <span style={{ color: "#FFB400" }}> -----</span> Beautiful and awesome
          project creation is my passion .{" "}
          <span style={{ color: "#FFB400" }}> -----</span>
        </p>
      </div>
      <div className="mt-5" data-aos="fade-up">
        <Slider
          {...settings}
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          <div className=" p-4 shadow-md ">
            <div className="space-y-4">
              <div className="space-y-2">
                <img
                  src={carPhoto}
                  alt=""
                  className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-center">carBazar</h3>
              </div>
              <div className="flex justify-between pb-4 border-bottom">
                <div className="flex items-center justify-between">
                  <a
                    rel="noopener noreferrer"
                    href="https://github.com/minhajmia"
                    target="_blank"
                    className="inline-block px-10 py-3 border-2 font-bold capitalize text-xs leading-tight  rounded transition duration-150 ease-in-out "
                    style={{ color: "#FFB400", border: "2px solid #FFB400" }}
                  >
                    <FaGithub className="inline-block mr-2" />
                    Github Link
                  </a>
                </div>
                <a
                  rel="noopener noreferrer"
                  href="https://carbazar-eff18.web.app/"
                  target="_blank"
                  className="inline-block px-10 py-3 border-2 font-bold capitalize text-xs leading-tight  rounded transition duration-150 ease-in-out "
                  style={{ color: "#FFB400", border: "2px solid #FFB400" }}
                >
                  <FaEye className="inline-block mr-2" />
                  Live Website
                </a>
              </div>
            </div>
          </div>
          <div className=" p-4 shadow-md ">
            <div className="space-y-4">
              <div className="space-y-2">
                <img
                  src={serviePhoto}
                  alt=""
                  className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-center">lawCorner</h3>
              </div>
              <div className="flex justify-between pb-4 border-bottom">
                <div className="flex items-center justify-between">
                  <a
                    rel="noopener noreferrer"
                    href="https://github.com/minhajmia"
                    target="_blank"
                    className="inline-block px-10 py-3 border-2 font-bold capitalize text-xs leading-tight  rounded transition duration-150 ease-in-out "
                    style={{ color: "#FFB400", border: "2px solid #FFB400" }}
                  >
                    <FaGithub className="inline-block mr-2" />
                    Github Link
                  </a>
                </div>
                <a
                  rel="noopener noreferrer"
                  href="https://service-review-3899a.web.app/"
                  target="_blank"
                  className="inline-block px-10 py-3 border-2 font-bold capitalize text-xs leading-tight  rounded transition duration-150 ease-in-out "
                  style={{ color: "#FFB400", border: "2px solid #FFB400" }}
                >
                  <FaEye className="inline-block mr-2" />
                  Live Website
                </a>
              </div>
            </div>
          </div>
          <div className=" p-4 shadow-md ">
            <div className="space-y-4">
              <div className="space-y-2">
                <img
                  src={quizePhoto}
                  alt=""
                  className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-center">
                  programmingQuiz
                </h3>
              </div>
              <div className="flex justify-between pb-4 border-bottom">
                <div className="flex items-center justify-between">
                  <a
                    rel="noopener noreferrer"
                    href="https://github.com/minhajmia"
                    target="_blank"
                    className="inline-block px-10 py-3 border-2 font-bold capitalize text-xs leading-tight  rounded transition duration-150 ease-in-out "
                    style={{ color: "#FFB400", border: "2px solid #FFB400" }}
                  >
                    <FaGithub className="inline-block mr-2" />
                    Github Link
                  </a>
                </div>
                <a
                  rel="noopener noreferrer"
                  href="https://rainbow-lamington-fbcf99.netlify.app/"
                  target="_blank"
                  className="inline-block px-10 py-3 border-2 font-bold capitalize text-xs leading-tight  rounded transition duration-150 ease-in-out "
                  style={{ color: "#FFB400", border: "2px solid #FFB400" }}
                >
                  <FaEye className="inline-block mr-2" />
                  Live Website
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Project;
