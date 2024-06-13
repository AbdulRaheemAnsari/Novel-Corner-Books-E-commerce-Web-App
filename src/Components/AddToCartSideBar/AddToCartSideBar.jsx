import { useContext } from 'react'
import { ArrivalContext } from '../Context/NewArrivalsContext'
import { CiCircleRemove } from "react-icons/ci";
import './addtocartsidebar.css'
import { Link } from 'react-router-dom';

const AddToCartSideBar = () => {

    const { AllProductsDatas, getTotalAmount, cartItem, removeFromCart } = useContext(ArrivalContext)


    return (
        <>
            <div className='maincartcontainer'>
                <div className="cartcontainer">
                    {AllProductsDatas.map((e, i) => {
                        if (cartItem[e.id] > 0) {
                            return <div key={i} className="cart">
                                <div className="img">
                                    <Link to={`/ProductDisplay/${e.id}`}>
                                        <img src={e.img} alt="" />
                                    </Link>
                                </div>
                                <div className="title">
                                    <Link to={`/ProductDisplay${e.id}`}><h2>{e.name}</h2></Link>
                                    <p>By: {e.byowner}</p>
                                    <div className="cartprice">
                                        <p>Rs:{e.price}</p>
                                        <p className='line-through'>{e.oldprice}</p>
                                    </div>
                                    <button>{cartItem[e.id]}</button>
                                    <div className="total">
                                        <h4>{e.price * cartItem[e.id]}</h4>
                                    </div>
                                </div>
                                <div className="removecart">
                                    <CiCircleRemove onClick={() => removeFromCart(e.id)} cursor={"pointer"} />
                                </div>
                            </div>
                        }
                        else {
                            return null
                        }
                    })}
                </div>
            </div>
        </>
    )
}

export default AddToCartSideBar