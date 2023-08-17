import GoogleIcon from "../../assets/googleicon.png";
import FacebookIcon from "../../assets/facebookicon.png";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DatabaseContext } from "../../context/DatabaseContext";

const Signin = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { studentData } = useContext(DatabaseContext);

  const handleLogin = (e) => {
    e.preventDefault();

    if (userName.trim() === "") {
      alert("Please enter your email");
      return;
    }

    const userData = studentData;

    const userExist = userData.find((data) => data.username === userName);

    if (!userExist) {
      alert("User not found!");
      return;
    }

    if (password.trim() === "") {
      alert("Please enter your password");
      return;
    }

    const correctPassword = userData.find((data) => data.password === password);

    if (!correctPassword) {
      alert("Incorrect password");
      return;
    }

    alert("Login successful");
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center mt-8 mb-10">
      <div className="w-[70%] mt-10 flex flex-col justify-center items-center py-20 bg-white shadow">
        <h2 className="text-center text-slate-800 text-[32px] font-medium tracking-wide">
          Welcome back!
        </h2>
        <h2 className="text-center text-slate-800 text-[32px] font-medium tracking-wide">
          Sign in to continue!
        </h2>
        <div>
          <div className="w-[45rem] h-12 bg-white rounded-md border border-black border-opacity-50 flex justify-center items-center mt-8 py-8">
            <img src={GoogleIcon} alt="" />
            <p className="text-slate-800 text-[20px] font-medium tracking-wide pl-6">
              Log in with Google
            </p>
          </div>
          <div className="w-[45rem] h-12 bg-white rounded-md border border-black border-opacity-50 flex justify-center items-center mt-8 py-8 mb-2">
            <img src={FacebookIcon} alt="" />
            <p className="text-slate-800 text-[20px] font-medium tracking-wide pl-6">
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
        <form>
          <div className="flex flex-col">
            <label className="text-slate-800 text-[20px] font-medium tracking-wide">
              User Name
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-[45rem] h-14 bg-white rounded-md border border-black border-opacity-50 p-4"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mt-6">
            <label className="text-slate-800 text-[20px] font-medium tracking-wide">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-[45rem] h-14 bg-white rounded-md border border-black border-opacity-50 p-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="text-sky-900 text-[20px] font-medium mt-4">
            Forgot Password?
          </div>
          <div className="w-[731px] h-[70px] bg-[#0a2f6b] rounded-md flex justify-center items-center mt-[3rem]">
            <div
              className="text-white text-[24px] font-semibold"
              onClick={handleLogin}
            >
              Log in
            </div>
          </div>
        </form>
        <div className="mt-6">
          <span className="text-slate-800 text-[24px] font-medium tracking-wide">
            Don’t have an account?
          </span>
          <span className="text-black text-opacity-20 text-[24px] font-medium tracking-wide"></span>
          <span className="text-[#0a2f6b] text-[24px] font-medium tracking-wide pl-2">
           <a href="/registerform"> Sign up</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signin;
