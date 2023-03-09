import "../home/index.css";
import "../../assets/style/global.css";
import Header from "../../components/header";

const HomeAdmin = () => {
  return (
    <>
      <Header />
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

      <section className="banner">
        <h1 className="text-[50px] text-white text-Rubik h1bann">
          Start Your Day with Coffee and Good Meals
        </h1>
        <p className="text-[20px] text-white text-Rubik pbann">
          We provide high quality beans, good taste, and healthy meals made by
          love just for you. Start your day with us for a bigger smile!
        </p>
        <a href="#">
          <button className="btn bg-primary eff-btn btnbann rounded-full">
            Get Started
          </button>
        </a>
      </section>
    </>
  );
};

export default HomeAdmin;
