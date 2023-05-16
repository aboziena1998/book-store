import { FiUser, FiEdit } from "react-icons/fi";
import { RxEnvelopeClosed } from "react-icons/rx";
import { BsCheck, BsTelephone } from "react-icons/bs";
import Button from "./Button";

const Form = () => {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
      <div className="relative col-span-2 md:col-span-1">
        <FiUser
          size={"25px"}
          className="absolute h-full left-4 text-secondary"
        />
        <input
          type="text"
          name="Name"
          id="name"
          placeholder="Name"
          className="form-input  "
        />
      </div>
      <div className="relative col-span-2 md:col-span-1">
        <RxEnvelopeClosed
          size={"25px"}
          className="absolute h-full left-4 text-secondary"
        />
        <input
          type="email"
          name="Email"
          id="email"
          placeholder="Email"
          className="form-input"
        />
      </div>
      <div className="relative col-span-2">
        <BsTelephone
          size={"25px"}
          className="absolute h-full left-4 text-secondary"
        />
        <input
          type="tel"
          name="Phone"
          id="phone"
          placeholder="Phone"
          className="form-input"
        />
      </div>
      <div className="relative  col-span-2">
        <FiEdit
          size={"25px"}
          className="absolute top-6 left-4 text-secondary"
        />
        <textarea
          name="Message"
          id="message"
          maxLength={5000}
          rows={5}
          placeholder="Message"
          className="form-input"
        />
      </div>
      <div className="flex items-center justify-start gap-3 col-span-2">
        <label htmlFor="notifyMe" className="checkbox">
          <input
            type="checkbox"
            id="notifyMe"
            className="p-2 inline-block w-full h-full cursor-pointer absolute top-0 left-0 appearance-none"
          />
          <BsCheck size={30} className="check-mark" />
        </label>
        <label
          htmlFor="notifyMe"
          className="block text-gray-400 text-sm cursor-pointer"
        >
          Keep me up to date with news and offers from time to time by email
        </label>
      </div>

      <button
        type="submit"
        className="btn big bg-secondary hover:bg-white text-primary hover:text-primary col-span-2"
      >
        Get An Appointment
      </button>
    </form>
  );
};

export default Form;
