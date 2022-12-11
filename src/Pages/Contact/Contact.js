import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="text-white bg-black py-10">
        <h2 className="text-white text-5xl font-bold mb-5 text-center">
          Get <span style={{ color: "#FFB400" }}>in touch</span>
        </h2>
        <p className="text-white text-center">
          <span style={{ color: "#FFB400" }}> -----</span>I’M ALWAYS OPEN TO
          DISCUSSING PRODUCT DESIGN AND DEVELOPMENT WORK .{" "}
          <span style={{ color: "#FFB400" }}> -----</span>
        </p>
      </div>
      <section className="py-6  bg-black min-h-screen md:pt-14 text-white">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x divide-yellow-500">
          <div
            className="py-6 md:py-0 md:px-6 flex justify-center items-center"
            data-aos="fade-right"
          >
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                  style={{ color: "#FFB400" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Dhaka, Bangladesh</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                  style={{ color: "#FFB400" }}
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>+8801876704745</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                  style={{ color: "#FFB400" }}
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>minhajmia418@gmail.com</span>
              </p>
              <p className="mb-5">Social profiles</p>
              <a
                href="https://www.facebook.com/minhaj41803095"
                className=" rounded-full border  p-2 mr-3 inline-block "
                style={{ color: "#FFB400", border: "2px solid #FFB400" }}
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/Minhajmia5"
                className=" rounded-full border  p-2 mr-3 inline-block "
                style={{ color: "#FFB400", border: "2px solid #FFB400" }}
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/minhajmia/"
                className=" rounded-full border  p-2 mr-3 inline-block"
                style={{ color: "#FFB400", border: "2px solid #FFB400" }}
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <form
            novalidate=""
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
            action="https://formsubmit.co/1c62d5198737e69aa9725d3cd2aeb1b4"
            method="POST"
            data-aos="fade-left"
          >
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                type="name"
                name="name"
                placeholder="Name"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-teal-400 bg-black border focus:border-none p-2"
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-teal-400 bg-black border focus:border-none p-2"
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                type="message"
                name="message"
                placeholder="Message"
                rows="3"
                className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-teal-400 bg-black border focus:border-none"
              ></textarea>
            </label>
            <button
              type="submit"
              className="self-center px-8 py-2 text-lg rounded-sm   text-white "
              style={{ backgroundColor: "#FFB400" }}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
