import Logo from "../../assets/footerlogo.png";

const BoardBar = () => {
  return (
    <>
      <div className="">
        <div className="w-[267px] h-[100%] bg-[#0a2f6b] shadow flex flex-col">
          <div className="pl-4 pt-6">
            <img src={Logo} alt="" />
          </div>
          <div className="flex flex-col items-center mt-[10vh]">
            <div className="w-[229px] h-[70px] pl-7 pr-[94px] pt-[23px] pb-[17px] bg-white rounded-md mb-4">
              <button className="text-sky-900 text-[24px] font-medium flex justify-beween items-center">
                <i className="fa-solid fa-house pr-2"></i>
                <a href="/home">HOME</a>
              </button>
            </div>

            <div className="w-[229px] h-[70px] pl-7 pr-[94px] pt-[23px] pb-[17px] rounded-md mb-4 ">
              <button className="text-white text-[24px] font-medium flex justify-beween items-center">
                <i className="fa-solid fa-caret-right pr-2"></i>
                <a href="/home">GALLERY</a>
              </button>
            </div>

            <div className="w-[229px] h-[70px] pl-7 pr-[94px] pt-[23px] pb-[17px]  rounded-md mb-4">
              <button className="text-white text-[24px] font-medium flex justify-beween items-center">
                <i className="fa-brands fa-gratipay pr-2"></i>
                <a href="/home">FAVORITES</a>
              </button>
            </div>

            <div className="w-[229px] h-[70px] pl-7 pr-[94px] pt-[23px] pb-[17px] rounded-md mb-4 ">
              <button className="text-white text-[24px] font-medium flex justify-beween items-center">
                <i className="fa-solid fa-magnifying-glass pr-2"></i>
                <a href="/home">SEARCH</a>
              </button>
            </div>
            <div className="w-[229px] h-[70px] pl-7 pr-[94px] pt-[23px] pb-[17px]  rounded-md mb-4">
              <button className="text-white text-[24px] font-medium flex justify-beween items-center">
                <i className="fa-solid fa-gear pr-2"></i>
                <a href="/home">SETTINGS</a>
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center ">
            <div className="w-[229px] h-[70px] pl-7 pr-[94px] pt-[23px] pb-[17px] rounded-md mb-4">
              <button className="  text-white text-[24px] font-medium flex justify-beween items-center">
                <i className="fa-solid fa-question pr-2"></i>
                <a href="/home">HELP</a>
              </button>
            </div>

            <div className="w-[229px] h-[70px] pl-7 pr-[94px] pt-[23px] pb-[17px] rounded-md mb-4 ">
              <button className="text-white text-[24px] font-medium flex justify-beween items-center w-[200px]">
                <i className="fa-solid fa-arrow-right-from-bracket pr-2"></i>
                <a href="/home">LOG OUT</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoardBar;
