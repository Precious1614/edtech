import AboutImage from "../../assets/aboutimg.png";
import SeptIcon from "../../assets/septicon.png";
import MIcon from "../../assets/micon.png";
import DellIcon from "../../assets/dellicon.png";
import BelleIcon from "../../assets/belleicon.png";
import NorthIcon from "../../assets/Northicon.png";
import DoleIcon from "../../assets/doleicon.png";
import dysonIcon from "../../assets/dysonicon.png";
import goIcon from "../../assets/goproicon.png";

const About = () => {
  return (
    <>
      <div className="flex justify-center w-full items-center">
        <div className="mt-[10vh] w-[90%]">
          <div className="w-[100%] bg-[#0a2f6b] rounded-md text-white px-10 lg:flex flex-col justify-center items-center pt-[5rem] pb-[5rem]">
            <div className="lg:flex flex-col justify-center items-center ">
              <h2 className="text-white lg:text-[40px] text-[32px] font-bold pb-2">
                Trusted by over 4100 great schools and workshops
              </h2>
              <p className="text-center text-white lg:text-[32px] text-[24px] font-medium">
                Leading learning environments use the vocational skills to help
                students
                <br /> keep their skill fresh
              </p>
            </div>
            <div className=" flex justify-between items-center w-[90%] mt-[6rem] flex-wrap gap-4">
              <a href="" className="">
                <img src={SeptIcon} alt="" />
              </a>
              <a href="" className="">
                <img src={MIcon} alt="" />
              </a>
              <a href="" className="">
                <img src={BelleIcon} alt="" />
              </a>
              <a href="" className="">
                <img src={DellIcon} alt="" />
              </a>
              <a href="" className="">
                <img src={NorthIcon} alt="" />
              </a>
              <a href="" className="">
                <img src={DoleIcon} alt="" />
              </a>
              <a href="" className="">
                <img src={dysonIcon} alt="" />
              </a>
              <a href="" className="">
                <img src={goIcon} alt="" />
              </a>
            </div>

            <div className="lg:w-[80%] w-[100%] h-[578px] bg-white rounded-md border border-black flex items-center justify-between  lg:px-[6rem] px-[2rem] mt-[10rem] lg:flex-row flex-col ">
              <div className="lg:w-[453px] w-full">
                <h4 className="text-justify text-slate-800 md:text-[36px] text-[30px] font-medium pr-[2rem]  ">
                  “Thanks to weskillyou, David Tony has armed our workforce.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  naluptates,
                </h4>
              </div>
              <div className="lg:w-[40%] w-[30%] pl-[2rem] md:mb-2 mb-8 ">
                <img className="" src={AboutImage} />
                <h4 className="text-slate-800 md:text-[36px] text-[24px] font-bold">
                  Jimi Agbaje
                </h4>
                <p className="text-slate-800 md:text-[24px] text-[16px] font-medium ">
                  Principal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
