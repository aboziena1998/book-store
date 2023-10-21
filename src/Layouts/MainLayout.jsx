import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Logo from "../assets/logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { useEffect } from "react";

const MainLayout = ({ toggleModal, setToggleModal }) => {
  const isBreakpointReached = useBreakpoint(1000);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <header className="flex flex-col lg:flex-row items-center gap-2 bg-primary w-full py-4 px-8">
        <div className=" flex justify-between lg:justify-start items-center gap-3 w-full lg:w-auto">
          <Link to="./" className="max-w-[120px] ">
            <img src={Logo} alt="Logo" className="logo" loading="lazy" />
          </Link>
          <div className="flex items-center justify-between gap-2">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FaFacebookF
                size={15}
                color="var(--color-primary)"
                fontWeight={700}
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <BsTwitter size={15} color="var(--color-primary)" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FaLinkedinIn size={15} color="var(--color-primary)" />
            </a>
          </div>
        </div>
        <Navbar toggleModal={toggleModal} setToggleModal={setToggleModal} />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
