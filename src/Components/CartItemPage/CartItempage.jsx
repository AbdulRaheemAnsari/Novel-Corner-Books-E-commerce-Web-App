import { useContext } from 'react'
import './cartitempage.css'
import { CiCircleRemove } from "react-icons/ci";
import { ArrivalContext } from '../Context/NewArrivalsContext'
import { Link } from 'react-router-dom'


const CartItempage = () => {

    const { getTotalAmount, AllProductsDatas, cartItem, removeFromCart } = useContext(ArrivalContext)



    return (
        <>
            <div className="cartpagecontainers">
                <div className="cartquantity">
                    {Object.values(cartItem).some(quantity => quantity > 0) ? (
                        <div className="cartitem">
                            {AllProductsDatas.map((e) => {
                                if (cartItem[e.id] > 0) {
                                    return (
                                        <div key={e.id} className="cartmain">
                                            <div className="cartimg">
                                                <Link to={`/ProductDisplay/${e.id}`}>
                                                    <img src={e.img} alt="" />
                                                </Link>
                                            </div>
                                            <div className="consss">
                                            <div className="names">
                                                <Link to={`/ProductDisplay${e.id}`}><h2>{e.name}</h2></Link>
                                                <p>By: {e.byowner}</p>
                                            </div>
                                            <button>{cartItem[e.id]}</button>
                                            <div className="cartprices">
                                                <p>Rs: {e.price}</p>
                                                <h5 className="line-through">{e.oldprice}</h5>
                                            </div>
                                            <div className="totalprice">
                                                <h4>Total Price</h4>
                                                <h3>Rs: {e.price}</h3>
                                            </div>
                                            <div className="removecart">
                                                <CiCircleRemove onClick={() => removeFromCart(e.id)} cursor="pointer" />
                                            </div>
                                            </div>
                                        </div>
                                    );
                                } else {
                                    return null;
                                }
                            })}
                        </div>
                    ) : (
                        <div className="empty-cart-message">
                            <p>Your cart is empty!</p>
                            <Link to="/"><button>Continue Shopping</button></Link>
                        </div>
                    )}
                </div>


                {/* order now side section */}
                <div className="order_now_side_container">
                    <div className="ordersummery">
                        <h1>ORDER SUMMARY</h1>
                    </div>
                    <div className="subtotal">
                        <h2>Sub-Total</h2>
                        <h2 className='amount'>Rs {getTotalAmount()}.00</h2>
                    </div>
                    <div className="totalprce">
                        <h2>Total</h2>
                        <h2 className='amount'>Rs {getTotalAmount()}.00</h2>
                    </div>
                    <div className="OrderNowbutton">
                        <Link to="/OrderNowPage"><button>Order Now</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItempage;