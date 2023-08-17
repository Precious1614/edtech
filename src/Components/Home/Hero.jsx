import HeroImg from "../../assets/PremiumPhoto.png";
import { useState } from "react";

const Hero = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="flex justify-center w-full items-center">
      <div className="flex lg:justify-between justify-center items-center mt-[25vh] w-[90%] lg:flex-row flex-col">
        <div className=" lg:w-[45%] w-full flex flex-col justify-center items-center">
          <div className="">
            <h1 className="text-slate-800 font-bold lg:text-6xl text-4xl">
              Empower yourself with WeSkillYou
            </h1>
            <p className="text-slate-800 lg:text-4xl font-medium text-3xl mt-8">
              Start, switch or advance your career
              <br />
              with courses and get certificates.
            </p>
          </div>

          <div className=" flex flex-col items-center bg-[#0a2f6b]  rounded-md w-[200px] h-[50px] mt-10 mb-8  lg:block">
            <button
              className=" text-white w-[100%] text-[20px] m-2 font-semibold  "
              onClick={() => {
                setShowLinks(!showLinks);
              }}
            >
              Get Started
            </button>
            {showLinks && (
              <div className="  h-[380px]">
                <div className="w-[201px]  h-[168px] bg-slate-200 rounded-md  mt-1">
                  <ul className="flex items-center justify-center flex-col pt-4 pb-4">
                    <li className="bg-white flex items-center justify-center  w-[181px] h-[50px] rounded-md m-2 ">
                      <a
                        href=""
                        className="text-slate-800 text-[20px] font-normal"
                      >
                        As a Student
                      </a>
                    </li>

                    <li className="bg-white w-[181px] h-[50px] rounded-md m-2 flex items-center justify-center ">
                      <a
                        href=""
                        className="text-slate-800 text-[20px] font-normal"
                      >
                        As a Teacher
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="lg:w-[50%] w-full">
          <img className="w-full" src={HeroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
