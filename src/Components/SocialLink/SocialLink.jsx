import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";


const SocialLink = () => {
    return (
        <div className="bg-[#202020] rounded-xl shadow-2xl py-10 px-2 flex items-center justify-center gap-5">
                <a className="" href="https://www.linkedin.com/in/md-morshed-alam-2324022a4/"><FaLinkedin className="text-3xl hover:text-warning"></FaLinkedin></a>
                <a className=""  href="https://www.facebook.com/"><FaFacebookSquare className="text-3xl hover:text-warning"></FaFacebookSquare></a>
                <a className=""  href="https://github.com/morz-mamun"><FaGithub className="text-3xl hover:text-warning"></FaGithub></a>
              </div>
    );
};

export default SocialLink;