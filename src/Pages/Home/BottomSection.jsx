import { Link } from "react-router-dom";
import { LuArrowDownFromLine } from "react-icons/lu";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const BottomSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 px-5 mb-16">
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-duration="1500"
        className="md:w-1/2 grid grid-cols-3 gap-1 md:gap-5 p-2 lg:p-10 bg-[#161616] rounded-xl shadow-2xl"
      >
        <div className="bg-[#202020] p-2 md:p-4 rounded-xl text-center space-y-3">
          <h2 className="text-3xl font-bold">02</h2>
          <p className="text-[#a1a0a0] text-sm md:text-base">Experience Years</p>
        </div>
        <div className="bg-[#202020] p-2 md:p-4 rounded-xl text-center space-y-3">
          <h2 className="text-2xl font-bold">00</h2>
          <p className="text-sm md:text-base text-[#a1a0a0] ">WorldWide Clients</p>
        </div>
        <div className="bg-[#202020] p-2 md:p-4 rounded-xl text-center space-y-3">
          <h2 className="text-2xl font-bold">22</h2>
          <p className="text-sm md:text-base text-[#a1a0a0]">Total Projects</p>
        </div>
      </div>
      {/* right side */}
      <div data-aos="fade-left"
        data-aos-offset="300"
        data-aos-duration="1500"
       className="md:w-1/2 p-5 lg:p-10 bg-[#161616] rounded-xl shadow-2xl">
        <LuArrowDownFromLine className="text-3xl mb-5 text-warning"></LuArrowDownFromLine>
        <h1 className="text-5xl font-bold">
          Lets Work <span className="text-warning">Together.</span>
        </h1>
        <div className="flex justify-end">
          <Link to={"/contact"}>
            <FaArrowRightFromBracket className="text-3xl text-[#5c5b5b] hover:text-warning"></FaArrowRightFromBracket>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
