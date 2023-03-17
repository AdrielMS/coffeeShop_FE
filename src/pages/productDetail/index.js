import "../../assets/style/global.css";
import "../productDetail/index.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [dataProduct, setDataProduct] = useState([]);
  useEffect(() => {
    axios
      // .get(`http://localhost:5000/api/v1/products/${id}`)
      .get(`https://coffeeshop.cyclic.app/api/v1/products/${id}`)
      .then((res) => {
        // console.log(dataProduct.images);
        setDataProduct(res.data.data);
      })
      .catch((err) => console.log(err));
  });

  // const [dataImages, setDataImages] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:5000/api/v1/products`)
  //     .then((res) => {
  //       // console.log(dataProduct.images);
  //       setDataProduct(res.data.data);
  //     })
  //     .catch((err) => console.log(err));
  // });

  return (
    <>
      <Header />
      <div className="detail-form">
        <div className="flex justify-evenly items-center bg-default">
          <div className="product text-center mb-5">
            <p className="text-left text-secondary my-[10px]">
              Favorite & Promo <strong>{dataProduct.title}</strong>
            </p>

            <img
              src={`http://localhost:5000/upload/images/${
                dataProduct.images ? dataProduct.images[0].filename : ""
              }`}
              className="rounded-full h-[250px] w-[250px] justify-center"
            />

            <h1 className="text-[50px] font-bold">
              <a>{dataProduct.title}</a>
            </h1>
            <a className="text-[20px] ">Rp. {dataProduct.price}</a>
            <button className="btn bg-secondary block px-[90px] py-[10px] mb-5 rounded-xl">
              Add to Cart
            </button>
            <button className="btn bg-primary block  px-[92px] py-[10px] rounded-xl">
              Ask a Staff
            </button>
          </div>
          <div className="product-detail">
            <div className="container mt-50">
              <div className="card rounded-xl bg-white">
                <div className="col text-secondary">
                  <p className="text-secondary py-[10px]">
                    Delivery only on <strong>Monday to friday</strong> at 1 - 7
                    pm
                  </p>
                  <hr />
                  <p className="py-[10px]">{dataProduct.desc}</p>
                  <h4 className="text-center">Choose your size</h4>
                  <div className="container justify-evenly">
                    <div className="card ">
                      <div className="col bg-primary rounded-full py-[20px] px-[25px] font-bold">
                        <a>R</a>
                      </div>
                    </div>
                    <div className="card ">
                      <div className="col bg-primary rounded-full py-[20px] px-[25px] font-bold">
                        <a href="#">L</a>
                      </div>
                    </div>
                    <div className="card ">
                      <div className="col bg-primary rounded-full py-[20px] px-[20px] font-bold">
                        <a>XL</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container flex justify-center my-[10px]">
              <strong>Delivery Method</strong>
            </div>
            <div className="container justify-evenly">
              <div className="card rounded-xl text-center bg-secondary text-white">
                Dine in
              </div>
              <div className="card rounded-xl text-center bg-white">
                Door Delivery
              </div>
              <div className="card rounded-xl text-center bg-white">
                Pick Up
              </div>
            </div>
            <div className="container my-[30px] flex justify-evenly text-center">
              <label className="items-center">Set Time</label>
              <input
                className=" rounded"
                id="time-input"
                type="time"
                placeholder="Enter the time you’ll arrived"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="block bg-default">
        <div className="card rounded-xl bg-white"></div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
