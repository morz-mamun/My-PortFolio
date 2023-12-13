import emailjs from "@emailjs/browser";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Swal from "sweetalert2";


const Contact = () => {

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        emailjs.sendForm("service_8pcv9n5", "template_nh7kma5", form, "kFrB08mXntYRm3Yl5")
        .then(() => {
          Toast.fire({
            icon: 'success',
            title: 'Email Send successfully'
          })
        }, () => {
          Toast.fire({
            icon: 'error',
            title: 'Something wrong!'
          })
        })
        form.reset()
    }
  return (
    <div className="flex flex-col md:flex-row gap-5 px-5 my-12">
      <div className="md:w-1/3">
        <div className="space-y-5">
          <h1 className="uppercase font-bold text-2xl">Contact Info</h1>
          <div className="flex gap-5">
            <div className="p-3 bg-[#161616] rounded-xl shadow-2xl space-y-5 text-5xl">
              📩
            </div>
            <div>
              <p className="text-[#a1a0a0]">MAIL</p>
              <a href="">morzmamun@gmail.com</a>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="p-3 bg-[#161616] rounded-xl shadow-2xl space-y-5 text-5xl">
              📲
            </div>
            <div>
              <p className="text-[#a1a0a0]">Contact Number</p>
              <p>
                +8801851-565648 <br /> +8801860-015052
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="p-3 bg-[#161616] rounded-xl shadow-2xl space-y-5 text-5xl">
              🌍
            </div>
            <div>
              <p className="text-[#a1a0a0]">Location</p>
              <p>Chattogram, Bangladesh.</p>
            </div>
          </div>
        </div>
        <div className="space-y-5 mt-8">
          <h1 className="uppercase font-bold text-2xl">Social Info</h1>
          <div className="grid grid-cols-3">
            <a
              className=""
              href="https://www.linkedin.com/in/md-morshed-alam-2324022a4/"
            >
              <FaLinkedin className="text-3xl"></FaLinkedin>
            </a>
            <a className="" href="https://www.facebook.com/">
              <FaFacebookSquare className="text-3xl"></FaFacebookSquare>
            </a>
            <a className="" href="https://github.com/morz-mamun">
              <FaGithub className="text-3xl"></FaGithub>
            </a>
          </div>
        </div>
      </div>

      <div className="md:w-2/3 p-5 lg:p-8 bg-[#161616] rounded-xl shadow-2xl space-y-5">
     
            <div className="hero-content flex-col md:px-20 md:space-y-12">
              <div className="w-80 md:w-[550px] text-left">
                <div className="flex flex-col border-opacity-50">
                  <div className=" h-10 mx-auto rounded-box place-items-center">
                    {" "}
                      <h1 className="md:text-5xl uppercase font-bold">
                       Lets Work <span className="text-warning">Together.</span>
                      </h1>
                  </div>

                </div>
              </div>
              <div className="w-full text-white">
                <form onSubmit={handleSubmit}>
                  <div className="form-control">
                    <label className="label">
                      <span className="text-white font-bold">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name*"
                      className=" text-black input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="form-control ">
                    <label className="label">
                      <span className="text-white font-bold">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email*"
                      className=" text-black input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="form-control ">
                    <label className="label">
                      <span className="text-white font-bold">Your Subject</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Your Subject*"
                      className=" text-black input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="form-control ">
                    <label className="label">
                      <span className="text-white font-bold">Message</span>
                    </label>
                    <textarea
                      type="text"
                      name="message"
                      placeholder="Your Message*"
                      className=" text-black input input-bordered w-full"
                      required
                    />
                  </div>
                 
                  <div className="form-control mt-6">
                    <button type="submit" className="btn btn-outline text-warning hover:border-red-600 hover:bg-white hover:text-black w-1/2 mx-auto">
                      Send Message
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
