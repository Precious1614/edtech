import BookIcon from "../../assets/bookicon.png";
import InstructIcon from "../../assets/instructicon.png";
import StudentIcon from "../../assets/studenticon.png";
import ExploreImg from "../../assets/exploreimg.png";
import MoreSkills from "./MoreSkills";

const Explore = () => {
  return (
    <div>
      <div className="flex justify-center w-full items-center">
        <div className="mt-[10vh] w-[90%]">
          <div className="w-[100%] h-[312px] bg-[#0a2f6b] rounded-md text-white  px-10 lg:flex justify-between items-center ">
            <div className="flex  items-center ">
              <img src={BookIcon} alt="" />
              <div className="pl-8 flex justify-between flex-col">
                <p className="text-[40px] font-bold">100+</p>
                <small className="text-[20px] font-medium pt-2">
                  Total Skills
                </small>
              </div>
            </div>
            <div className="flex items-center ">
              <img src={InstructIcon} alt="" />
              <div className="pl-8 flex justify-between flex-col">
                <p className="text-[40px] font-bold">50+</p>
                <small className="text-[20px] font-medium pt-2">
                  Expert Instructors
                </small>
              </div>
            </div>
            <div className="flex items-center ">
              <img src={StudentIcon} alt="" />
              <div className="pl-8 flex justify-between flex-col">
                <p className="text-[40px] font-bold">5000+</p>
                <small className="text-[20px] font-medium pt-2">Students</small>
              </div>
            </div>
          </div>
          <div className="">
            <div className="w-[100%] h-[312px] bg-[#0a2f6b] rounded-md mt-20 mb-10 flex lg:justify-between justify-center items-center text-white">
              <div className=" lg:w-[45%] w-full flex flex-col justify-between pl-10">
                <h1 className="text-white text-[60px] font-semibold">
                  Explore Skills
                </h1>
                <p className="mt-[10rem] underline text-white text-[30px] font-semibold">
                  All Skills
                </p>
              </div>
              <div className="lg:block hidden">
                <img src={ExploreImg} alt="" />
              </div>
            </div>
            <div className="">
              <div className="lg:flex  items-center">
                <p className="text-slate-800 text-[32px] font-medium">
                  Get started by selecting by your preferred skill or
                </p>
                <div className=" flex justify-center items-center w-[400px] h-[50px] bg-white rounded-md border border-black p-3 m-6 ">
                  <i className="fa fa-search mr-2"></i>
                  <input
                    type="search"
                    name=""
                    placeholder="What do you want to learn?"
                    className="w-[400px] h-[40px]  bg-white rounded-md border border-none outline-none "
                  />
                </div>
              </div>
              <div className="mb-[4rem]">
                <MoreSkills />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
