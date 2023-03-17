import "../../assets/style/global.css";
import "../products/index.css";
import DetailProduct from "../productDetail";
import Header from "../../components/header";
import Footer from "../../components/footer";

import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllproducts } from "../../redux/actions/products";

const Products = () => {
  // const [dataProduct, setDataProduct] = useState([]);

  const { data, loading, error } = useSelector((state) => state.products);
  // console.log(products.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllproducts());
  }, []);
  // console.log(error);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:5000/api/v1/products`)
  //     .then((res) => {
  //       // console.log(res.data.data);
  //       setDataProduct(res.data.data);
  //     })
  //     .catch((err) => console.log(err));
  // });

  return (
    <>
      <Header />

      <div className="flex justify-evenly">
        {/* <!-- Promo Form --> */}
        <section className="promo-form p-[10px]">
          <h3 className="text-center text-secondary ">Promo Today</h3>
          <h6 className="text-center ">
            Coupons will be updated every weeks. Check them out!{" "}
          </h6>
          <div className="container-block">
            <div className="card-box rounded mb-5  bg-success">
              <div className="container">
                <img src={require("../../assets/img/promo1.png")} />
                <div className="container-block">
                  <p>Happy's Mother Day!</p>
                  <a> Get one of our favorite menu for free!</a>
                </div>
              </div>
            </div>
            <div className="card-box rounded mb-5  bg-primary">
              <div className="container">
                <img src={require("../../assets/img/promo1.png")} />
                <div className="container-block">
                  <p>Happy's Mother Day!</p>
                  <a> Get one of our favorite menu for free!</a>
                </div>
              </div>
            </div>
            <div className="card-box rounded mb-5  bg-success">
              <div className="container">
                <img src={require("../../assets/img/promo1.png")} />
                <div className="container-block">
                  <p>Happy's Mother Day!</p>
                  <a> Get one of our favorite menu for free!</a>
                </div>
              </div>
            </div>
            <div className="card-box rounded mb-5  bg-danger">
              <div className="container">
                <img src={require("../../assets/img/promo1.png")} />
                <div className="container-block">
                  <p>Happy's Mother Day!</p>
                  <a> Get one of our favorite menu for free!</a>
                </div>
              </div>
            </div>
          </div>
          <button className="btn w-[100%] py-[10px] bg-secondary rounded">
            Apply Button
          </button>
          <p className="">
            <strong>Terms and condition</strong>
          </p>
          <p className=" mb-0 mt-0">1. You only can apply 1 coupon per day</p>
          <p className=" mb-0 mt-0">2. It's only for dine in</p>
          <p className=" mb-0 mt-0">3. Buy 1 get 1 for only new user</p>
          <p className=" mb-0 mt-0">
            4. Should make member card to apply coupon
          </p>
        </section>
        {/* <!-- End of Promo Form --> */}
        {/* <hr className="my-[5px] border-[1px] border-gray h-[100vh]" /> */}
        {/* <!-- Product Form --> */}
        <section className="product-form">
          <div className="container flex justify-center items-center my-[20px]">
            <div className="px-[25px] hover:font-bold ">
              <a href="#">Favourite & Promo</a>
            </div>
            <div>
              <div className="px-[25px] hover:font-bold">
                <a href="#">Coffee</a>
              </div>
            </div>
            <div>
              <div className="px-[25px] hover:font-bold">
                <a href="#">Non Coffee</a>
              </div>
            </div>
            <div>
              <div className="px-[25px] hover:font-bold">
                <a href="#">Foods</a>
              </div>
            </div>
            <div>
              <div className="px-[25px] hover:font-bold">
                <a href="#">Ads On</a>
              </div>
            </div>
          </div>
          <div className="container flex justify-center items-center">
            {/* <div className="card"> */}
            {data.map((item) => {
              return (
                <>
                  <Link to={`/products/${item.id}`}>
                    <div
                      key={item.id}
                      className="card text-center rounded-xl m-[10px] shadow-2xl hover:border-[2px] border-black"
                    >
                      <img
                        className="rounded-full product-images "
                        // src={`http://localhost:5000/upload/images/${item.images[0].filename}`}
                        src={`https://coffeeshop.cyclic.app/upload/images/${item.images[0].filename}`}
                        alt=""
                      />

                      <p>
                        <strong>{item.title}</strong>
                      </p>
                      <p>{item.price}</p>
                    </div>
                  </Link>
                </>
              );
            })}
            {/* </div> */}
          </div>
        </section>
        {/* <!-- End of Product Form --> */}
      </div>
      <Footer />
    </>
  );
};

export default Products;
