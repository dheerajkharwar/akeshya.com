import React from "react";
import { ContactForm } from "./ContactForm";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-10">
      <h1 className="text-center mytitle my-10 pt-20">Contact Us</h1>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col space-y-1 p-5">
          <h3 className="font-bold text-2xl text-blue-500">Akeshya</h3>
          <p>
            Designers, developers & marketeers capable of delivering solutions
            according to your needs.
          </p>
        </div>
        <div className="flex flex-col space-y-1 p-5">
          <div>
            <i className="fa-solid fa-location-dot"></i>
            <span className="pl-5">
              26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh 524004
            </span>
          </div>
          <br />
          <div>
            <i className="fa-solid fa-envelope"></i>
            <span className="pl-5">info@akeshya.com</span>
          </div>
          <br />
          <div>
            <i className="fa-solid fa-phone"></i>
            <span className="pl-5">+91 94942 40922</span>
          </div>
        </div>
        <div className="flex flex-col space-y-1 p-5">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
