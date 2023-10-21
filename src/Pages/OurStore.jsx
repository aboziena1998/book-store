import Heading from "../components/Heading";
import { booksData } from "../../data";
import { Link } from "react-router-dom";

const OurStore = () => {
  return (
    <>
      <section className="banner ">
        <div className="wrapper">
          <Heading color={"white"} dashColor={"secondary"}>
            our Store
          </Heading>
          <p className="text-center text-gray-300 text-sm md:text-lg leading-6  mt-8">
            We believe that bookstores are essential to a healthy <br />
            culture around readers & authors.
          </p>
        </div>
      </section>
      <section className="">
        <div className="wrapper">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {booksData.map(item => {
              {
                return item.versions.map(version => (
                  <Link
                    to={`/books/${version.path}`}
                    className="flex flex-col gap-2 items-start"
                    key={version.title}
                  >
                    <div className="p-8 bg-neutral">
                      <img
                        src={version.image}
                        alt={item.description}
                        loading="lazy"
                      />
                    </div>
                    <h3 className="font-cardo font-bold text-lg sm:text-xl lg:text-2xl xl:text-2xl text-primary">
                      {version.title}
                    </h3>
                    <p className="text-secondary uppercase font-[700] text-base lg:text-xl ">
                      {version.price} USD
                    </p>
                    <p className="text-sm sm:text-lg text-gray-400">
                      {item.description}
                    </p>
                    <p className=" font-cardo text-center font-[600] text-lg lg:text-xl">
                      <span className="w-[15px] h-[15px]  rounded-full inline-block bg-secondary mr-3  " />
                      <span>{version.type}</span>
                    </p>
                    <button className="btn  bg-white border-secondary hover:bg-secondary text-primary">
                      Order Now
                    </button>
                  </Link>
                ));
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurStore;
