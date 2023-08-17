import Homepage from "./Page/Homepage";
import RegisterForm from "./Page/Register/RegisterForm";
import Signin from "./Page/Register/Signin";
import Signup from "./Page/Register/Signup";
import { Route, Routes } from "react-router-dom";
import { DatabaseProvider } from "./context/DatabaseContext";
import Home from "./Page/Dashboard/Home"; 


function App() {
  return (
    <>
      {/* <Homepage /> */}
      {/* <Signin /> */}
      {/* <Signup /> */}
     

      <DatabaseProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/signin"
            element={
              <DatabaseProvider>
                <Signin />
              </DatabaseProvider>
            }
          />
          <Route
            path="/signup"
            element={
              <DatabaseProvider>
                <Signup />
              </DatabaseProvider>
            }
          />
          <Route
            path="registerform"
            element={
              <DatabaseProvider>
                <RegisterForm />
              </DatabaseProvider>
            }
          />

          <Route path="/home" element={<Home />} />
        </Routes>
      </DatabaseProvider>
    </>
  );
}

export default App;
