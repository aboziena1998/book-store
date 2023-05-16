import React from "react";
import { BsCCircle, BsCircleFill, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { BiCircle } from "react-icons/bi";

const Footer = () => {
  const Dots = () => (
    <span className="flex gap-1 text-secondary font-bold">
      <BiCircle size={6} strokeWidth={3} />
      <BiCircle size={6} strokeWidth={3} />
      <BiCircle size={6} strokeWidth={3} />
    </span>
  );
  return (
    <footer className="bg-primary">
      <div className="wrapper pb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 border-0 border-b-[1px] border-gray-500 border-solid  py-10">
          <div>
            <div className="mb-4">
              <img src={Logo} alt="" />
            </div>
            <div className="flex gap-2">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="social-link bg-inherit border-solid border-secondary border text-white"
              >
                <FaFacebookF size={15} fontWeight={700} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                className="social-link bg-inherit border-solid border-secondary border text-white"
              >
                <BsTwitter size={15} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="social-link bg-inherit border-solid border-secondary border text-white"
              >
                <FaLinkedinIn size={15} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="social-link bg-inherit border-solid border-secondary border text-white"
              >
                <FaInstagram size={15} />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <h3 className="font-cardo font-bold text-white text-lg mb-3">
              Explore
            </h3>
            <Link
              to={"/"}
              className="text-gray-300 flex items-center gap-3 hover:text-secondary"
            >
              <Dots /> <span>Home</span>
            </Link>
            <Link
              to={"/about"}
              className="text-gray-300 flex items-center gap-3 hover:text-secondary"
            >
              <Dots /> <span>About</span>
            </Link>
            <Link
              to={"/articles"}
              className="text-gray-300 flex items-center gap-3 hover:text-secondary"
            >
              <Dots /> <span>Article</span>
            </Link>
            <Link
              to={"/ourstore"}
              className="text-gray-300 flex items-center gap-3 hover:text-secondary"
            >
              <Dots /> <span>Our Store</span>
            </Link>
            <Link
              to={"/contactus"}
              className="text-gray-300 flex items-center gap-3 hover:text-secondary"
            >
              <Dots /> <span>Contact Us</span>
            </Link>
          </div>
          <div>
            <div className="flex flex-col gap-2 items-start">
              <h3 className="font-cardo font-bold text-white text-lg mb-3">
                Utility Pages
              </h3>
              <Link
                to={"/styleguide"}
                className="text-gray-300 flex items-center gap-3 hover:text-secondary"
              >
                <Dots /> <span>Style Guide</span>
              </Link>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-2 items-start">
              <h3 className="font-cardo font-bold text-white text-lg mb-3">
                Keep in Touch
              </h3>
              <p className=" flex items-start">
                <span className="font-cardo font-bold text-white mr-6 text-start">
                  Address:
                </span>
                <span className="text-gray-400 text-base">
                  24A Kingston St, Los Vegas <br /> NC 28202, USA.
                </span>
              </p>
              <p className=" flex items-start">
                <span className="font-cardo font-bold text-white mr-6 text-start">
                  Mail:
                </span>
                <a
                  href="mailto/support@pages.com"
                  className="text-gray-400 text-base"
                >
                  support@pages.com
                </a>
              </p>
              <p className=" flex items-start">
                <span className="font-cardo font-bold text-white mr-6 text-start">
                  Phone:
                </span>
                <a href="tel:+221234567900" className="text-gray-400 text-base">
                  (+22) 123 - 4567 - 900
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center text-gray-400   pt-5">
          © Drafted by VictorFlow - Powered by Webflow.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
