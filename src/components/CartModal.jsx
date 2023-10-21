import { useEffect } from "react";
import { createPortal } from "react-dom";
import { BiX } from "react-icons/bi";
import { useCart } from "../contexts/CartProvider";
import { formatToUSD } from "../utils/helper";

const CartModal = ({ isOpen, setIsOpen }) => {
  const { state, handleRemove, updateBooks } = useCart();

  const handleUpdateCartItem = (e, id) => {
    updateBooks(id, +e.target.value);
  };

  useEffect(() => {
    if (state.books.length) {
      setIsOpen(true);
    }
  }, [state, setIsOpen]);

  const cartItems =
    state &&
    state.books &&
    state.books.map(book => (
      <div
        className="flex w-full justify-between items-start px-6 self-start border-solid border-0 border-b-[1px] border-gray-300 pt-3 pb-6 "
        key={book.id}
      >
        <div className="flex gap-2 flex-shrink-0">
          <div className="p-2 w-[90px] h-[110px]">
            <img src={book.image} alt="" className="" loading="lazy" />
          </div>
          <div>
            <p className="font-bold text-black text-lg object-cover ">
              {book.title}
            </p>
            <p className="text-base text-gray-400 mt-1 mb-2">
              {book.priceString}USD
            </p>
            <button
              className="text-base text-primary capitalize mt-3"
              onClick={() => handleRemove(book.id)}
            >
              Remove
            </button>
          </div>
        </div>
        <div>
          <input
            type="number"
            name=""
            id=""
            min={1}
            className="p-3 py-2 rounded-md border border-solid  border-gray-400  bg-gray-100 text-start text-gray-400 w-[70px] font-semibold text-base"
            value={book.amount}
            onChange={e => handleUpdateCartItem(e, book.id)}
          />
        </div>
      </div>
    ));
  return createPortal(
    <>
      <div
        className={`${isOpen ? "overlay open" : "overlay"}`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div className="">
        <div
          className={`${isOpen ? "cart open" : "cart"} ${
            !state.books.length && "empty"
          }`}
        >
          <header className="bg-secondary flex justify-between w-full items-center pl-4 pr-2 py-2 lg:py-6  ">
            <h3 className="h5 font-bold font-cardo text-white">Your Cart</h3>
            <BiX size={25} onClick={() => setIsOpen(false)} />
          </header>
          {state && state.books.length ? (
            <div className="w-full ">
              {cartItems}
              <div className=" flex flex-col  py-3 w-full px-6">
                <div className="flex justify-between py-3 ">
                  <p className="text-base text-primary">Subtotal</p>
                  <p className="text-black text-base font-bold">
                    {formatToUSD(state.total)}USD
                  </p>
                </div>
                <button className="btn big bg-secondary hover:bg-inherit rounded-sm">
                  continue to checkout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center w-full h-full">
              <p className="text-gray-400 text-xl ">No Items Found</p>
            </div>
          )}
        </div>
      </div>
    </>,
    document.querySelector(".modal")
  );
};

export default CartModal;
