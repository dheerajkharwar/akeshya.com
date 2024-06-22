import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-row flex-wrap items-center justify-center py-6 text-center gap-y-6 gap-x-12 md:justify-between mx-10 border-t-2">
      <p className="block font-sans text-base antialiased font-normal leading-relaxed">
        ©{" "}
        <span className="font-bold" style={{ color: "#14279b" }}>
          Akeshya
        </span>
        . All Rights Reserved
      </p>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Link
            href=""
            className="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-blue-500 focus:text-blue-500"
          >
            Terms and conditions
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-blue-500 focus:text-blue-500"
          >
            Refund policy
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-blue-500 focus:text-blue-500"
          >
            Privacy policy
          </Link>
        </li>
      </ul>
      <Link
        href={`#`}
        className="bg-blue-800 p-2 text-white rounded fixed bottom-5 right-2"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </Link>
    </footer>
  );
};

export default Footer;
