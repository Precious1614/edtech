import { createContext, useState } from "react";

const DatabaseContext = createContext();
const studentDatas = [
  {
    username: "Bosede",
    email: "bose@gmail.com",
    password: "1234567",
    cPassword: "1234567",
  },
  {
    username: "Abosede Adeolu",
    email: "bose+1@gmail.com",
    password: "1234567",
    cPassword: "1234567",
  },
  {
    username: "Bose Adeolu",
    email: "bose+2@gmail.com",
    password: "1234567",
    cPassword: "1234567",
  },
];

const DatabaseProvider = ({ children }) => {
  const [studentData, setStudentData] = useState(studentDatas);

  return (
    <DatabaseContext.Provider
      value={{
        studentData,
        setStudentData,
      }}
    >
      {children}
    </DatabaseContext.Provider>
  );
};

export { DatabaseContext, DatabaseProvider };
