import Marquee from "react-fast-marquee";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import bg from "../../assets/bg.png";
import signature from '../../assets/sig.png'
import { Link } from "react-router-dom";

const TopSection = () => {
    return (
        <div className="flex flex-col md:flex-row gap-10 px-5 mt-20">
        <div className="md:w-1/2 flex gap-2 lg:gap-10 p-5 lg:p-10 bg-[#161616] rounded-xl shadow-2xl">
          <figure className="w-1/2">
            <img className="h-52 rounded-xl shadow-2xl" src={bg} alt="Shoes" />
          </figure>
          <div className="space-y-3 w-1/2">
            <p className="text-[#a1a0a0] uppercase">Web Developer</p>
            <h2 className="uppercase font-bold md:text-3xl">
              Md Morshed <br /> Alam
            </h2>
            <p className="text-[#a1a0a0]">
              I am a Junior Frontend Developer <br /> based on react.
            </p>
            <div className="flex justify-end">
              <Link to={"/about"}>
                <FaArrowRightFromBracket className="text-3xl text-[#5c5b5b] hover:text-red-600"></FaArrowRightFromBracket>
              </Link>
            </div>
          </div>
        </div>
  
        {/* right side */}
        
        <div className="md:w-1/2">
          <div className="bg-[#161616] rounded-3xl p-5 shadow-2xl mb-5">
            <Marquee>
              I can be a React component, multiple React components, or just some
              text.
            </Marquee>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col gap-5 p-5 lg:p-10 bg-[#161616] rounded-xl shadow-2xl">
                <div className="flex justify-center">
                <img className=""
                  src={signature}
                  alt="signature"
                />
                </div>
            
             <div className="space-y-2">
                <h2 className="text-[#a1a0a0] uppercase">More About Me</h2>
                <p className="text-xl lg:text-2xl font-bold uppercase">Credentials</p>
              </div>
             <div className="flex justify-end">
             <Link to={"/about"}>
                <FaArrowRightFromBracket className="text-3xl text-[#5c5b5b] hover:text-red-600"></FaArrowRightFromBracket>
              </Link>
             </div>
            </div>
            <div className="flex flex-col gap-5 p-5 lg:p-10 bg-[#161616] rounded-xl shadow-2xl">
                <div className="flex justify-center">
                <img className=""
                  src={signature}
                  alt="signature"
                />
                </div>
             <div className="space-y-2">
                <h2 className="text-[#a1a0a0] uppercase">Showcase</h2>
                <p className="text-xl lg:text-2xl font-bold uppercase">Projects</p>
              </div>
              <div className="flex justify-end">
             <Link to={"/about"}>
                <FaArrowRightFromBracket className="text-3xl text-[#5c5b5b] hover:text-red-600"></FaArrowRightFromBracket>
              </Link>
             </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default TopSection;