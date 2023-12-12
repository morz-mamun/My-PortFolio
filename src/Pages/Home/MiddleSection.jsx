import { FaArrowRightFromBracket } from "react-icons/fa6";
import { Link } from "react-router-dom";
import html from '../../assets/HTML.svg'
import Marquee from "react-fast-marquee";
import Cart from "./Cart";

const MiddleSection = () => {
    return (
        <div className="flex gap-5 px-5 my-8">
            <div className="w-3/4 flex flex-col gap-2 lg:gap-10 p-5 lg:p-10 bg-[#161616] rounded-xl shadow-2xl">
           
          <div className="space-y-3">
            <p className="text-[#a1a0a0] uppercase">Specialization</p>
            <h2 className="uppercase font-bold md:text-2xl">
             My Skills
            </h2>
            <p className="text-[#a1a0a0]">
              I am a Junior Frontend Developer <br /> based on react.
            </p>
          </div>
          <figure className="">
           <div className="bg-[#161616] rounded-3xl shadow-2xl my-2">
            <Marquee pauseOnHover>
              <Cart img={html} title={'HTML'}></Cart>
            </Marquee>
          </div>
           <div className="flex justify-end">
              <Link to={"/about"}>
                <FaArrowRightFromBracket className="text-3xl text-[#5c5b5b] hover:text-red-600"></FaArrowRightFromBracket>
              </Link>
            </div>
          </figure>
            </div>

            <div className="w-1/4 flex gap-2 lg:gap-10 p-5 lg:p-10 bg-[#161616] rounded-xl shadow-2xl"></div>
        </div>
    );
};

export default MiddleSection;