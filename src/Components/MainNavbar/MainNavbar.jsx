import "./mainnavbar.css";
import { NavLink } from "react-router-dom";
import { RiShoppingCart2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import AddToCartSideBar from "../AddToCartSideBar/AddToCartSideBar";
import { useContext, useState } from "react";
import { ArrivalContext } from "../Context/NewArrivalsContext";
import { Link } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useAuth0 } from "@auth0/auth0-react";

const MainNavbar = () => {
  const { getTotalAmount, gettotalcartitem } = useContext(ArrivalContext);
  const [isactivecart, setisactivecart] = useState(false);
  const [isactivehambarger, setisactivehambarger] = useState(false);
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  const handlesidebar = () => {
    setisactivecart((prev) => !prev);
  };

  const handlesidebarremove = () => {
    setisactivecart((prev) => !prev);
  };

  const hambargarclick = () => {
    setisactivehambarger((prev) => !prev);
  };


  const handleNavLinkClick = () => {
    setisactivehambarger(false); // Close the menu when a nav link is clicked
  };

  return (
    <>
      <div className="mainnavbar">

        {/* hambargar after Responsive */}
        <div className="hambargar">{!isactivehambarger ? (<RiMenu2Fill onClick={hambargarclick} />) : (<RxCross2 onClick={hambargarclick} />)}</div>

        <div className={`responsivemenubar ${isactivehambarger ? "isactivehambargar" : ""}`}>

          <div className="after-responsive-logins flex items-center gap-2 font-semibold text-gray-500">
            {isAuthenticated ? (<Link onClick={handleNavLinkClick} to="/Profile"><img className="profileicon" src={user.picture} alt={user.name} /></Link>) : (<CgProfile cursor={"pointer"} />)}
            {isAuthenticated ? (<h2 className="text-[14px] font-medium">{user.name}</h2>) : (<button onClick={() => loginWithRedirect()}>Log In</button>)}
          </div>

          <div className="resmenu">
            <NavLink onClick={handleNavLinkClick} className={(e) => { return e.isActive ? "hambarhover" : ""; }} to="/"><li>Home</li></NavLink>
            <NavLink onClick={handleNavLinkClick} className={(e) => { return e.isActive ? "hambarhover" : ""; }} to="/NewArrivalsProductsPage"><li>New Arrivals</li></NavLink>
            <NavLink onClick={handleNavLinkClick} className={(e) => { return e.isActive ? "hambarhover" : ""; }} to="/BestSellingProductsPage"><li>Best Selling</li></NavLink>
            <NavLink onClick={handleNavLinkClick} className={(e) => { return e.isActive ? "hambarhover" : ""; }} to="/AboutUsPage"><li>About Us</li></NavLink>
            <NavLink onClick={handleNavLinkClick} className={(e) => { return e.isActive ? "hambarhover" : ""; }} to="/ContactUsPage"><li>Contact Us</li></NavLink>
          </div>

        </div>

        <div className="logo">
          <NavLink to="/">
            <img
              className="img"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e0a17e200761549.66682d0279f5c.png"
              alt=""
            />
          </NavLink>
        </div>
        <div className="menucontent flex items-center">
          <div className="menu">
            <div className="menuname">
              <NavLink
                className={(e) => {
                  return e.isActive ? "hovereffect" : "";
                }}
                to="/"
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                className={(e) => {
                  return e.isActive ? "hovereffect" : "";
                }}
                to="/NewArrivalsProductsPage"
              >
                <li>New Arrivals</li>
              </NavLink>
              <NavLink
                className={(e) => {
                  return e.isActive ? "hovereffect" : "";
                }}
                to="/BestSellingProductsPage"
              >
                <li>Best Selling</li>
              </NavLink>
              <NavLink
                className={(e) => {
                  return e.isActive ? "hovereffect" : "";
                }}
                to="/AboutUsPage"
              >
                <li>About Us</li>
              </NavLink>
              <NavLink
                className={(e) => {
                  return e.isActive ? "hovereffect" : "";
                }}
                to="/ContactUsPage"
              >
                <li>Contact Us</li>
              </NavLink>
            </div>
          </div>

          <div className="profileicon">
            <div className="icons">
              <div className="shop">
                <RiShoppingCart2Line
                  cursor={"pointer"}
                  onClick={handlesidebar}
                />
                <div className="itemcounts absolute bg-red-500 text-white rounded-full w-[14px] h-[14px] flex justify-center items-center text-[13px] p-[10px] right-[20%]">
                  {gettotalcartitem()}
                </div>
              </div>

              <div className="logins flex items-center gap-2 font-semibold text-gray-500">
                {isAuthenticated ? (
                  <Link to="/Profile">
                    <img
                      className="profileicon"
                      src={user.picture}
                      alt={user.name}
                    />
                  </Link>
                ) : (
                  <CgProfile cursor={"pointer"} />
                )}
                {isAuthenticated ? (
                  <h2 className="userName text-[14px] font-medium">{user.name}</h2>
                ) : (
                  <button onClick={() => loginWithRedirect()}>Log In</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`addtocartside ${isactivecart ? "activecartside" : ""}`}>
        <div className="shoppingcart">
          <h1>Shopping Cart</h1>
          <button onClick={handlesidebarremove}>Close Cart</button>
        </div>

        <AddToCartSideBar />

        <div className="bottomcart">
          <Link to="/CartItemPage">
            <button>Checkout Total Amount {getTotalAmount()}</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainNavbar;
