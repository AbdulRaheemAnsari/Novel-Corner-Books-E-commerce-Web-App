import { NavLink, Link } from "react-router-dom";
import './recentaddedcart.css';
import { TiStarFullOutline } from "react-icons/ti";
import { useContext } from "react";
import { ArrivalContext } from "../Context/NewArrivalsContext";

const RecentAddedCart = (props) => {
  const { AllProductsDatas, addToCart } = useContext(ArrivalContext);

  // Filter products based on category and slice the result
  const filteredProducts = AllProductsDatas.filter(item => item.categories === props.categories).slice(0, 15);

  return (
    <>
      <div className="recentadded-categoryname">
        <h1>Recently Added</h1>
      </div>
      <div className="maincontainers">
        <div className="recentadded-slider w-full overflow-hidden">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(item => (
              <div key={item.id} className="recentadded-container">
                <div className="recentadded-cart">
                  <div className="recentadded-image">
                    <Link to={`/ProductDisplay/${item.id}`}>
                      <img src={item.img} alt="" />
                    </Link>
                  </div>
                  <div className="recentadded-textcontents">
                    <Link to={`/ProductDisplay/${item.id}`}><h1>{item.name}</h1></Link>
                    <h3>By: {item.byowner}</h3>
                    {/* <div className="recentadded-reviews">
                      <TiStarFullOutline />
                      <TiStarFullOutline />
                      <TiStarFullOutline />
                      <TiStarFullOutline />
                      <TiStarFullOutline />
                    </div> */}
                    <div className="recentadded-pricess">
                      <h4>Rs: {item.price}</h4>
                      <h5 className="oldprice text-[#D20E0E]">{item.oldprice}</h5>
                    </div>
                  </div>
                  <button onClick={() => addToCart(item.id)}>Add To Cart</button>
                </div>
              </div>
            ))
          ) : (
            <p>No products found in this category.</p>
          )}
        </div>
      </div>
      <div className="recentadded-viewallbtn">
        <NavLink to="/RecentAddedProductsPage"><button className="recentadded-viewMore">View All</button></NavLink>
      </div>
    </>
  );
};

export default RecentAddedCart;
