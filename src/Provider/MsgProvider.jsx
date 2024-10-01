import { useState } from "react";
import MsgContext from "../Context/MsgContext";

const MsgProvider = ({ children }) => {
  const [msg, setMsg] = useState('');

  return (
    <>
      <MsgContext.Provider value={{ msg, setMsg }}>
        {children}
      </MsgContext.Provider>
    </>
  );
};

export default MsgProvider;
