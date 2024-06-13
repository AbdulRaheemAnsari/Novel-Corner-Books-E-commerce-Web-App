import { NavLink } from "react-router-dom";
import './bookbazarcart.css'
import { TiStarFullOutline } from "react-icons/ti";
// import { LuHeart } from "react-icons/lu";
// import { CiShoppingCart } from "react-icons/ci";
import { useContext } from "react";
import { ArrivalContext } from "../Context/NewArrivalsContext";
import { Link } from "react-router-dom";

const BookBazarCart = () => {

  const { AllProductsDatas, addToCart } = useContext(ArrivalContext);


  return (
    <>
      <div className="bookbazar-categoryName">
        <h1>Our Colloection</h1>
      </div>
      <div className="bookbazar-containers">
        <div className="bookbazar-slider overflow-hidden">
          {AllProductsDatas.slice(0, 15).map((item) => {
            return (
              <div key={item.id} className="bookbazar-container">
                <div className="bookbazar-cart">
                  <div className="bookbazar-image">
                    <Link to={`/ProductDisplay/${item.id}`}>
                      <img src={item.img} alt="" />
                    </Link>
                  </div>
                  <div className="bookbazar-textcontents">
                    <Link to={`/ProductDisplay/${item.id}`}><h1>{item.name}</h1></Link>
                    <h3>By:  {item.byowner}</h3>

                    <div className="bookbazar-pricess">
                      <h4>Rs: {item.price}</h4>
                      <h5 className=" text-[#D20E0E]">{item.oldprice}</h5>
                    </div>
                  </div>
                  <button onClick={() => addToCart(item.id)}>Add To Cart</button>
                </div>
              </div>
            )
          })}
        </div>
        <div className="viewallbtn">
          <NavLink to="/BookBazarProductsPage"><button className="bookbazar-viewMore">View All</button></NavLink>
        </div>
      </div>
    </>
  );
};

export default BookBazarCart;

