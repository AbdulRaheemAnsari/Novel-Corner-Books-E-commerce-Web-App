import './fotter.css'
import { NavLink } from 'react-router-dom'
// import { FaLinkedin } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { AiFillInstagram } from "react-icons/ai";
// import { FaYoutube } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";


const Fotter = () => {
    return (
        <div className='fotter'>
            <div className="lis">
                <div className="titles">
                    <li>Information</li>
                </div>
                <div className="links">
                    <li>Privacy Policy</li>
                    <li>Returns and Exchange Policy</li>
                    <NavLink to="AboutUsPage"><li>About Us</li></NavLink>
                    <li>Our Bookstores</li>
                    <li>Shipping & Delivery</li>
                    <li>Terms & Conditions</li>
                    <li>Careers</li>
                </div>
            </div>


            <div className="lis">
                <div className="titles">
                    <li>New Features</li>
                </div>
                <div className="links">
                    <li>Send E-Gift Card</li>
                    <li>Track Your Order</li>
                    <li>Track Requested Book</li>
                </div>
            </div>


            <div className="lis">
                <div className="titles">
                    <li>Customer Support</li>
                </div>
                <div className="links">
                    <li>Returns</li>
                    <NavLink to="/ContactUsPage"><li>Contact Us</li></NavLink>
                    <li>Site Map</li>
                </div>
            </div>


            <div className="lis">
                <div className="titles">
                    <li>Contact Us</li>
                </div>
                <div className="links">
                    <li>For complaints and feedback:</li>
                    <li>novelcorner@gmail.com</li>
                    {/* <div className="sicailicons">
                        <FaFacebook className=' bg-white rounded-full w-9 h-9 p-2 cursor-pointer' />
                        <FaTwitter className=' bg-white rounded-full w-9 h-9 p-2 cursor-pointer' />
                        <FaYoutube className=' bg-white rounded-full w-9 h-9 p-2 cursor-pointer' />
                        <AiFillInstagram className=' bg-white rounded-full w-9 h-9 p-2 cursor-pointer' />
                        <FaLinkedin className=' bg-white rounded-full w-9 h-9 p-2 cursor-pointer' />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Fotter;