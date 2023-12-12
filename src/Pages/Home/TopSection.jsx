import Marquee from "react-fast-marquee";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import bg from "../../assets/bg.png";
import signature from "../../assets/sig.png";
import project from "../../assets/sig1.png";
import { Link } from "react-router-dom";


const TopSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 px-5 mt-16">
      <div className="md:w-1/2 p-5 lg:p-10 bg-[#161616] rounded-xl shadow-2xl">
      <div className="flex flex-col md:flex-row gap-2 lg:gap-10 ">
        <figure className="md:w-1/2 flex justify-center">
          <img className="h-52 rounded-xl shadow-2xl" src={bg} alt="Shoes" />
        </figure>
        <div className="space-y-3 md:w-1/2">
          <p className="text-[#a1a0a0] uppercase">Web Developer</p>
          <h2 className="uppercase font-bold md:text-3xl">
            Md Morshed <br /> Alam
          </h2>
          <p className="text-[#a1a0a0]">
            Junior MERN Stack Developer{" "}
            <span className="text-warning font-bold">|| </span>Strong in
            Frontend. <span className="text-warning font-bold">|| </span>{" "}
            Passionate about creating seamless web experiences with React.js,
            Node.js, Express.js and MongoDB.
          </p>
        </div>
      </div>
      <Link to="/files/MorzResume.pdf" target="_blank" download><button className="text-warning font-bold text-lg btn btn-outline hover:border-red-600 hover:bg-white hover:text-black">Resume📤</button></Link>
      
      </div>

      {/* right side */}

      <div className="md:w-1/2">
        <div className="bg-[#161616] rounded-3xl text-warning p-5 shadow-2xl mb-5 uppercase">
          <Marquee>
            * Latest <span className="mx-1 text-white">Work and Featured</span>*
            * Latest <span className="mx-1 text-white">Work and Featured</span>{" "}
            *
          </Marquee>
        </div>
        
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col gap-7 p-5 lg:p-10 bg-[#161616] rounded-xl shadow-2xl">
            <div className="flex-grow">
              <img className="" src={signature} alt="signature" />
            </div>
            <div className="space-y-2">
              <h2 className="text-[#a1a0a0] uppercase">More About Me 👨🏽‍💻</h2>
              <p className="text-xl lg:text-2xl font-bold uppercase">
                Credentials
              </p>
               <div className="flex justify-end">
              <Link to={"/about"}>
                <FaArrowRightFromBracket className="text-3xl text-[#5c5b5b] hover:text-red-600"></FaArrowRightFromBracket>
              </Link>
            </div>
            </div>
           
          </div>
          <div className="flex flex-col gap-7 p-5 lg:p-10 bg-[#161616] rounded-xl shadow-2xl">
            <div className="">
              <img className="" src={project} alt="projects" />
            </div>
            <div className="space-y-2">
              <h2 className="text-[#a1a0a0] uppercase">Showcase 📑</h2>
              <p className="text-xl lg:text-2xl font-bold uppercase">
                Projects
              </p>
              <div className="flex justify-end">
                <Link to={"/about"}>
                  <FaArrowRightFromBracket className="text-3xl text-[#5c5b5b] hover:text-red-600"></FaArrowRightFromBracket>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
