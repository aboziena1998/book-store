import Heading from "./Heading";

const CallToAction = () => {
  return (
    <div
      className="p-10
          md:px-[60px] lg:px-[100px] lg:py-[80px]  xl:px-[150px] bg-secondary  text-center shadow-2xl my-20  drop-shadow-lg rounded-md text-primary flex flex-col items-center"
    >
      <div className="w-full flex flex-col  items-center  justify-between  ">
        <Heading color={"primary"} dashColor={"primary"} extraStyle={"mt-0 "}>
          Get The Best Updates
        </Heading>

        <p className="text-lg py-10">
          Subscribe with your mail id to know the current update in book
          <br /> edition at your fingertip with in a minute.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full place-content-start  gap-6   ">
        <input
          type="email"
          name="Email"
          id="email"
          placeholder="Your Email ID..."
          className="text-lg text-start  text-gray-500 lg:col-span-2 p-6 py-4 relative w-full   outline outline-gray-300 outline-1 focus-visible:outline-primary placeholder:font-normal bg-white"
        />
        <button className=" btn big bg-primary border-primary  text-white hover:bg-secondary hover:text-primary">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
