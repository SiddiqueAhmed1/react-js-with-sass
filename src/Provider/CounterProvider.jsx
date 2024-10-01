import { useState } from "react"
import CounterContext from "../Context/CounterContext"

const CounterProvider = ({children}) => {
    const [ count , setCount] = useState(0)

  return (
    <>
      <CounterContext.Provider value={{ count, setCount}}>
        {children}
      </CounterContext.Provider>
    </>
  )
}

export default CounterProvider
