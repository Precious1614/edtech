import Logo from "../../assets/logo.png";
import LogoText from "../../assets/weSkillYOU.png";
import { useState } from "react";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="top-0 left-0 right-0 flex items-center justify-center h-[10vh] bg-[hsla(217,83%,23%,0.13)] shadow-md">
        <div className="flex justify-between items-center w-[90%]">
          <div className="flex justify-between items-center">
            <img src={Logo} alt="" />
            <img src={LogoText} alt="" className="pl-4" />
          </div>
          <div className="lg:flex justify-between items-center md:block hidden">
            <p className="pr-8 lg:block hidden">Category</p>
            <div className="flex justify-between items-center w-[400px] h-[50px] bg-white rounded-md border border-black p-3">
              <i className="fa fa-search mr-2"></i>
              <input
                type="search"
                name=""
                placeholder="What do you want to learn?"
                className="w-[400px] h-[40px] bg-white rounded-md border border-none outline-none"
              />
            </div>
          </div>
          <div className="lg:block hidden">
            <ul className="flex justify-between items-center">
              <li className="pr-8">
                <a href="">About Us</a>
              </li>
              <li className="pr-8">
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="/signin">Login</a>
              </li>
            </ul>
          </div>
          <div className="lg:flex flex-col items-center bg-[#0a2f6b] rounded-md w-[150px] h-[50px] hidden">
            <button
              className="text-white w-[100%] text-[20px] m-2 font-semibold"
              onClick={() => {
                setShowLinks(!showLinks);
              }}
            >
              Get Started
            </button>
            {showLinks && (
              <div className="w-[300px] h-[380px] pl-14">
                <div className="w-[201px] h-[168px] bg-slate-200 rounded-md mt-4">
                  <ul className="flex items-center justify-center flex-col pt-4 pb-4">
                    <li className="bg-white flex items-center justify-center w-[181px] h-[50px] rounded-md m-2">
                      <a
                        href="/registerform"
                        className="text-slate-800 text-[20px] font-normal"
                      >
                        As a Student
                      </a>
                    </li>

                    <li className="bg-white w-[181px] h-[50px] rounded-md m-2 flex items-center justify-center">
                      <a
                        href="/registerform"
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
          <div className="lg:hidden block" onClick={handleSidebar}>
            {open ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </div>
        </div>
      </div>
      {/* sidebar */}
      <div
        className={`${
          open ? "w-[100%] block" : "w-[0%] hidden"
        } bg-white h-screen fixed top-[10vh] right-0 transition ease lg:hidden`}
      >
        <div className="flex flex-col justify-center items-center">
          <ul className="">
            <li className="pb-10">
              <a href="">About Us</a>
            </li>
            <li className="pb-10">
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="/signin">Login</a>
            </li>
          </ul>
          <div className="flex flex-col items-center bg-[#0a2f6b] rounded-md w-[150px] h-[50px] mt-10 lg:block">
            <button
              className="text-white w-[100%] text-[20px] m-2 font-semibold"
              onClick={() => {
                setShowLinks(!showLinks);
              }}
            >
              Get Started
            </button>
            {showLinks && (
              <div className="w-[300px] h-[380px] pl-14">
                <div className="w-[201px] h-[168px] bg-slate-200 rounded-md mt-4">
                  <ul className="flex items-center justify-center flex-col pt-4 pb-4">
                    <li className="bg-white flex items-center justify-center w-[181px] h-[50px] rounded-md m-2">
                      <a
                        href="/registerform"
                        className="text-slate-800 text-[20px] font-normal"
                      >
                        As a Student
                      </a>
                    </li>

                    <li className="bg-white w-[181px] h-[50px] rounded-md m-2 flex items-center justify-center">
                      <a
                        href="/registerform"
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
      </div>
    </div>
  );
};

export default Navbar;
