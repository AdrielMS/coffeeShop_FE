const Footer = () => {
  return (
    <>
      <hr className=" border-[1px] border-gray" />
      <div className="container flex-around pt-4r">
        <section className="mini-profile pl-10">
          <div className="brand">
            <img src={require("../../assets/img/coffee-icon.png")} />
            <h3>Coffee Shop</h3>
          </div>
          <div>
            <h5 className="mini-desc">
              Coffee Shop is a store that sells some good meals, and especially
              coffee. We provide high quality beans
            </h5>
          </div>
          <div className="container">
            <img
              src={require("../../assets/img/facebook-icon.png")}
              className="pr-10 pb-10"
            />
            <img
              src={require("../../assets/img/instagram-icon.png")}
              className="pr-10 pb-10"
            />
            <img
              src={require("../../assets/img/twitter-icon.png")}
              className="pr-10 pb-10"
            />
          </div>
          <div>
            <a>&copy;2020CoffeeShop</a>
          </div>
        </section>
        <section className="mini-detail">
          <div className="container flex-around">
            <div className="card">
              <h4>Product</h4>
              <div className="container">
                <div>
                  <div className="card pt-10 pb-10 pr-10 pl-0">Download</div>
                  <div className="card pt-10 pb-10 pr-10 pl-0">Location</div>
                  <div className="card pt-10 pb-10 pr-10 pl-0">Blog</div>
                  <div className="card pt-10 pb-10 pr-10 pl-0">Pricing </div>
                  <div className="card pt-10 pb-10 pr-10 pl-0">Countries</div>
                </div>
              </div>
            </div>
            <div className="card">
              <h4>Engage</h4>
              <div className="container">
                <div>
                  <div className="card pt-10 pb-10 pr-10 pl-0">
                    Coffee Shop?
                  </div>
                  <div className="card pt-10 pb-10 pr-10 pl-0">FAQ</div>
                  <div className="card pt-10 pb-10 pr-10 pl-0">
                    Terms of Service
                  </div>
                  <div className="card pt-10 pb-10 pr-10 pl-0">About us</div>
                  <div className="card pt-10 pb-10 pr-10 pl-0">
                    Privacy Polcy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer />
      {/* <!-- End of Footer --> */}
    </>
  );
};

export default Footer;
