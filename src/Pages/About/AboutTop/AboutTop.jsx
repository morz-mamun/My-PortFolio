import bg from "../../../assets/bg.png";

const AboutTop = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 px-5 my-8">
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-duration="2000"
        className="p-5 lg:p-8 bg-[#161616] rounded-xl shadow-2xl"
      >
        <img
          className="bg-gradient-to-r from-slate-600  via-slate-200
                 to-slate-600 ... w-60 rounded-2xl"
          src={bg}
          alt=""
        />
      </div>

      {/* right side */}
      <div className="flex-1 space-y-5">
        <h1  className="text-5xl font-bold text-center">🕵 About MySelf 📌</h1>
        <div data-aos="fade-left"
        data-aos-offset="300"
        data-aos-duration="2000" className="p-5 lg:p-16 bg-[#161616] rounded-xl shadow-2xl space-y-5">
          <h1></h1>
          <h1 className="font-bold text-3xl">Md Morshed Alam Mamun</h1>
          <p>
            I'm junior MERN Stack Developer. I have experience building web
            applications using MongoDB, Express.js, React.js, and Node.js. I am
            passionate about creating user-friendly and responsive web
            applications.I am always looking for opportunities to learn and grow
            as a developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutTop;
