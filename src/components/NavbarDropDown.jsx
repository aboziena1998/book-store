import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const NavbarDropDown = ({ isMenuOpen }) => {
  const [openDropDown, setOpenDropDown] = useState(false);

  return (
    <div className={` flex flex-col px-4 py-6   bg-[rgba(32,18,18,0.8)] `}>
      <NavLink to="./" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>

      <button
        className="flex justify-between py-4 "
        onClick={() => setOpenDropDown(!openDropDown)}
      >
        Pages <BiChevronDown size={25} />
      </button>
      <div
        className={` relative text-white bg-[#111] flex flex-col origin-top transition-all   gap-4  ${
          openDropDown ? "scale-y-[1] p-6 pb-10 " : "scale-y-0 h-0 p-0 m-0"
        } `}
      >
        <h6 className="h6">Pages</h6>
        <NavLink to="/articles" className=" px-6 hover:text-secondary ">
          Article
        </NavLink>
        <NavLink to="/ourstore" className=" px-6 hover:text-secondary">
          Our Store
        </NavLink>
        <NavLink to="/styleguide" className=" px-6 hover:text-secondary">
          Style Guide
        </NavLink>
      </div>
      <NavLink to="contactus" className="nav-link">
        Contact Us
      </NavLink>
    </div>
  );
};

export default NavbarDropDown;
