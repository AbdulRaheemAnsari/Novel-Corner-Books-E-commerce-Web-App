import "./shopbycategory.css";
import { Link } from "react-router-dom";

const ShopByCategory = () => {
    return (
        <>
        <div className="categorynames">
                <h1>Shop By Category</h1>
            </div>
        <div className="containers">
            <div className="booksCarts bg-[#333533]">
                <div className="cart">
                    <div className="imgage">
                        <img src="https://www.libertybooks.com/image/cache/catalog/Shakir/Book%20Image/9786277626259%201-640x996-184x229.png?q6" alt="" />
                    </div>
                    <div className="content">
                        <Link to="/FictionProductPage"><p>Fiction</p></Link>
                        <Link to="/FictionProductPage"><button>See More</button></Link>
                    </div>
                </div>
            </div>
            <div className="booksCarts bg-[#709B14]">
                <div className="cart">
                    <div className="imgage">
                        <img src="https://www.libertybooks.com/image/cache/catalog/Shakir/Book%20Image/9786277626235%201-640x996-184x229.png?q6" alt="" />
                    </div>
                    <div className="content">
                        <p>Non Fiction</p>
                        <button>See More</button>
                    </div>
                </div>
            </div>
            <div className="booksCarts bg-[#8E44AD]">
                <div className="cart">
                    <div className="imgage">
                        <img src="https://www.libertybooks.com/image/cache/catalog/Shakir/Book%20Image/9786277737122%202-640x996-184x229.jpg?q6" alt="" />
                    </div>
                    <div className="content">
                        <p>Urdu Books</p>
                        <button>See More</button>
                    </div>
                </div>
            </div>
            <div className="booksCarts bg-[#2D98DA]">
                <div className="cart">
                    <div className="imgage">
                        <img src="https://www.libertybooks.com/image/cache/catalog/Shakir/Book%20Image/8052204404858_11-640x996-184x229.jpg?q6" alt="" />
                    </div>
                    <div className="content">
                        <Link to="/NotesBooksProductsPage"><p>Notebooks</p></Link>
                        <Link to="/NotesBooksProductsPage"><button>See More</button></Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ShopByCategory;
