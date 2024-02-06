import emailjs from "@emailjs/browser";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaArrowRightFromBracket } from "react-icons/fa6";
import Swal from "sweetalert2";
import { MdContactPhone, MdLocationOn } from "react-icons/md";

const Contact = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    emailjs
      .sendForm(
        "service_8pcv9n5",
        "template_nh7kma5",
        form,
        "kFrB08mXntYRm3Yl5"
      )
      .then(
        () => {
          Toast.fire({
            icon: "success",
            title: "Email Send successfully",
          });
        },
        () => {
          Toast.fire({
            icon: "error",
            title: "Something wrong!",
          });
        }
      );
    form.reset();
  };

  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="500"
      className="flex flex-col md:flex-row gap-5 px-5 my-12"
    >
      {/* left side */}
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-duration="1000"
        className="md:w-1/3"
      >
        <div className="space-y-5">
          <h1 className="uppercase font-bold text-2xl">Contact Info</h1>
          <div className="flex gap-5 items-center">
            <div className="p-2 bg-[#161616] rounded-xl shadow-2xl space-y-5">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/emoji/48/e-mail.png"
                alt="e-mail"
              />
            </div>
            <div>
              <p className="text-[#a1a0a0]">MAIL</p>
              <a href="">morzmamun@gmail.com</a>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="p-2 bg-[#161616] rounded-xl shadow-2xl h-12 flex items-center justify-center text-3xl">
              <MdContactPhone></MdContactPhone>
            </div>
            <div>
              <p className="text-[#a1a0a0] uppercase">Contact Number</p>
              <p>
                +8801851-565648 <br /> +8801860-015052
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="p-2 bg-[#161616] rounded-xl shadow-2xl text-3xl">
              <MdLocationOn></MdLocationOn>
            </div>
            <div>
              <p className="text-[#a1a0a0] uppercase">Location</p>
              <p>Chattogram, Bangladesh.</p>
            </div>
          </div>
        </div>
        <div className="space-y-5 my-10 md:mt-20">
          <h1 className="uppercase font-bold text-2xl">Social Info</h1>
          <div className="flex justify-center items-center gap-10">
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
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="md:w-2/3 p-5 lg:p-8 bg-[#161616] rounded-xl shadow-2xl space-y-5">
        <div className="hero-content flex-col md:px-20 md:space-y-12">
          <div className="w-80 md:w-[550px] text-left">
            <div className="flex flex-col border-opacity-50">
              <div className=" h-10 mx-auto rounded-box place-items-center">
                {" "}
                <h1
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  className="md:text-4xl uppercase font-bold"
                >
                  Let's Work <span className="text-warning">Together.</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full text-white">
            <form onSubmit={handleSubmit}>
              <div className="relative z-0 mb-5">
                <input
                  type="text"
                  name="name"
                  required
                  className="peer block w-full appearance-none border-0 border-b  bg-transparent py-2.5 px-0 text-sm text-white focus:border-warning focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform  text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-warning">
                  Your name *
                </label>
                {/* <label className="label">
                  <span className="text-white font-bold">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  className=" text-black input input-bordered bg-gray-300 w-full "
                  required
                /> */}
              </div>
              <div className="relative z-0 mb-5">
                <input
                  type="text"
                  name="email"
                  required
                  className="peer block w-full appearance-none border-0 border-b bg-transparent py-2.5 px-0 text-sm text-white focus:border-warning focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label className="absolute  top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform  text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-warning">
                  Your email *
                </label>
                {/* <label className="label">
                  <span className="text-white font-bold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className=" text-black bg-gray-300 input input-bordered w-full"
                  required
                /> */}
              </div>
              <div className="relative z-0 mb-5">
              <input
                    type="text"
                    name="subject"
                    required
                    className="peer block w-full appearance-none border-0 border-b bg-transparent py-2.5 px-0 text-sm text-white focus:border-warning focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-warning">
                    Your Subject *
                  </label>
                {/* <label className="label">
                  <span className="text-white font-bold">Your Subject</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Your Subject*"
                  className=" text-black input input-bordered bg-gray-300 w-full"
                  required
                /> */}
              </div>
              <div className="relative z-0 mb-5">
              <textarea
                    name="message"
                    rows="3"
                    className="peer block w-full appearance-none border-0 border-b bg-transparent py-2.5 px-0 text-sm text-white focus:border-warning focus:outline-none focus:ring-0"
                    placeholder=" "
                  ></textarea>
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-warning">
                    Your message
                  </label>
                {/* <label className="label">
                  <span className="text-white font-bold">Message</span>
                </label>
                <textarea
                  type="text"
                  name="message"
                  placeholder="Your Message*"
                  className=" text-black input input-bordered bg-gray-300 w-full"
                  required
                /> */}
              </div>

              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-outline border-b-2 text-warning hover:border-red-600 hover:bg-white hover:text-black w-1/2 mx-auto"
                >
                  Send Message <FaArrowRightFromBracket />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
