import "../../assets/style/global.css";
import "../register/index.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    username: "",
    password: "",
    Phone: "",
  });
  const [validate, setValidate] = useState({ error: false, message: "" });
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    // console.log(registerForm);

    axios({
      url: "http://localhost:5000/api/v1/auth/register",
      method: "POST",
      data: registerForm,
    })
      .then((res) => {
        console.log(res.data.data);
        navigate("/home");
      })
      .catch((err) => {
        setValidate({ error: true, message: err.message });
      });
  };
  return (
    <>
      <form onSubmit={handleRegister} className="flex">
        <section className="auth-bg mr-[10px]">
          {/* <img src={require("../../assets/img/background.png")} width="100%" /> */}
        </section>
        <section className="auth-form mr-[10px]">
          <nav className="container navbar">
            <div className="brand">
              <img
                src={require("../../assets/img/coffee-icon.png")}
                width="20"
                height="20"
              />
              <h3>Coffee Shop</h3>
            </div>
            <div className="text-secondary">
              <button className="btn btn-primary rounded">
                <h3>Sign Up</h3>
              </button>
            </div>
          </nav>
          <div>
            <h3 className="text-center text-secondary">Sign Up</h3>
            {validate.error && (
              <div className="alert alert-error shadow-lg my-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{validate.message}</span>
                </div>
              </div>
            )}
            <div className="mb-5">
              <label className="form-label" htmlFor="email-input">
                Username
              </label>
              <input
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    username: e.target.value,
                  })
                }
                className="form-input rounded"
                type="text"
                placeholder="Example: Adriel46"
              />
            </div>
            <div className="mb-5">
              <label className="form-label" htmlFor="password-input">
                Password
              </label>
              <input
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    password: e.target.value,
                  })
                }
                className="form-input rounded"
                type="password"
                placeholder="Example: ****"
              />
            </div>
            <div className="mb-5">
              <label className="form-label" htmlFor="phone-input">
                Phone Number
              </label>
              <input
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    phone: e.target.value,
                  })
                }
                className="form-input rounded"
                type="Phone"
                placeholder="Example: 082100000000"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary rounded btn-block mb-5"
            >
              Sign Up
            </button>
            <button className="btn rounded btn-block mb-5">
              <img
                src={require("../../assets/img/google-icon.png")}
                width="20"
                height="20"
              />
              <a className="text-center">Sign up with Google</a>
            </button>
            <div>
              <hr width="100%" color="#C4C4C4" />
              <div className="text-account">Already have an account?</div>
            </div>
            <button className="btn btn-secondary rounded btn-block">
              Login Here
            </button>
          </div>
        </section>
      </form>
    </>
  );
};

export default Register;
