import "../home/index.css";
import "../../assets/style/global.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

const Home = () => {
  return (
    <>
      <Header />
      {/* banner content */}
      {/* Search bar */}
      <div className="search-container">
        <div className="search-bar">
          <img
            className="icn18"
            src={require("../../assets/img/search-icon.png")}
          />
          <input
            className="sb-fill font16px-med text-grey rubik"
            type="text"
            placeholder="Search.."
          />
        </div>
      </div>
      {/* end of search bar */}
      <section className="banner">
        <h1 className="text-[50px] text-white text-Rubik h1bann">
          Start Your Day with Coffee and Good Meals
        </h1>
        <p className="text-[20px] text-white text-Rubik pbann">
          We provide high quality beans, good taste, and healthy meals made by
          love just for you. Start your day with us for a bigger smile!
        </p>
        <a href="#">
          <button className="btn bg-primary font-bold text-secondary eff-btn btnbann rounded-full my-[20px]">
            Get Started
          </button>
        </a>
      </section>
      <div>
        <div className="flex flex-warp bg-[#FFFFFF] justify-between mx-[200px] my-[50px] rounded shadow-2xl">
          <div className="flex p-[30px] mx-[20px]">
            <img src={require("../../assets/img/user.png")} />
            <div className="m-[5px]">
              <h1 className="font-bold">90+</h1>
              <h2>Staff</h2>
            </div>
          </div>
          <div className="flex p-[30px] mx-[20px]">
            <img src={require("../../assets/img/location.png")} />
            <div className="m-[5px]">
              <h1 className="font-bold">30+</h1>
              <h2>Store</h2>
            </div>
          </div>
          <div className="flex p-[30px] mx-[20px]">
            <img src={require("../../assets/img/Server.png")} />
            <div className="m-[5px]">
              <h1 className="font-bold">800+</h1>
              <h2>Costumer</h2>
            </div>
          </div>
        </div>
      </div>
      {/* end of banner content */}
      {/* 2nd banner content */}
      <div>
        <div className="flex justify-center">
          <img
            className="mx-[10px]"
            src={require("../../assets/img/home1.png")}
          />
          <div className="mx-[10px]">
            <h1 className="font-bold text-[35px] w-[450px]">
              We Provide Good Coffee and Healthy Meals
            </h1>
            <h2 className="w-[450px] py-[10px]">
              You can explore the menu that we provide with fun and have their
              own taste and make your day better.
            </h2>
            <ul className="list-disc">
              <li className="my-[10px]">High quality beans</li>
              <li className="my-[10px]">
                Healthy meals, you can request the ingredients
              </li>
              <li className="my-[10px]">
                Chat with our staff to get better experience for ordering
              </li>
              <li className="my-[10px]">
                Free member card with a minimum purchase of IDR 200.000.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* end of 2nd banner content */}
      {/* 3rd banner content */}
      <div>
        <div className="text-center">
          <h1 className="text-[35px] font-bold my-[10px]">
            Here's People Favortie
          </h1>
          <h2 className="my-[10px]">
            Let’s choose and have a bit taste of poeple’s favorite. It might be
            yours too!
          </h2>
        </div>
        <div className="flex justify-center">
          <div className="mx-[10px]">
            <div className="border border-gray p-[50px]">
              <div className="flex justify-center py-[50px]">
                <img
                  className="rounded-full"
                  src={require("../../assets/img/product4.png")}
                />
              </div>
              <h1 className="my-[20px] text-center font-bold">
                Hazzelnut Latte
              </h1>
              <ul className="list-disc">
                <li className="my-[20px]">HazelnutSyrup</li>
                <li className="my-[20px]">Wanilla Whipped Cream</li>
                <li className="my-[20px]">Ice / Hot</li>
                <li className="my-[20px]">Sliced Banana on Top</li>
              </ul>
              <div className="text-center py-[20px]">
                <h1>IDR 25.000</h1>
                <button>Order Now</button>
              </div>
            </div>
          </div>
          <div className="mx-[10px]">
            <div className="border border-gray p-[50px]">
              <div className="flex justify-center py-[50px]">
                <img
                  className="rounded-full"
                  src={require("../../assets/img/product4.png")}
                />
              </div>
              <h1 className="my-[20px] text-center font-bold">
                Hazzelnut Latte
              </h1>
              <ul className="list-disc">
                <li className="my-[20px]">HazelnutSyrup</li>
                <li className="my-[20px]">Wanilla Whipped Cream</li>
                <li className="my-[20px]">Ice / Hot</li>
                <li className="my-[20px]">Sliced Banana on Top</li>
              </ul>
              <div className="text-center py-[20px]">
                <h1>IDR 25.000</h1>
                <button>Order Now</button>
              </div>
            </div>
          </div>
          <div className="mx-[10px]">
            <div className="border border-gray p-[50px]">
              <div className="flex justify-center py-[50px]">
                <img
                  className="rounded-full"
                  src={require("../../assets/img/product4.png")}
                />
              </div>
              <h1 className="my-[20px] text-center font-bold">
                Hazzelnut Latte
              </h1>
              <ul className="list-disc">
                <li className="my-[20px]">HazelnutSyrup</li>
                <li className="my-[20px]">Wanilla Whipped Cream</li>
                <li className="my-[20px]">Ice / Hot</li>
                <li className="my-[20px]">Sliced Banana on Top</li>
              </ul>
              <div className="text-center py-[20px]">
                <h1>IDR 25.000</h1>
                <button>Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
