import { HiLocationMarker } from "react-icons/hi";
import { FaMobileRetro } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import "./contactus.css";
// import { useState } from "react";

const ContactUsPage = () => {
  return (
    <>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14469.958479893678!2d66.9966220128534!3d24.949451094461626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb36ae71fc40a31%3A0xcfbb1d61e6ab566d!2sOrangi%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1718118425840!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="contactUs">
        <div className="leftcontact">
          <div className="contactName">
            <h1>Contact Us</h1>
          </div>
          <div className="contactcontent">
            <div className="location">
              <HiLocationMarker fontSize={"42px"} color="#D22129" />
              <p>
                C-16, Sector 31-A, Mehran Town, Extension Near Brookes
                Chowrangi, Korangi Industrial Area, Karachi.
              </p>
            </div>
            <div className="phonenumber">
              <FaMobileRetro fontSize={"22px"} color="#D22129" />
              <p>03111444282</p>
            </div>
            <div className="time">
              <IoIosTime fontSize={"22px"} color="#D22129" />
              <p>Opening Times (Mon - Sat 09:00AM to 05:30PM)</p>
            </div>
          </div>
        </div>
        <div className="rightcontact">
          <div className="contactinput">
            <form action="https://formspree.io/f/xzbnnewb" method="POST">
              <div className="namefield">
                <label>Your Name</label>
                <input type="text" name="name" required />
              </div>
              <div className="emailfield">
                <label>E-Mail Address</label>
                <input type="email" name="email" required />
              </div>
              <div className="emquiryfield">
                <label>Enquiry</label>
                <textarea
                  className="textarea"
                  name="inquiry"
                  rows={4}
                  cols={40}
                  required
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
