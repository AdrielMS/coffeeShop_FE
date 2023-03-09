import React from "react";
import { Link } from "react-router-dom";
import "../../assets/style/global.css";

const UnNavbar = ({ title }) => {
  return (
    <>
      <header className="navbar m-[30px]">
        <section className="flex items-center">
          <img
            className="object-center"
            // src={require("../../../assets/img/coffee-icon.png")}
            src={require("../../assets/img/coffee-icon.png")}
          />
          <h1 className="text-center font-mono font-bold">Coffee Shop</h1>
        </section>
        <nav>
          <ul className="flex space-x-4">
            <li className="li-navbar hover:font-bold">
              <Link to="/home">
                <a>Home</a>
              </Link>
            </li>
            <li className="li-navbar hover:font-bold">
              <Link to="/products">
                <a>Product</a>
              </Link>
            </li>
            <li className="li-navbar hover:font-bold">
              <a
                className="font16px-reg rubik text-grey eff-nav"
                href="file:///C:/Users/Capt.Rizky%20Aditya/OneDrive/Desktop/Detail%20Product/index.html"
              >
                Your Cart
              </a>
            </li>
            <li className="li-navbar hover:font-bold">
              <a
                className="font16px-reg rubik text-grey eff-nav"
                href="file:///C:/Users/Capt.Rizky%20Aditya/OneDrive/Desktop/history/index.html"
              >
                History
              </a>
            </li>
          </ul>
        </nav>
        <section className="navcta flex">
          <Link to="/login">
            <button className="btn bg-white font-bold px-[30px] py-[10px] mx-[10px]">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="btn bg-primary font-bold rounded-full px-[30px] py-[10px]">
              Sign up
            </button>
          </Link>
        </section>
      </header>
      <hr className=" border-[1px] border-gray" />
    </>
  );
};

export default UnNavbar;
