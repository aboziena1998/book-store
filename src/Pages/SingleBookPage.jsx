import { useEffect, useState } from "react";
import { booksData } from "../../data";
import { useLocation, useParams } from "react-router-dom";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { RxCube } from "react-icons/rx";
import { BsLightningCharge } from "react-icons/bs";
import { useCart } from "../contexts/CartProvider";

const SingleBookPage = () => {
  const path = useParams();
  const book = booksData.find(item =>
    item.versions.find(version => version.path === path.id)
  );
  const version = book.versions.find(version => version.path === path.id);
  const { image, title, price, priceNumber, type, ISBN } = version;

  const bookObj = {
    image,
    title,
    priceString: price,
    price: priceNumber,
    type,
    id: ISBN,
  };

  const { state, handleAdd, updateBooks } = useCart();
  const [activeButton, setActiveButton] = useState("button-1");
  const [amount, setAmount] = useState(1);

  const handleButtonClick = buttonName => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <section>
        <div className="wrapper">
          <div>
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10   items-center">
              <div className="p-16 bg-neutral flex-shrink-[.3] 2xl:shrink-0 w-full lg:w-auto flex items-center justify-center">
                <img
                  src={version.image}
                  loading="lazy"
                  alt=""
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className=" text-xl sm:text-2xl font-cardo font-extrabold">
                  {version.title}
                </h3>
                <p className="text-xl md:text-2xl text-secondary font-bold ">
                  {version.price} USD
                </p>
                <p className="text-gray-400 text-base py-3">{book.content}</p>
                <p className="text-primary text-base capitalize">
                  Book Type:
                  <span className="text-gray-400 ml-3">{version.type}</span>
                </p>
                <p className="text-primary text-base capitalize">
                  Publisher:
                  <span className="text-gray-400 ml-3">
                    {version.publisher}
                  </span>
                </p>
                <p className="text-primary text-base capitalize">
                  Book Language:
                  <span className="text-gray-400 ml-3">{version.language}</span>
                </p>
                <p className="text-primary text-base capitalize">
                  Paperback:
                  <span className="text-gray-400 ml-3">
                    {version.paperback}
                  </span>
                </p>
                <p className="text-primary text-base capitalize">
                  ISBN-10:{" "}
                  <span className="text-gray-400 ml-3">{version.ISBN}</span>
                </p>
                <p className="text-primary text-sm  lg:text-base capitalize">
                  Dimensions:
                  <span className="text-gray-400 ml-3">
                    {version.dimensions}
                  </span>
                </p>
                <div className="flex flex-col md:flex-row  w-full gap-6  mt-4 ">
                  <input
                    type="number"
                    name=""
                    id=""
                    className=" border border-solid border-secondary focus-visible:border-primary md:max-w-[150px] text-center p-4"
                    inputMode="numeric"
                    pattern="^[0-9]+$"
                    min={1}
                    // value={1}
                    value={amount}
                    onChange={e => setAmount(+e.target.value)}
                  />
                  <button
                    onClick={() => handleAdd(bookObj, amount)}
                    className="btn big border-secondary bg-secondary text-primary hover:bg-inherit flex-1"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrapper">
          <div className="flex flex-col sm:flex-row items-center gap-4  justify-center">
            <button
              onClick={() => handleButtonClick("button-1")}
              className={`py-4 px-10 font-cardo font-normal text-sm    ${
                activeButton === "button-1"
                  ? "bg-primary text-white  transition  ease-in duration-500"
                  : "border-neutral bg-neutral text-black hover:bg-primary hover:text-white"
              } uppercase`}
            >
              Product description
            </button>
            <button
              onClick={() => handleButtonClick("button-2")}
              className={`py-4 px-10 font-cardo font-normal text-sm     ${
                activeButton === "button-2"
                  ? "bg-primary text-white  transition  ease-in duration-500"
                  : "border-neutral bg-neutral text-black hover:bg-primary hover:text-white"
              } uppercase `}
            >
              ADDITONAL INFO
            </button>
          </div>
          <div className="relative">
            <p
              className={` text-gray-400 text-base text-center mt-6  lg:max-w-[1000px] mx-auto    ${
                activeButton === "button-1"
                  ? "opacity-[1] transition  ease-in duration-500  block relative "
                  : " opacity-0 fixed"
              }`}
            >
              Nowadays English language section is asked in almost all
              competitive and recruitment examinations like SSC, Banking, CDS,
              State Level PSCs, etc. Otherwise creatively too, being proficient
              in English is necessary in this fast-modernizing world of
              disruptive innovation via the workplace.
            </p>
            <p
              className={` text-gray-400 text-base text-center mt-6  lg:max-w-[1000px] mx-auto    ${
                activeButton === "button-2"
                  ? "opacity-[1] transition  ease-in duration-500  block relative "
                  : " opacity-0 fixed"
              }`}
            >
              This book has been designed to act as a comprehensive guide to
              learning English Grammar & Composition. The present book for
              English Grammar is creatively divided into Articles, Noun,
              Pronoun, Adverbs, Participle, Gerund, Preposition, Conjunctions
              disruptive innovation via the workplace.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="wrapper">
          <div className="flex flex-col xl:flex-row justify-between items-center gap-6 xl:gap-0">
            <div className="flex flex-col gap-4 items-center">
              <span className="flex items-center justify-center h-[80px] w-[80px]  bg-primary">
                <VscWorkspaceTrusted size={38} strokeWidth={0} color="white" />
              </span>
              <h2 className="font-cardo font-bold text-2xl capitalize">
                Secure Payments
              </h2>
              <p className="text-base text-center">
                Fully secured SSL technology for safer Checkout option.
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <span className="flex items-center justify-center h-[80px] w-[80px]  bg-primary">
                <RxCube size={38} strokeWidth={0} color="white" />
              </span>
              <h2 className="font-cardo font-bold text-2xl capitalize">
                Free Shipping
              </h2>
              <p className="text-base text-center">
                Fully safe and fast delivery as soon as possible without any
                cost.
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <span className="flex items-center justify-center h-[80px] w-[80px]  bg-primary">
                <BsLightningCharge size={38} strokeWidth={0} color="white" />
              </span>
              <h2 className="font-cardo font-bold text-2xl capitalize">
                100% Satisfactions
              </h2>
              <p className="text-base text-center">
                We're responsible for provide fully satisfied products to our
                customers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleBookPage;
