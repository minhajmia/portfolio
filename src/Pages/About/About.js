import React from "react";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../../Utilities/Image/bgremove2.png";
import img1 from "../../Utilities/Icon image/1.png";
import img4 from "../../Utilities/Icon image/4.png";
import img2 from "../../Utilities/Icon image/2.png";
import img3 from "../../Utilities/Icon image/3.png";
import img5 from "../../Utilities/Icon image/5.png";
import img7 from "../../Utilities/Icon image/7.png";
import img8 from "../../Utilities/Icon image/8.png";
import img9 from "../../Utilities/Icon image/9.png";
import img10 from "../../Utilities/Icon image/10.png";
import img11 from "../../Utilities/Icon image/11.png";
import img12 from "../../Utilities/Icon image/12.png";
import img13 from "../../Utilities/Icon image/13.png";

const About = () => {
  return (
    <div className=" bg-black px-10">
      <div className=" py-10">
        <h2 className="text-white  text-center text-5xl font-bold mb-5">
          About <span style={{ color: "#FFB400" }}>Me</span>
        </h2>
        <p className="text-white text-center ">
          <span style={{ color: "#FFB400" }}> -----</span> I DESIGN AND CODE
          BEAUTIFUL THINGS, AND I LOVE WHAT I DO.{" "}
          <span style={{ color: "#FFB400" }}> -----</span>
        </p>
      </div>
      <div className="flex flex-col w-full lg:flex-row bg-black">
        <div
          className="grid flex-grow  card rounded-box place-items-center bg-black mt-10"
          data-aos="fade-up-right"
        >
          <img src={img} alt="" className="-mt-40 " />
        </div>
        <div
          className=" border lg:border-horizontal  mt-10 "
          style={{ borderColor: "#FFB400" }}
        ></div>
        <div
          className="grid flex-grow   card  ml-16 text-white mt-10 items-center text-left"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <input
            type="text"
            value={"Name:   Minhaj Mia"}
            disabled
            className="mr-2 text-center font-medium w-5/6  "
          />
          <input
            type="text"
            value={"Address:   Dhaka, Bangladesh"}
            disabled
            className="text-center font-medium w-5/6 "
          />
          <input
            type="text"
            value={"Experience:   5 month"}
            disabled
            className="text-center mr-2 font-medium w-5/6 "
          />
          <input
            type="text"
            value={"Phone: +8801876704745"}
            disabled
            className="text-center font-medium w-5/6 "
          />
          <input
            type="text"
            value={"WhatsUp: +8801876704745"}
            disabled
            className="text-center mr-2 font-medium w-5/6 "
          />
          <input
            type="text"
            value={"Telegram: +8801876704745"}
            disabled
            className="text-center font-medium w-5/6 "
          />
          <div>
            <input
              type="text"
              value={"Email: minhajmia418@gmail.com"}
              disabled
              className="text-center mr-2 font-medium w-5/6  "
            />
          </div>
          <a
            href="https://drive.google.com/file/d/1QlbwiI9ZWmqFRLVhxTt6LTGZSFRagYLg/view?usp=share_link"
            target="_blank"
            type="button"
            class="inline-block px-10 py-2 text-white  transition duration-150 ease-in-out rounded-sm  mr-3 font-medium items-center w-5/6 text-center"
            style={{ backgroundColor: "#FFB400" }}
          >
            <FaDownload className="inline-block mr-2 " />
            Download My Resume
          </a>
        </div>
      </div>
      {/* <div className=" text-white mt-10">
        <div className="container max-w-5xl p5-6 py-12 mx-auto">
          <div className="grid ga5-6 m5-6 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb516 before:block before:w526 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-teal-400 ">
                <h3 className="text-3xl font-medium">Experience</h3>
              </div>
              <div className="md:divide-x " style={{ color: "#FFB400" }}></div>
            </div>
            <div className="relative col-span-12 p5-6 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative p5-6 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:5-6 sm:before:5-6 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-teal-400">
                  <h3 className="text-xl font-medium tracking-wide">
                    InnovaInst
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                    Dec 2020
                  </time>
                  <p className="mt-3">
                    Pellentesque feugiat ante at nisl efficitur, in mollis orci
                    scelerisque. Interdum et malesuada fames ac ante ipsum
                    primis in faucibus.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:5-6 sm:before:5-6 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-teal-400">
                  <h3 className="text-xl font-medium tracking-wide">
                    Aliquam sit amet nunc ut
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                    Jul 2019
                  </time>
                  <p className="mt-3">
                    Morbi vulputate aliquam libero non dictum. Aliquam sit amet
                    nunc ut diam aliquet tincidunt nec nec dui. Donec mollis
                    turpis eget egestas sodales.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:5-6 sm:before:5-6 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-teal-400">
                  <h3 className="text-xl font-medium tracking-wide">
                    Pellentesque habitant morbi
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                    Jan 2016
                  </time>
                  <p className="mt-3">
                    Suspendisse tincidunt, arcu nec faucibus efficitur, justo
                    velit consectetur nisl, sit amet condimentum lacus orci nec
                    purus. Mauris quis quam suscipit, vehicula felis id,
                    vehicula enim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="text-white py-20 ">
        <h2 className="text-center font-semibold text-3xl">Skill </h2>
        <section className="p-4 my-6 md:p-8 dark:bg-gray-800 dark:text-gray-100">
          <div className="container grid grid-cols-1 gap-6 m-4 mx-auto md:m-0 md:grid-cols-2 xl:grid-cols-3">
            <div className="flex overflow-hidden rounded-lg ">
              <div className="flex items-center justify-center px-4 ">
                <img src={img1} alt="" className="h-1/4" />
              </div>
              <div className="flex items-center justify-between flex-1 p-3">
                <p className="text-2xl font-semibold">JavaScript</p>
                <p>(80%)</p>
              </div>
            </div>
            <div className="flex overflow-hidden rounded-lg ">
              <div className="flex items-center justify-center px-4 ">
                <img src={img7} alt="" className="h-1/4" />
              </div>
              <div className="flex items-center justify-between flex-1 p-3">
                <p className="text-2xl font-semibold">Js Es6</p>
                <p>(100%)</p>
              </div>
            </div>
            <div className="flex overflow-hidden rounded-lg ">
              <div className="flex items-center justify-center px-4 ">
                <img src={img2} alt="" className="h-1/4" />
              </div>
              <div className="flex items-center justify-between flex-1 p-3">
                <p className="text-2xl font-semibold">React Js</p>
                <p>(100%)</p>
              </div>
            </div>
            <div className="flex overflow-hidden rounded-lg ">
              <div className="flex items-center justify-center px-4 ">
                <img src={img3} alt="" className="h-1/4" />
              </div>
              <div className="flex items-center justify-between flex-1 p-3">
                <p className="text-2xl font-semibold">Node Js</p>
                <p>(30%)</p>
              </div>
            </div>
            <div className="flex overflow-hidden rounded-lg ">
              <div className="flex items-center justify-center px-4 ">
                <img src={img8} alt="" className="h-1/4" />
              </div>
              <div className="flex items-center justify-between flex-1 p-3">
                <p className="text-2xl font-semibold">MongoDB</p>
                <p>(30%)</p>
              </div>
            </div>
            <div className="flex overflow-hidden rounded-lg ">
              <div className="flex items-center justify-center px-4 ">
                <img src={img4} alt="" className="h-1/4" />
              </div>
              <div className="flex items-center justify-between flex-1 p-3">
                <p className="text-2xl font-semibold">Css</p>
                <p>100%</p>
              </div>
            </div>
            <div className="flex overflow-hidden rounded-lg ">
              <div className="flex items-center justify-center px-4 ">
                <img src={img9} alt="" className="h-1/4" />
              </div>
              <div className="flex items-center justify-between flex-1 p-3">
                <p className="text-2xl font-semibold">Bootstrap</p>
                <p>(100%)</p>
              </div>
            </div>
            <div className="flex overflow-hidden rounded-lg ">
              <div className="flex items-center justify-center px-4 ">
                <img src={img10} alt="" className="h-1/4" />
              </div>
              <div className="flex items-center justify-between flex-1 p-3">
                <p className="text-2xl font-semibold">Tailwindcss</p>
                <p>(100%)</p>
              </div>
            </div>
            <div className="flex overflow-hidden rounded-lg ">
              <div className="flex items-center justify-center px-4 ">
                <img src={img5} alt="" className="h-1/4" />
              </div>
              <div className="flex items-center justify-between flex-1 p-3">
                <p className="text-2xl font-semibold">Html</p>
                <p>(100%)</p>
              </div>
            </div>
            <div className="flex overflow-hidden rounded-lg ">
              <div className="flex items-center justify-center px-4 ">
                <img src={img11} alt="" className="h-2/4" />
              </div>
              <div className="flex items-center justify-between flex-1 p-3">
                <p className="text-2xl font-semibold">Git</p>
                <p>(100%)</p>
              </div>
            </div>
            <div className="flex overflow-hidden rounded-lg ">
              <div className="flex items-center justify-center px-4 ">
                <img src={img12} alt="" className="h-1/4" />
              </div>
              <div className="flex items-center justify-between flex-1 p-3">
                <p className="text-2xl font-semibold">GitHub</p>
                <p>(100%)</p>
              </div>
            </div>
            <div className="flex overflow-hidden rounded-lg ">
              <div className="flex items-center justify-center px-4 ">
                <img src={img13} alt="" className="h-2/4" />
              </div>
              <div className="flex items-center justify-between flex-1 p-3">
                <p className="text-2xl font-semibold">Figma</p>
                <p>(100%)</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
