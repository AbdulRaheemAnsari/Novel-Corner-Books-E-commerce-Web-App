import { useContext, useState } from "react";
import './notesbooksproductpage.css'
import { Link } from "react-router-dom";
import FilterCategory from "../FilterCategory/FilterCategory";
import { ArrivalContext } from "../Context/NewArrivalsContext";

const NotesBooksProductsPage = (props) => {
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
      <div className="notebooks-pageName">
        <p>Notes Books</p>
      </div>
      <div className="notebooks-wrraper">

        <FilterCategory />

        <div className="notebooks-pagemain">
          {currentProducts.map((item) => {
            if (props.categories === item.categories) {
              return (
                <div key={item.id} className="notebooks-container">
                  <div className="notebooks-cart">
                    <div className="notebooks-image">
                      <Link to={`/ProductDisplay/${item.id}`}>
                        <img src={item.img} alt={item.name} />
                      </Link>
                    </div>
                    <div className="notebooks-textcontents">
                      <Link to={`/ProductDisplay/${item.id}`}><h1>{item.name}</h1></Link>
                      <h3>By: {item.byowner}</h3>
                      <div className="notebooks-pricess">
                        <h4>Rs: {item.price}</h4>
                        <h5 className="text-[#D20E0E]">{item.oldprice}</h5>
                      </div>
                    </div>
                    <button onClick={() => addToCart(item.id)}>Add To Cart</button>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div className="Notebookspagination">
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
  )
}

export default NotesBooksProductsPage