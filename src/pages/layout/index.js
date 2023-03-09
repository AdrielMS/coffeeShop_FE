import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <navbar class="container navbar">
        <div class="brand">
          <img src={require("../../assets/img/coffee-icon.png")} />
          <h3>Coffee Shop</h3>
        </div>
        <div>
          <Link to="/">
            <a>Home</a>
          </Link>
        </div>
        <div>
          <Link to="/products">
            <a>Product</a>
          </Link>
        </div>
        <div>
          <a>Your Cart</a>
        </div>
        <div>
          <a>History</a>
        </div>
        <div>
          <input class="form-search rounded-full" />
        </div>
        <div>
          <img src={require("../../assets/img/chat-icon.png")} />
        </div>
        <div>
          <img
            class="rounded-full"
            src={require("../../assets/img/profile-icon.png")}
          />
        </div>
      </navbar>

      <Outlet />
    </>
  );
};

export default Layout;
