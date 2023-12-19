const AboutMiddle = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 px-5 my-8">
      <div  data-aos="zoom-in"
        data-aos-offset="300"
        data-aos-duration="1500" className="md:w-1/2 p-5 lg:p-8 bg-[#161616] rounded-xl shadow-2xl space-y-5">
        <p className="text-2xl font-bold uppercase text-center">Education</p>

        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle text-warning">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2020</time>
              <div className="text-lg font-black">University
              </div>
            Chittagong National Engineering College. <br />
            B.Sc in Textile Engineering.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className=" text-warning timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2018</time>
              <div className="text-lg font-black">College</div>
             Islamia Degree College Chittagong. <br />
            </div>
            <hr />
          </li>
          <li>
          <hr />
            <div className="timeline-middle text-warning">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2020</time>
              <div className="text-lg font-black">High School
              </div>
          Govt.Muslim High School. <br />
            </div>
            <hr /> 
          </li>
        </ul>
      </div>
      <div  data-aos="zoom-in"
        data-aos-offset="300"
        data-aos-duration="1500" className="md:w-1/2 p-5 lg:p-8 bg-[#161616] rounded-xl shadow-2xl space-y-5">
        <p className="text-2xl font-bold uppercase text-center">Experience</p>

        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className=" timeline-middle text-warning">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2020</time>
              <div className="text-lg font-black"></div>
            
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="text-warning timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">1998</time>
              <div className="text-lg font-black"></div>
             
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMiddle;
