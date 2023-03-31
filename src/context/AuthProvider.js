import React, { createContext, useState } from "react";
export const courseInfo = createContext();
const AuthProvider = ({ children }) => {
    const [reFetch,setReFetch] = useState(false);
    const [isFilter,setIsFilter] = useState(false)
  
    const [items,setItems] = useState('')
    const info = {
        reFetch,
        setReFetch,
        isFilter,
        setIsFilter,
        items,
        setItems
    }
  return (
    <div>
      <courseInfo.Provider value={info}>{children}</courseInfo.Provider>
    </div>
  );
};

export default AuthProvider;
