import Marquee from "react-fast-marquee";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import bg from "../../assets/bg.png";
import signature from "../../assets/sig.png";
import project from "../../assets/sig1.png";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import resumePdf from "../../../public/MorshedResume.pdf";

const TopSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 px-5 mt-16">
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-duration="2000"
        className="md:w-1/2 p-5 lg:p-10 bg-[#161616] rounded-xl shadow-2xl"
      >
        <div className="flex flex-col md:flex-row gap-2 lg:gap-5 ">
          <figure className="md:w-1/2 flex flex-col justify-center items-center">
            <img
              className="h-52 md:w-fit rounded-xl shadow-2xl bg-gradient-to-r from-slate-600  via-slate-200
                 to-slate-600 ..."
              src={bg}
              alt="Shoes"
            />
            <div className="mt-6 hidden md:block">
              <a
                href='https://drive.google.com/uc?export=download&id=1AkFdQ6O-7TtZ3GtkUKTeJIXSk1qswyKk'
                download="resume-PDF-document"
                target="_blank"
                rel="noreferrer"
              >
                <button className="text-warning font-bold text-lg btn btn-outline hover:border-warning hover:bg-white hover:text-black">
                  Resume <FaDownload></FaDownload>
                </button>
              </a>
            </div>
          </figure>
          <div className="space-y-3 md:w-1/2 text-center md:text-start">
            <div className="space-y-3">
              <p className="text-[#a1a0a0] uppercase">Web Developer</p>
              <h2 className="uppercase text-lg font-bold md:text-3xl">
                <Typewriter
                  words={["Md Morshed Alam"]}
                  loop={0}
                  cursor
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </h2>
            </div>
            <p className="text-[#a1a0a0]">
              Junior MERN Stack Developer{" "}
              <span className="text-warning font-bold">|| </span>Strong base in
              Frontend. <span className="text-warning font-bold">|| </span>{" "}
              Passionate about creating seamless web experiences with React.js,
              Node.js, Express.js and MongoDB.
            </p>
          </div>
          <div className="mt-10 md:hidden block flex items-center justify-center">
            <a
              href="https://drive.google.com/uc?export=download&id=16YrkBlHZZRajwkfho8kQyXJi37kFaJnJ"
              download="MorzResume.pdf"
            >
              <button className="text-warning font-bold text-lg btn btn-outline hover:border-red-600 hover:bg-white hover:text-black">
                Resume📤
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* right side */}

      <div className="md:w-1/2">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="1500"
          className="bg-[#161616] rounded-3xl text-warning p-5 shadow-2xl mb-5 uppercase"
        >
          <Marquee>
            * Latest <span className="mx-1 text-white">Work and Featured</span>*
            * Latest <span className="mx-1 text-white">Work and Featured</span>{" "}
            *
          </Marquee>
        </div>

        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-duration="1500"
          className="flex flex-col md:flex-row gap-5"
        >
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
                  <FaArrowRightFromBracket className="text-3xl text-[#5c5b5b] hover:text-warning"></FaArrowRightFromBracket>
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
                <Link to={"/myWork"}>
                  <FaArrowRightFromBracket className="text-3xl text-[#5c5b5b] hover:text-warning"></FaArrowRightFromBracket>
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
