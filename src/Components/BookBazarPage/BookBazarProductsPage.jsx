import { useContext, useState } from "react";
import { ArrivalContext } from "../Context/NewArrivalsContext";
import { Link } from "react-router-dom";
import './bookbazarpage.css';
import FilterCategory from "../FilterCategory/FilterCategory";

const BookBazarProductsPage = (props) => {
  const { AllProductsDatas, addToCart } = useContext(ArrivalContext);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;  // Updated to 16 products per page

  // Calculate indices for slicing
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  // Filter products by category and slice the current page's products
  const currentProducts = AllProductsDatas
    .filter(item => item.categories === props.categories)
    .slice(indexOfFirstProduct, indexOfLastProduct);


  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top of the page smoothly
  }

  
  // Calculate total pages
  const totalPages = Math.ceil(
    AllProductsDatas.filter(item => item.categories === props.categories).length / productsPerPage
  );

  return (
    <>
      <div className="bookbazarpageName">
        <p>Book Bazar Upto 80% Off</p>
      </div>
      <div className="bookbazar-wrraper">

        <FilterCategory />

        <div className="bookbazarpagemain">
          {currentProducts.map((item) => (
            <div key={item.id} className="bookbazarpage-container">
              <div className="bookbazarpage-cart">
                <div className="bookbazarpage-image">
                  <Link to={`/ProductDisplay/${item.id}`}>
                    <img src={item.img} alt={item.name} />
                  </Link>
                </div>
                <div className="bookbazarpage-textcontents">
                  <Link to={`/ProductDisplay/${item.id}`}><h1>{item.name}</h1></Link>
                  <h3>By: {item.byowner}</h3>
                  <div className="bookbazarpage-pricess">
                    <h4>Rs: {item.price}</h4>
                    <h5 className="text-[#D20E0E]">{item.oldprice}</h5>
                  </div>
                </div>
                <button onClick={() => addToCart(item.id)}>Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`pagination-button ${index + 1 === currentPage ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default BookBazarProductsPage;
