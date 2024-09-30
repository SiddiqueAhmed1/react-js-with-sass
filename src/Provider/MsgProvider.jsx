import { useState } from "react"
import MsgContext from "../Context/MsgContext"

const MsgProvider = ({children}) => {
    const [ count , setCount] = useState(0)

  return (
    <>
      <MsgContext.Provider value={{ count, setCount}}>
        {children}
      </MsgContext.Provider>
    </>
  )
}

export default MsgProvider
