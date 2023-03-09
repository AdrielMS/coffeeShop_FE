import React from "react";
import { Link } from "react-router-dom";

const UnNavbar = ({ title }) => {
  return (
    <>
      <header className="navbar my-1">
        <section className="flex">
          <img
            className="object-center"
            src={require("../../../assets/img/coffee-icon.png")}
          />
          <h1 className="text-center">{title} | Coffee Shop</h1>
        </section>
        <nav>
          <ul className="flex space-x-4">
            <li className="li-navbar">
              <Link to="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="li-navbar">
              <Link to="/products">
                <a>Product</a>
              </Link>
            </li>
            <li className="li-navbar">
              <a
                className="font16px-reg rubik text-grey eff-nav"
                href="file:///C:/Users/Capt.Rizky%20Aditya/OneDrive/Desktop/Detail%20Product/index.html"
              >
                Your Cart
              </a>
            </li>
            <li className="li-navbar">
              <a
                className="font16px-reg rubik text-grey eff-nav"
                href="file:///C:/Users/Capt.Rizky%20Aditya/OneDrive/Desktop/history/index.html"
              >
                History
              </a>
            </li>
          </ul>
        </nav>
        <section className="navcta">
          <Link to="/login">
            <button className="btn text-[#ffba33] mx-[10px]">Login</button>
          </Link>
          <Link to="#">
            <button className="btn btn-secondary ">Sign in</button>
          </Link>
        </section>
      </header>
    </>
  );
};

export default UnNavbar;
