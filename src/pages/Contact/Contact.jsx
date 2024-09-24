import { useState } from "react";
import Helmets from "../../components/Helmet/Helmets";
import "./Contact.scss";

const Contact = () => {
  const [input, setInput] = useState([
    {
      name: "",
      email: "",
      pass: "",
    },
  ]);

  return (
    <>
      <div className="contact">
        <Helmets helmet={"Contact"} />
        <h1>Contact</h1>
        <div className="container">
          <div className="user-reg">
            <form action="">
              <input
                type="text"
                placeholder="Name"
                value={input.name}
                onChange={(e) => setInput((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }))}
              />
              <input
                type="text"
                placeholder="Email"
                value={input.email}
                onChange={(e) => setInput((prevState) => ({
                  ...prevState,
                  email: e.target.value
                }))}
              />
              <input
                type="text"
                placeholder="Password"
                value={input.pass}
                onChange={(e) => setInput((prevState) => ({
                  ...prevState,
                  pass: e.target.value
                }))}
              />
              <button>Submit Now</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
