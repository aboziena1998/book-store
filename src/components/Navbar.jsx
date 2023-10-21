import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { BiChevronDown, BiMenu } from "react-icons/bi";
import { useBreakpoint } from "../hooks/useBreakpoint";
import NavbarDropDown from "./NavbarDropDown";
import { useEffect, useRef, useState } from "react";
import { useHandleOutsideClick } from "../hooks/useHandleOutsideClick";
import { useCart } from "../contexts/CartProvider";

const Navbar = ({ toggleModal, setToggleModal }) => {
  const matches = useBreakpoint(1026);
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);

  const { clicked, setClicked } = useHandleOutsideClick(menuRef);
  const { state } = useCart();

  const amount = state.books.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  useEffect(() => {
    if (clicked) {
      setOpenMenu(false);
      setClicked(false);
    }
  }, [clicked]);

  return (
    <nav
      className="ml-auto flex items-center
     justify-between gap-6
      text-white text-base xl:text-lg
       lg:w-auto w-full  relative z-[1]"
    >
      {matches && (
        <div className="flex gap-8  items-center">
          <NavLink to="./" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <p className="nav-link relative drop-down flex items-center justify-between">
            Pages <BiChevronDown size={25} />
            <div className="menu">
              <h6 className="h6">Pages</h6>
              <NavLink
                to="/articles"
                className="text-primary hover:text-secondary"
              >
                Article
              </NavLink>
              <NavLink
                to="/ourstore"
                className="text-primary hover:text-secondary"
              >
                Our Store
              </NavLink>
              <NavLink
                to="/styleguide"
                className="text-primary hover:text-secondary"
              >
                Style Guide
              </NavLink>
            </div>
          </p>
          <NavLink to="contactus" className="nav-link">
            Contact Us
          </NavLink>
        </div>
      )}
      <div className="flex gap-8 items-center">
        <button
          className="nav-link relative"
          onClick={() => setToggleModal(!toggleModal)}
        >
          <span className="absolute top-5  left-[80%] rounded-full  w-[20px] h-[15px] text-[10px] font-bold bg-secondary text-white text-center  grid place-content-center">
            {amount}
          </span>
          <FaShoppingCart />
        </button>
        <button className=" btn hidden sm:block bg-secondary outline-secondary text-primary hover:bg-primary hover:text-white xl:lg-0">
          Order Today
        </button>
      </div>
      {!matches && (
        <button
          className="p-2 border-solid bg-secondary border-6  border-secondary text-white hover:bg-primary z-[10000]"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <BiMenu size={25} />
        </button>
      )}

      <div
        className={`absolute top-[100%] w-full transition-all origin-top ${
          openMenu & !matches
            ? "scale-y-[1] p-6 pb-10 "
            : "scale-y-0 h-0 p-0 m-0 pointer-events-none"
        } `}
        ref={menuRef}
      >
        <NavbarDropDown isMenuOpen={openMenu} />
      </div>

      {/* <div
        className={`absolute top-[100%] w-full origin-bottom ${
          openMenu ? "scale-y-[1] p-6 pb-10 " : "scale-y-0 h-0 p-0 m-0"
        } `}
      >
        {openMenu && <NavbarDropDown isMenuOpen={openMenu} />}
      </div> */}
    </nav>
  );
};

export default Navbar;
