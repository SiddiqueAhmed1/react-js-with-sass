import { useContext } from "react";
import Helmets from "../../components/Helmet/Helmets";
import "./About.scss";
import CounterContext from "../../Context/CounterContext";
import MsgContext from "../../Context/MsgContext";

const About = () => {
  const { count, setCount } = useContext(CounterContext);
  const { msg, setMsg } = useContext(MsgContext)

  return (
    <>
      <Helmets helmet={"About"} />
      <div className="about">
        <h2>{msg}</h2>
        <h1>{count}</h1>
        <button onClick={() => setCount((prevState) => prevState + 1)}>
          {" "}
          ++{" "}
        </button>
        &nbsp;
        <button onClick={() => setCount((prevState) => prevState - 1)}>
          {" "}
          --{" "}
        </button><br />
        <input type="text" placeholder="type anything" value={msg} onChange={(e) => setMsg(e.target.value)}
        />

        <hr />
        <hr />
        <h1>{msg}</h1>
      </div>
    </>
  );
};

export default About;
