import "../../assets/style/global.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProducts = ({ img, ...rest }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const onSubmit = (e) => {
    // console.log(title);
    // console.log(price);
    // console.log(category);
    // console.log(desc);
    // console.log(image);

    e.preventDefault();

    const data = new FormData(e.target);
    data.append("title", title);
    data.append("img", image);
    data.append("category", category);
    data.append("price", price);
    data.append("desc", desc);
    console.log(image);

    axios
      .post(
        `http://localhost:5000/api/v1/products/`,
        // `https://coffeeshop.cyclic.app/api/v1/products/`,(Kalau pake Cyclic harus pake AWS SDK di backendnya)
        data,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log("post success:", res);
        navigate("/productsAdmin");
      })
      .catch((err) => console.log("err:", err));
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  // const loadImage = (e) => {
  //   const image = e.target.files[0];
  //   setFile(image);
  //   setPreview(URL.createObjectURL(image));
  // };

  // const saveProduct = () => {
  //   e.preventDefault();
  //   const formData = new formData();
  //   formData.append("File", file);
  //   formData.append("title", title);
  //   formData.append("price", price);
  //   formData.append("category", category);
  //   formData.append("desc", desc);
  //   useEffect(() => {
  //     axios
  //       .post(`http://localhost:5000/api/v1/products/`, formData, {
  //         headers: {
  //           "content-type": "multipart/form-data",
  //         },
  //       })
  //       .then(navigate("/"))
  //       .catch((err) => console.log(err));
  //   });
  // };

  return (
    <>
      <Header />
      <form onSubmit={onSubmit}>
        <div className="flex justify-center bg-[url('../../assets/img/background1.png')]">
          <div className="border-[2px] border-gray bg-default p-[50px] rounded-xl my-[50px]">
            <label className="block">Title</label>
            <input
              type="title"
              className="block"
              // value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <label>Price</label>
            <input
              type="price"
              className="block"
              // value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></input>
            <label>Category</label>
            <input
              type="category"
              className="block"
              // value={category}
              onChange={(e) => setCategory(e.target.value)}
            ></input>
            <label className="">Description</label>
            <input
              type="category"
              className="block"
              // value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></input>
            <label>image</label>
            {img && <img className="preview" src={img} alt="preview" />}
            <input
              type="file"
              className="block"
              // {...rest}
              onChange={(e) => onImageUpload(e)}
              img={imagePreview}
            />
            <button
              type="submit"
              className="btn bg-primary p-[10px] my-[10px] rounded-xl"
            >
              Add
            </button>
          </div>
        </div>
      </form>

      <Footer />
    </>
  );
};

export default AddProducts;
