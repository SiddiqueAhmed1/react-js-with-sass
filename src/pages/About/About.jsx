import { useContext } from "react"
import Helmets from "../../components/Helmet/Helmets"
import './About.scss'
import MsgContext from "../../Context/MsgContext"

const About = () => {
  const { count , setCount} = useContext(MsgContext)



  return (
    <>
    <Helmets helmet={'About'}/>
      <div className="about">
        <h1>{count}</h1>
        <button onClick={() => setCount((prevState) => ( prevState + 1))}> ++ </button>&nbsp;
        <button onClick={() => setCount((prevState) => ( prevState - 1))}> -- </button>
      </div>
    </>
  )
}

export default About
