import Logo from "../../assets/footerlogo.png";
import LogoText from "../../assets/weSkillYOUfoot.png";
import Facebook from "../../assets/facebook.png";
import Linkined from "../../assets/linkined.png";
import Youtube from "../../assets/youtube.png";
import TikTok from "../../assets/tiktok.png";
import FAQ from "../../assets/faq.png";
import Googlestore from "../../assets/googleplay.png";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-center w-full items-center bg-[#0a2f6b] mt-[10vh] pb-[4rem]">
        <div className="w-[95%]">
          <div className="w-[100%] h-[312px] rounded-md  flex justify-between py-[5rem] ">
            <div className=" flex flex-col justify-between">
              <div className="flex items-center">
                <img src={Logo} alt="" />
                <img src={LogoText} alt="" className="pl-4" />
              </div>
              <div className="flex mt-[4rem] gap-8">
                <a href="">
                  <img src={Facebook} alt="" />
                </a>
                <a href="">
                  <img src={Linkined} alt="" />
                </a>
                <a href="">
                  <img src={Youtube} alt="" />
                </a>
                <a href="">
                  <img src={TikTok} alt="" />
                </a>
              </div>
            </div>
            <div className="">
              <div className="flex items-center">
                <img src={FAQ} alt="" />
                <p className="pl-4 text-white text-[24px] font-semibold">
                  FAQs
                </p>
              </div>
              <div className="flex text-white items-center mt-4">
                <i className="fa-solid fa-envelope fa-2xl"></i>
                <p className="pl-4 text-white text-[24px] font-semibold">
                  Students Support
                </p>
              </div>
            </div>
            <div className="lg:flex justify-between items-end lg:gap-[4rem] ">
              <div className="bg-white w-60 h-[100px]  rounded-md flex justify-evenly items-center p-4 lg:mb-0 sm:mb-6">
                <img src={Googlestore} alt="" />

                <div className="">
                  <small className="text-black text-opacity-80 text-[13px] font-medium">
                    GET IT ON
                  </small>
                  <p className="text-black text-[24px] font-medium">
                    Google Play
                  </p>
                </div>
              </div>
              <div className="bg-white w-60 h-[100px]  rounded-md flex justify-evenly items-center p-4">
                <i className="fa-brands fa-apple fa-2xl "></i>

                <div className="">
                  <small className="text-black text-opacity-80 text-[13px] font-medium">
                    Download on the
                  </small>
                  <p className="text-black text-[24px] font-medium">
                    App Store
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
