import { useContext } from 'react'
import './ordernowpage.css'
import { ArrivalContext } from '../Context/NewArrivalsContext'
import { useAuth0 } from "@auth0/auth0-react";

const OrderNowPage = () => {
  const { user } = useAuth0();
  const { gettotalcartitem, getTotalAmount } = useContext(ArrivalContext);

  return (
    <>
      {/* left side */}
      <div className="ordernowcontainer">
        <div className="addressleftside">
          <div className="accountmain">
            <div className="accountname">
              <h1>ACCOUNT</h1>
              <p>MANAGE ACCOUNT</p>
            </div>
            <div className="accountholdername">
              <p>{user ? user.name : "Abdul Raheem"}</p>
              <h1>{user ? user.email : "ansariabdul@gmail.com"}</h1>
            </div>
          </div>
          <div className="shippingAddressmain">
            <div className="addressname">
              <h1>SHIPPING ADDRESS</h1>
              <p>ADDEDD SHIPPING ADDRESS</p>
            </div>
            <div className="fulladdress">
              <p>novel corner books 14 oxgord street london <br /> United State</p>
            </div>
          </div>
          <div className="paymentmain">
            <div className="paymentname">
              <h1>PAYMENT INFORMATION</h1>
              <p>CHANGE PAYMENT INFO</p>
            </div>
            <div className="paymentmethod">
              <p>payment method name</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR01IiJEzLYwzuQethJraGGG-3-vbKQ8AbQTQ&s" alt="" />
              <h1>paypal card ending in **97</h1>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="placeorderrightside">
          <div className="summartright">
            <div className="summaryname">
              <h1>SUMMARY</h1>
            </div>
            <div className="product_count">
              <div className="producttotal">
                <div className="producttotalcount">
                  <h1>Product-Total </h1>
                  <h1>({gettotalcartitem()})</h1>
                </div>
                <p>Rs : {getTotalAmount()}</p>
              </div>
              <div className="shippingto">
                <h1>Shipping to</h1>
                <p>United state</p>
              </div>
              <div className="shippingCost">
                <h1>Shipping Cost</h1>
                <p>Rs : {0}</p>
              </div>
            </div>
            <div className="total_amount">
              <h2>Order Total</h2>
              <h1>Rs : {getTotalAmount()}</h1>
            </div>
            <div className="placeOrder">
              <button>PLACE ORDER</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderNowPage;