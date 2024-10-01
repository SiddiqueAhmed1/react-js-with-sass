import { useContext } from "react"
import Helmets from "../../components/Helmet/Helmets"
import './Service.scss'
import CounterContext from "../../Context/CounterContext"
import MsgContext from "../../Context/MsgContext"

const Service = () => {
  const { count } = useContext(CounterContext)
  const { msg, setMsg } = useContext(MsgContext)

  return (
    <>
    <Helmets helmet={'Service'}/>
      <div className="service">
        <h1>{count}</h1>    
        <input type="text" placeholder="anything write" value={msg} onChange={(e) => setMsg(e.target.value)}/>
      <h1>{msg}</h1>
      </div>
    </>
  )
}

export default Service
