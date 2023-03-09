import { useEffect, useState } from "react";
import Navbar from "./loginNavbar";
import UnNavbar from "./unLoginNavbar";

// const pageTitle = (title) => {
//   if (typeof title == "undefined") {
//     return "Coffee Shop";
//   }
//   return `${title} - Coffee Shop`;
// };

const Header = ({ headerShown, title }) => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem(`@userLogin`)) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <>
      <nav>{isLogin ? <Navbar setIsLogin={setIsLogin} /> : <UnNavbar />}</nav>
      {/* {headerShown && <Header/>} */}
    </>
  );
};

export default Header;
