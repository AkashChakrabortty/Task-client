import React, { createContext, useState } from "react";
export const courseInfo = createContext();
const AuthProvider = ({ children }) => {
    const [reFetch,setReFetch] = useState(false)
    const info = {
        reFetch,
        setReFetch
    }
  return (
    <div>
      <courseInfo.Provider value={info}>{children}</courseInfo.Provider>
    </div>
  );
};

export default AuthProvider;
