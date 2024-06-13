// FilterCategory.js
import { useEffect, useState } from 'react';
import './filtercategory.css';
import { FiMinus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from 'react-router-dom';

const FilterCategory = () => {
    const [categoryCrop, setCategoryCrop] = useState(false);

    const toggleButton = () => {
        setCategoryCrop(prevState => !prevState);
    }


    const navigate = useNavigate();
    const location = useLocation();
    const [selectedValue, setSelectedValue] = useState(location.pathname);


    useEffect(() => {
        setSelectedValue(location.pathname);
    }, [location.pathname]);


    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        navigate(selectedValue);
    };


    return (
        <>
            <div className="afterresponsivefilter">
                <label htmlFor="filter-select">Filter By:</label>
                <select id="filter-select" value={selectedValue} onChange={handleSelectChange}>
                    <option value="/FictionProductPage">Fiction</option>
                    <option value="/NewArrivalsProductsPage">New Arrivals</option>
                    <option value="/BestSellingProductsPage">Best Selling</option>
                    <option value="/BookBazarProductsPage">Book Bazar Upto 80% Off</option>
                    <option value="/NotesBooksProductsPage">NoteBooks</option>
                    <option value="/RecentAddedProductsPage">Recent Added</option>
                </select>
            </div>


            <div className="filter">
                <div className="filterwrraper">
                    <div className="filterheading">
                        <h1>Filter by:</h1>
                    </div>
                    <div className={`collection ${categoryCrop ? "cropped" : ""}`}>
                        <div className="collectionname">
                            <h2 onClick={toggleButton}>Collection</h2>
                            <FiMinus color="#636363" fontSize={"22px"} cursor={"pointer"} onClick={toggleButton} />
                        </div>
                        <div className="filtername">
                            <Link to="/FictionProductPage"><h1>Fiction</h1></Link>
                            <Link to="/NewArrivalsProductsPage"><h1>New Arrivals</h1></Link>
                            <Link to="/BestSellingProductsPage"><h1>Best Selling</h1></Link>
                            <Link to="/BookBazarProductsPage"><h1>Book Bazar Upto 80% Off</h1></Link>
                            <Link to="/NotesBooksProductsPage"><h1>NoteBooks</h1></Link>
                            <Link to="/RecentAddedProductsPage"><h1>Recent Added</h1></Link>
                        </div>
                    </div>

                </div>
            </div>


        </>
    );
}

export default FilterCategory;
