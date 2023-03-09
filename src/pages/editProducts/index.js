import "../../assets/style/global.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const EditProducts = () => {
  let { id } = useParams();
  const [dataProduct, setDataProduct] = useState([]);
  const [dataPost, setDataPost] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/products/${id}`)
      .then((res) => {
        // console.log(dataProduct.images);
        setDataProduct(res.data.data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <>
      <Header />

      <div className="flex justify-center bg-[url('../../assets/img/background1.png')]">
        <div className="border-[2px] border-gray bg-default p-[50px] rounded-xl my-[30px]">
          <label className="block">Title</label>
          <input
            type="title"
            className="block"
            placeholder={dataProduct.title}
          ></input>
          <label>Price</label>
          <input
            type="price"
            className="block"
            placeholder={dataProduct.price}
          ></input>
          <label className="">Category</label>
          <input
            type="category"
            className="block"
            placeholder={dataProduct.category}
          ></input>
          <label className="">Description</label>
          <input
            type="category"
            className="block"
            placeholder={dataProduct.desc}
          ></input>
          <label className="my-[10px]">image</label>
          <img
            src={`http://localhost:5000/upload/images/${
              dataProduct.images ? dataProduct.images[0].filename : ""
            }`}
            className="rounded-xl h-[250px] w-[250px]"
          />
          <input type="file" className="block my-[10px]"></input>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EditProducts;
