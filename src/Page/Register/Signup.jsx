import GoogleIcon from "../../assets/googleicon.png";
import FacebookIcon from "../../assets/facebookicon.png";

const Signup = () => {
  return (
    <div className="flex items-center justify-center mt-8 mb-10">
      <div className="w-[70%] mt-10 flex flex-col justify-center items-center py-20 bg-white shadow">
        <h2 className="text-center text-slate-800 text-[32px] font-medium tracking-wide">
          Welcome!
        </h2>
        <h2 className="text-center text-slate-800 text-[32px] font-medium tracking-wide">
          Sign up to continue!
        </h2>
        <div>
          <div className="w-[45rem] h-12 bg-white rounded-md border border-black border-opacity-50 flex justify-center items-center mt-8 py-8">
            <img src={GoogleIcon} alt="" />
            <p className=" text-slate-800 text-[20px] font-medium tracking-wide pl-6">
              Log in with Google
            </p>
          </div>
          <div className="w-[45rem] h-12 bg-white rounded-md border border-black border-opacity-50 flex justify-center items-center mt-8 py-8 mb-2">
            <img src={FacebookIcon} alt="" />
            <p className=" text-slate-800 text-[20px] font-medium tracking-wide pl-6">
              Log in with Facebook
            </p>
          </div>
          <div className="flex items-center justify-center">
            <hr className="w-[45%] mt-2" />
            <p className="text-center text-gray-600 text-[32px] font-medium m-4">
              or
            </p>
            <hr className="w-[45%] mt-2" />
          </div>
        </div>
        <form action="">
          <div className="flex flex-col">
            <button className="w-[45rem] h-14 bg-white rounded-md border  border-black border-opacity-50 p-4 text-slate-800 text-[20px] font-medium tracking-wide">
              Sign up with email
            </button>
          </div>

          <div className="text-center mt-2">
            <span className="text-gray-700 text-[16px] font-medium leading-snug tracking-wide">
              By signing up you are agreed with our friendly
            </span>
            <span className="text-sky-900 text-[16px] font-medium leading-snug tracking-wide">
              terms and condition.
            </span>
          </div>
          <div className="w-[731px] h-[70px] bg-[#0a2f6b] rounded-md flex justify-center items-center mt-[3rem] ">
            <button className="text-white  text-[24px] font-semibold">
              Log in
            </button>
          </div>
        </form>
        <div className="mt-6">
          <span className="text-slate-800 text-[24px] font-medium tracking-wide">
            Already have an account?
          </span>
          <span className="text-black text-opacity-20 text-[24px] font-medium tracking-wide"></span>
          <span className="text-[#0a2f6b] text-[24px] font-medium tracking-wide pl-2">
            Sign in
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
