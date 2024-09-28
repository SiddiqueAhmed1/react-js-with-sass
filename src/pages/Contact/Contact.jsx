import { useEffect, useState } from "react";
import Helmets from "../../components/Helmet/Helmets";
import "./Contact.scss";

const Contact = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    pass: "",
<<<<<<< HEAD
    food: "",
    gender: "",
=======
>>>>>>> 1b76af5e60ca43a39348df5abdad7e1f2c4b1ce9
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
                name="name"
                value={input.name}
<<<<<<< HEAD
=======
                name="name"
>>>>>>> 1b76af5e60ca43a39348df5abdad7e1f2c4b1ce9
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
              <select name="food" value={input.food} onChange={handleInput}>
                <option value="">--Select</option>
                <option value="Mango">Mango</option>
                <option value="Apple">Apple</option>
                <option value="Lemon">Lemon</option>
              </select>
              <div>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={handleInput}
                  />
                  Male
                </label>{" "}
                &nbsp;
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={handleInput}
                  />
                  Female
                </label>
              </div>

              <button>Submit Now</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
