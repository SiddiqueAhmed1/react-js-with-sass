import { useContext, useState } from "react"
import Helmets from "../../components/Helmet/Helmets"
import './Service.scss'
import MsgContext from "../../Context/MsgContext"

const Service = () => {
  const [ name , setName]  = useState('TYPE YOUR NAME ')
  const { count } = useContext(MsgContext)

  return (
    <>
    <Helmets helmet={'Service'}/>
      <div className="service">
        <h1>{count}</h1>    
        <input type="text" placeholder="anything write" onChange={(e) => setName(e.target.value)}/>
      <h1>{name}</h1>
      </div>
    </>
  )
}

export default Service
