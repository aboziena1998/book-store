import Heading from "../components/Heading";
import AuthorImage2 from "../assets/author_image-2.jpg";
import AuthorImage3 from "../assets/author-3.jpg";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { booksData, trustedByData } from "../../data";
import CallToAction from "../components/CallToAction";
import { Link } from "react-router-dom";

const About = () => {
  const match = useBreakpoint(464);
  return (
    <>
      <section className="banner ">
        <div className="wrapper">
          <Heading color={"white"} dashColor={"secondary"}>
            About Author
          </Heading>
          <p className="text-center text-gray-300 text-sm md:text-lg leading-6  mt-8">
            Here you can discover how Pages reach this boundary and having a
            <br /> grown on the principles of writing and the reading.
          </p>
        </div>
      </section>
      <section className="bg-neutral">
        <div className="wrapper">
          <div className="w-full shadow-xl">
            <img
              src={AuthorImage2}
              alt="Author"
              className="w-full "
              loading="lazy"
            />
          </div>
          <div
            className={`flex flex-col gap-16 xl:flex-row  mt-10 lg:w-[60%] xl:w-full`}
          >
            <div className="w-full px-4 md:px-6 py-6 p-12 shadow-md bg-white rounded-md">
              <div
                className={`flex  ${
                  match
                    ? "flex-row items-center justify-between "
                    : "flex-col  "
                }  mb-2 md:mb-6`}
              >
                <h4 className="text-base font-bold font-cardo sm:text-xl capitalize  ">
                  Country:
                </h4>
                <p className="text-gray-400 text-sm lg:text-lg capitalize    ">
                  United Kingdom
                </p>
              </div>
              <div
                className={`flex  ${
                  match
                    ? "flex-row items-center justify-between "
                    : "flex-col  "
                }  mb-2 md:mb-6`}
              >
                <h4 className="text-base font-bold font-cardo sm:text-xl capitalize  ">
                  Language:
                </h4>
                <p className="text-gray-400 text-sm lg:text-lg capitalize    ">
                  English
                </p>
              </div>
              <div
                className={`flex  ${
                  match
                    ? "flex-row items-center justify-between "
                    : "flex-col  "
                }  mb-2 md:mb-6`}
              >
                <h4 className="text-base font-bold font-cardo sm:text-xl capitalize  ">
                  Genre:
                </h4>
                <p className="text-gray-400 text-sm lg:text-lg capitalize    ">
                  Historical
                </p>
              </div>
              <div
                className={`flex  ${
                  match
                    ? "flex-row items-center justify-between "
                    : "flex-col  "
                }  mb-2 md:mb-6`}
              >
                <h4 className="text-base font-bold font-cardo sm:text-xl capitalize  ">
                  First Publication:
                </h4>
                <p className="text-gray-400 text-sm lg:text-lg capitalize    ">
                  1991
                </p>
              </div>
              <div
                className={`flex  ${
                  match
                    ? "flex-row items-center justify-between "
                    : "flex-col  "
                }  mb-2 md:mb-6`}
              >
                <h4 className="text-base font-bold font-cardo sm:text-xl capitalize  ">
                  Follow Me On:
                </h4>
                <p className=" text-sm lg:text-lg capitalize  flex gap-4 text-primary  ">
                  <a
                    href="https://www.facebook.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaFacebookF size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaLinkedinIn size={18} />
                  </a>
                  <a
                    href="https://www.twitter.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <BsTwitter size={18} />
                  </a>
                </p>
              </div>
            </div>
            <div className="">
              <Heading
                dashColor={"secondary"}
                color={"primary"}
                direction={"left"}
                headingStyle={"text-4xl text-start"}
              >
                About Dr. John Abraham
              </Heading>
              <p className=" text-gray-400 leading-8  my-6 text-start  ">
                An author, a website or magazine, have a an organization that
                wants to recommend books, or even just a book-lover with an
                Instagram feed, you can sign up to be an affiliate, start your
                own shop, and be rewarded for your advocacy of books.
              </p>
              <button className="btn big bg-secondary text-primary hover:bg-inherit border-secondary font-bold">
                Contact Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrapper">
          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-around gap-10 ">
            <div className="flex flex-col gap-8 grow-0 ">
              <Heading
                dashColor={"secondary"}
                color={"primary"}
                direction={"left"}
                headingStyle={"text-start"}
              >
                My Story
              </Heading>
              <p className=" text-gray-400 text-sm sm:text-[19px] leading-8 ">
                We believe that bookstores are essential to a healthy culture.
                They’re where authors can connect with readers, where we
                discover new writers, where children get hooked on the thrill of
                reading.
              </p>

              <div className="flex flex-col  gap-8">
                <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 ">
                  <span className=" count-icon">
                    <h3 className=" text-3xl my-auto font-cardo font-bold">
                      01
                    </h3>
                  </span>
                  <div className="sm:inline-block">
                    <h5 className="text-xl font-cardo font-bold">
                      Great Author Awards - 2006
                    </h5>
                    <p className=" text-gray-400">
                      Won a best author of the year for my second & fourth book
                      about the science fiction.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-1 sm:gap-4 ">
                  <span className=" count-icon ">
                    <h3 className=" text-3xl my-auto font-cardo font-bold">
                      02
                    </h3>
                  </span>
                  <div className="sm:inline-block">
                    <h5 className="text-xl font-cardo font-bold">
                      Highest Rating For a Book - 2008
                    </h5>
                    <p className=" text-gray-400">
                      All of my books are rated highly from the book publisher
                      and also from the readers.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-1 sm:gap-4 ">
                  <span className=" count-icon before:hidden">
                    <h3 className=" text-3xl my-auto font-cardo font-bold">
                      03
                    </h3>
                  </span>
                  <div className="sm:inline-block">
                    <h5 className="text-xl font-cardo font-bold">
                      Highest Paid Author- 2014
                    </h5>
                    <p className=" text-gray-400">
                      Highest paid author for the decade based on the number of
                      selling books and novels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="shrink-0 shadow-xl self-center lg:self-start">
              <img src={AuthorImage3} alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-6">
        <div className="wrapper ">
          <Heading dashColor={"secondary"} color={"primary"}>
            The Author’s Book Includes
          </Heading>
          <div className="flex flex-col xl:flex-row gap-14  w-full  my-12 text-primary">
            {booksData
              .map(book => {
                return {
                  version: book.versions[0],
                  description: book.description,
                };
              })
              .map(book => (
                <Link
                  to={`/books/${book.version.path}`}
                  className="flex flex-col gap-14 xl:gap-6 justify-between font-inter lg:flex-row lg:items-center"
                  key={book.version.title}
                >
                  <img
                    src={book.version.image}
                    className="xl:w-[50%] drop-shadow-xl"
                    loading="lazy"
                  />
                  <div className="flex flex-col gap-2 items-start justify-between  ">
                    <h3 className="text-[1.7rem] font-cardo font-[600] text-primary ">
                      {book.version.title}
                    </h3>
                    <p className="text-secondary uppercase font-[700] text-lg ">
                      {book.version.price} USD
                    </p>
                    <p className="text-gray-400 text-sm ">{book.description}</p>
                    <p className="text-xl font-cardo text-center font-[600]">
                      <span className="w-[15px] h-[15px]  rounded-full inline-block bg-secondary mr-3  " />
                      <span>Printed Book</span>
                    </p>
                    <button className="btn  bg-white border-secondary hover:bg-secondary text-primary">
                      Order Now
                    </button>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/**
      [
        {
          version:[
            {},{},{}
          ]
        }
        ,
        {
          version:[]

        }
      ]
      
      
       */}

      <section>
        <div className="wrapper  flex flex-col gap-[5rem]">
          <Heading dashColor={"secondary"} color={"primary"}>
            Trusted by the best
          </Heading>
          <div className="flex flex-col    lg:flex-row flex-wrap  text-primary items-center justify-between">
            {trustedByData.map(item => (
              <div
                key={item.title}
                className="basis-1/4 flex flex-col px-4 gap-7 items-center text-center lg:basis-1/2 xl:basis-1/4 lg:mb-10 "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className=" h-[100px] object-contain"
                  loading="lazy"
                />
                <h3 className="h6 font-[600]">{item.title}</h3>
                <p className="text-gray-400 text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper ">
          <CallToAction />
        </div>
      </section>
    </>
  );
};

export default About;
