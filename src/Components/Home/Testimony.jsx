import User from "../../assets/user.png";
const Testimony = () => {
  return (
    <>
      <div className="flex justify-center w-full items-center">
        <div className="mt-[10vh] w-[90%]">
          <div className="w-[100%] bg-[#0a2f6b] rounded-md px-10 lg:flex flex-col justify-center items-center pt-[5rem] pb-[5rem]">
            <div className="lg:flex flex-col justify-center items-center ">
              <h2 className="text-white lg:text-[40px] text-[32px] font-bold pb-2">
                How learners like you are achieving their goals
              </h2>
            </div>

            <div className="flex flex-wrap justify-around">
            <div className="lg:w-[573px] w-full h-[344px] bg-white rounded-md border border-black lg:px-[4rem] mt-[5rem] flex p-[2rem]">
              <h4 className="text-justify text-slate-800 md:text-[20px] text-[15px] font-medium ">
                “Thanks to weskillyou, David Tony has armed our workforce.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                naluptates.
              </h4>
              <div className="w-[40rem] flex flex-col justify-end items-center">
                <img src={User} className="w-[4rem]" alt="" />
                <p className="text-slate-800 text-[24px] font-bold text-center">
                  Oye O.
                </p>
              </div>
            </div>
            <div className="lg:w-[573px] w-full h-[344px] bg-white rounded-md border border-black lg:px-[4rem] mt-[5rem] flex p-[2rem]">
              <h4 className="text-justify text-slate-800 md:text-[20px] text-[15px] font-medium ">
                “Thanks to weskillyou, David Tony has armed our workforce.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                naluptates.
              </h4>
              <div className="w-[40rem] flex flex-col justify-end items-center">
                <img src={User} className="w-[4rem]" alt="" />
                <p className="text-slate-800 text-[24px] font-bold text-center">
                  Chukwudi G.
                </p>
              </div>
            </div>
            <div className="lg:w-[573px] w-full h-[344px] bg-white rounded-md border border-black lg:px-[4rem] mt-[5rem] flex p-[2rem]">
              <h4 className="text-justify text-slate-800 md:text-[20px] text-[15px] font-medium ">
                “Thanks to weskillyou, David Tony has armed our workforce.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                naluptates.
              </h4>
              <div className="w-[40rem] flex flex-col justify-end items-center">
                <img src={User} className="w-[4rem]" alt="" />
                <p className="text-slate-800 text-[24px] font-bold text-center">
                  Ali M.
                </p>
              </div>
            </div>
            <div className="lg:w-[573px] w-full h-[344px] bg-white rounded-md border border-black lg:px-[4rem] mt-[5rem] flex p-[2rem]">
              <h4 className="text-justify text-slate-800 md:text-[20px] text-[15px] font-medium ">
                “Thanks to weskillyou, David Tony has armed our workforce.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                naluptates.
              </h4>
              <div className="w-[40rem] flex flex-col justify-end items-center">
                <img src={User} className="w-[4rem]" alt="" />
                <p className="text-slate-800 text-[24px] font-bold text-center">
                  David R.
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimony;
