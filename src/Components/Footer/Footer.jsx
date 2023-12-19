import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" flex items-center justify-center p-5 bg-[#161616] rounded-xl">
      <aside className="text-center">
        <p>
          Copyright © 2023 - All right reserved. <br /> Made by{" "}
          <Link to={"/"}>
            <button className="hover:text-red-600">
              𝕄𝕆ℝ𝕊ℍ𝔼𝔻 <span className="text-warning font-bold">𝔸𝕃𝔸𝕄</span>
            </button>
          </Link>
        </p>
        <nav className="mt-5 flex gap-5 justify-center">
          <a
            className=""
            href="https://www.linkedin.com/in/md-morshed-alam-2324022a4/"
          >
            <FaLinkedin className="text-3xl hover:text-warning"></FaLinkedin>
          </a>
          <a className="" href="https://www.facebook.com/">
            <FaFacebookSquare className="text-3xl hover:text-warning"></FaFacebookSquare>
          </a>
          <a className="" href="https://github.com/morz-mamun">
            <FaGithub className="text-3xl hover:text-warning"></FaGithub>
          </a>
        </nav>
      </aside>
    </footer>
  );
};

export default Footer;
