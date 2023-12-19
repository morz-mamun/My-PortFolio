import { FaArrowRightFromBracket, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import html from "../../assets/HTML.svg";
import css from "../../assets/CSS.svg";
import js from "../../assets/javaScript.svg";
import react from "../../assets/React-Dark.svg";
import mongodb from "../../assets/MongoDB.svg";
import tailwind from "../../assets/TailwindCSS-Dark.svg";
import Marquee from "react-fast-marquee";
import Cart from "./Cart";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import SocialLink from "../../Components/SocialLink/SocialLink";
const MiddleSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 px-5 my-8">
      <div
        className="md:w-3/4 flex flex-col gap-2 lg:gap-10 p-5 lg:p-10 bg-[#161616] rounded-xl shadow-2xl"
        data-aos="zoom-in"
        data-aos-offset="300"
        data-aos-duration="1500"
      >
        <div className="space-y-2">
          <p className="text-[#a1a0a0] uppercase">Specialization</p>
          <h2
           className="uppercase font-bold md:text-2xl">
            My Skills
          </h2>
        </div>
        <figure className="">
          <div className="bg-[#161616] rounded-3xl shadow-2xl my-2">
            <Marquee pauseOnHover>
              <Cart img={html} title={"HTML"} subTitle={"80%"}></Cart>
              <Cart img={css} title={"CSS"} subTitle={"70%"}></Cart>
              <Cart img={tailwind} title={"Tailwind"} subTitle={"80%"}></Cart>
              <Cart img={js} title={"JavaScript"} subTitle={"70%"}></Cart>
              <Cart img={react} title={"react"} subTitle={"75%"}></Cart>
              <Cart img={mongodb} title={"MongoDB"} subTitle={"50%"}></Cart>
              <Cart img={css} title={"CSS"} subTitle={"70%"}></Cart>
              <Cart img={js} title={"JavaScript"} subTitle={"70%"}></Cart>
            </Marquee>
          </div>
          <div className="flex justify-end">
            <Link to={"/about"}>
              <FaArrowRightFromBracket className="text-3xl text-[#5c5b5b] hover:text-red-600"></FaArrowRightFromBracket>
            </Link>
          </div>
        </figure>
      </div>

      <div  data-aos="zoom-in"
        data-aos-offset="300"
        data-aos-duration="1500" className="md:w-1/4 flex flex-col gap-8 p-5 lg:p-10 bg-[#161616] rounded-xl shadow-2xl">
        <SocialLink></SocialLink>
        <p className="text-[#a1a0a0 uppercase">Stay With Me</p>
        <p className="font-bold text-2xl">Profile</p>
        <div className="flex justify-end">
          <Link to={"/about"}>
            <FaArrowRightFromBracket className="text-3xl text-[#5c5b5b] hover:text-red-600"></FaArrowRightFromBracket>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
