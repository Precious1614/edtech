import { useContext, useState } from "react";
import { DatabaseContext } from "../../context/DatabaseContext";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { studentData } = useContext(DatabaseContext);

  const handleRegister = (e) => {
    e.preventDefault();

    if (userName.trim() === "") {
      alert("Please enter your name");
      return;
    }

    if (email.trim() === "") {
      alert("Please enter your email");
      return;
    }

    if (password.trim() === "") {
      alert("Please enter a password");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const userExists = studentData.find((data) => data.email === email);
    if (userExists) {
      alert("This user already exists");
      return;
    }

    const newUser = {
      username: userName,
      email,
      password,
    };

    const updatedStudentData = [...studentData, newUser];
    localStorage.setItem("studentData", JSON.stringify(updatedStudentData));

    alert("Signup successful");
    console.log(updatedStudentData);
    navigate("/signin");
  };

  return (
    <div className="flex items-center justify-center mt-8 mb-10">
      <div className="w-[70%] mt-10 flex flex-col justify-center items-center py-20 bg-white shadow">
        <h2 className="text-center text-slate-800 text-[32px] font-medium tracking-wide">
          Enter your details
        </h2>

        <form>
          <div className="flex flex-col">
            <label className="text-slate-800 text-[20px] font-medium tracking-wide">
              User Name
            </label>
            <input
              type="text"
              placeholder="Create a user name"
              className="w-[45rem] h-14 bg-white rounded-md border border-black border-opacity-50 p-4 mt-2"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mt-6">
            <label className="text-slate-800 text-[20px] font-medium tracking-wide">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-[45rem] h-14 bg-white rounded-md border border-black border-opacity-50 p-4 mt-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mt-6">
            <label className="text-slate-800 text-[20px] font-medium tracking-wide">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-[45rem] h-14 bg-white rounded-md border border-black border-opacity-50 p-4 mt-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mt-6">
            <label className="text-slate-800 text-[20px] font-medium tracking-wide">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-[45rem] h-14 bg-white rounded-md border border-black border-opacity-50 p-4 mt-2"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="w-[731px] h-[70px] bg-[#0a2f6b] rounded-md flex justify-center items-center mt-[3rem]">
            <button
              className="text-white text-[24px] font-semibold"
              onClick={handleRegister}
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
