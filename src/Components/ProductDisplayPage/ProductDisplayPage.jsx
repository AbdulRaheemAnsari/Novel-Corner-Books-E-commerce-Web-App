import './productdisplaypage.css';
import { FaMinus } from "react-icons/fa";
import { useContext, useState } from 'react';
import { ArrivalContext } from '../Context/NewArrivalsContext';
import { Link } from 'react-router-dom';


const ProductDisplayPage = (props) => {
    const { addToCart } = useContext(ArrivalContext);

    const { product } = props;
    const [isCropped, setIsCropped] = useState(false);


    const toggleCrop = () => {
        setIsCropped(prevState => !prevState);
    };


    return (
        <>
            <div className='productdisplaypage-container'>
                <div className="left">
                    <div className="image">
                        <img src={product.img} alt={product.name} />
                    </div>
                </div>

                {/* right Section */}

                <div className="right">
                    <div className="name">
                        <p>{product.name}</p>
                        <span className='flex gap-2 text-[16px]'>By:<h3 className='text-red-500 text-[16px]'>{product.byowner}</h3></span>
                    </div>
                    <div className="prices">
                        <p>Rs {product.price}</p>
                        <h1 className='text-red-500 text-[26px] line-through'>{product.oldprice}</h1>
                    </div>
                    <div className="addtocartbutton">
                        <button onClick={() => addToCart(product.id)}>Add To Cart</button>
                    </div>
                    <div className="buynowbutton">
                        <Link to="/CartItemPage"><button>Order Now</button></Link>
                    </div>
                    <div className={`description ${isCropped ? 'cropped' : ''}`}>
                        <div className="infobutton">
                            <button onClick={toggleCrop}>Product Info</button>
                            <FaMinus cursor={"pointer"} onClick={toggleCrop} />
                        </div>
                        <div className="des">
                            <p>
                                Born in Sri Lanka during the Second World War, Ondaatje was sent as a child to school in London, and later moved to Canada. While he has lived there since, these poems reflect the life of a writer, traveller and watcher of the world – describing himself as a someone born out of diverse cultures.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDisplayPage;
