import { useState } from "react";
import Helmets from "../../components/Helmet/Helmets";
import "./Contact.scss";

const Contact = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const handleInput = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

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
                name="name"
                onChange={handleInput}
              />
              <input
                type="text"
                placeholder="Email"
                value={input.email}
                name="email"
                onChange={handleInput}
              />
              <input
                type="text"
                placeholder="Password"
                value={input.pass}
                name="pass"
                onChange={handleInput}
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
