import { useState } from "react";
import Helmets from "../../components/Helmet/Helmets";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import LoadingBar from "react-top-loading-bar";
import "./Contact.scss";

const Contact = () => {
  const [progress, setProgress] = useState(100);

  const [input, setInput] = useState({
    name: "",
    email: "",
    pass: "",
    food: "",
    gender: "",
  });

  const handleInput = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleForm = (e) => {
    e.preventDefault();

    if (
      !input.name ||
      !input.email ||
      !input.food ||
      !input.gender ||
      !input.pass
    ) {
      toast.error("All fields are required");
    } else {
      Swal.fire({
        title: "Data submitted succesfully",
        text: "Do you want to continue",
        icon: "success",
        confirmButtonText: "Ok",
        showCancelButton: false,
      });
    }
  };

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        style={{padding : '3px 0'}}
      />
      <div className="contact">
        <Helmets helmet={"Contact"} />
        <h1>Contact</h1>
        <div className="container">
          <div className="user-reg">
            <form onSubmit={handleForm}>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={input.name}
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
