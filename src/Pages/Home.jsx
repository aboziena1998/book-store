import HeroImg from "../assets/second_book.png";
import Author from "../assets/autor_image.jpg";
import QRCode from "../assets/qr.jpg";
import ReadingWoman from "../assets/reading_woman.jpg";
import CoffeeImage from "../assets/coffee_image.png";
import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import Client1 from "../assets/client1.jpg";
import Client2 from "../assets/client2.jpg";
import Client3 from "../assets/client3.jpg";
import {
  BsCircleHalf,
  Bs1CircleFill,
  BsCircle,
  BsCircleFill,
} from "react-icons/bs";
import {
  articlesData,
  booksData,
  knowladgeSectionData,
  trustedByData,
} from "../../data";
import { Rating } from "../components/Rating";
import ArticlePreviewCard from "../components/ArticlePreviewCard";
import CallToAction from "../components/CallToAction";

const Home = () => {
  return (
    <div>
      <section className="banner  ">
        <div className="wrapper  flex flex-col gap-8  xl:flex-row items-center justify-between text-white  ">
          <div className="flex flex-col  justify-center gap-2 ">
            <h4 className="text-xl text-start italic font-cardo font-thin  relative before:absolute before:w-8 before:h-[2px] before:bg-secondary before:top-[50%] before:-left-12 ml-12  mb-4 tracking-wider capitalize">
              Welcome to Pages!!!
            </h4>
            <h1 className=" w-fit text-start header text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[65px] font-[700]  ">
              Your Books From <br /> The Best Writer.
            </h1>
            <p className="text-sm xl:text-base text-gray-300 text-start py-4">
              We believe that reading books are essential to a healthy culture.
              <br /> They’re where authors can connect with readers.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-7 sm:gap-12 pb-4">
              <button className=" btn bg-secondary outline-secondary text-primary hover:bg-primary hover:text-white">
                Order Today
              </button>
              <Link
                to="/contactus"
                className="font-cardo text-base underline underline-offset-8 hover:text-secondary font-bold capitalize tracking-wide"
              >
                Read free demo
              </Link>
            </div>
            <div className="flex flex-col  items-start lg:flex-row gap-3 justify-around">
              <div className="flex flex-col gap-3 items-start ">
                <p className="text-lg font-bold font-cardo text-center">
                  <span className="w-[15px] h-[15px] block mb-3 md:mb-0 md:inline-block rounded-full bg-secondary md:mr-3  " />
                  <span>Pages:</span>
                </p>
                <p className=" text-gray-300 text-base md:ml-6 font-[400]">
                  250 pages
                </p>
              </div>
              <div className="flex flex-col gap-3 items-start ">
                <p className="text-lg font-bold font-cardo text-center">
                  <span className="w-[15px] h-[15px] block mb-3 md:mb-0 md:inline-block rounded-full bg-secondary md:mr-3  " />
                  <span>Length:</span>
                </p>
                <p className=" text-gray-300 text-base md:ml-6 font-[400]">
                  10 Hours
                </p>
              </div>
              <div className="flex flex-col gap-3 items-start ">
                <p className="text-lg font-bold font-cardo text-center">
                  <span className="w-[15px] h-[15px] block mb-3 md:mb-0 md:inline-block rounded-full bg-secondary md:mr-3  " />
                  <span>Rating:</span>
                </p>
                <p className=" text-gray-300 text-base md:ml-6 font-[400]">
                  4.5/5 (305 ratings)
                </p>
              </div>
            </div>
          </div>
          <img src={HeroImg} alt="" className="w-full md:w-auto" />
        </div>
      </section>

      <section className="pb-6">
        <div className="wrapper ">
          <Heading dashColor={"secondary"} color={"primary"}>
            The Author’s Book
          </Heading>
          <div className="flex flex-col xl:flex-row gap-14  w-full  my-12 text-primary">
            {booksData
              .map(book => {
                return {
                  version: book.versions[0],
                  description: book.description,
                };
              })
              .map(book => {
                return (
                  <Link
                    to={`/books/${book.version.path}`}
                    className="flex flex-col gap-14 xl:gap-6 justify-between font-inter lg:flex-row lg:items-center"
                    key={book.version.title}
                  >
                    <img
                      src={book.version.image}
                      className="xl:w-[50%] drop-shadow-xl"
                    />
                    <div className="flex flex-col gap-2 items-start justify-between  ">
                      <h3 className="text-[1.7rem] font-cardo font-[600] text-primary ">
                        {book.version.title}
                      </h3>
                      <p className="text-secondary uppercase font-[700] text-lg ">
                        {book.version.price} USD
                      </p>
                      <p className="text-gray-400 text-sm ">
                        {book.description}
                      </p>
                      <p className="text-xl font-cardo text-center font-[600]">
                        <span className="w-[15px] h-[15px]  rounded-full inline-block bg-secondary mr-3  " />
                        <span>Printed Book</span>
                      </p>
                      <button className="btn  bg-white border-secondary hover:bg-secondary text-primary">
                        Order Now
                      </button>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
      {/*     */}
      <section className="bg-neutral py-14 font-inter ">
        <div className="wrapper flex flex-col xl:flex-row  gap-14 xl:gap-32">
          <div className="framed-image ">
            <img src={Author} alt="" className="w-full h-full" />
          </div>
          <div className=" xl:basis-[50%] flex flex-col items-start justify-between ">
            <Heading
              color={"primary"}
              dashColor={"secondary"}
              direction={"left"}
            >
              about the author
            </Heading>
            <p className="text-gray-400 text-base  my-6  leading-7">
              We believe that bookstores are essential to a healthy culture.
              They’re where authors can connect with readers, where we discover
              new writers, where children get hooked on the thrill of reading
              that can last a lifetime.
            </p>
            <div className="flex flex-col md:flex-row  my-6">
              <div className="p-3 shrink-0  md:border-r-[1px] border-x-0 border-y-0 md:border-solid md:border-secondary ">
                <span className="h3 font-bold text-primary font-cardo ">
                  02
                </span>
                <p className="capitalize text-gray-400 text-base">
                  Book Published
                </p>
              </div>
              <div className="p-3 shrink-0 md:pl-8  md:border-r-[1px]  border-x-0 border-y-0 md:border-solid md:border-secondary">
                <span className="h3 font-bold text-primary font-cardo ">
                  4.5
                </span>
                <p className="capitalize text-gray-400 text-base">
                  User Review
                </p>
              </div>
              <div className="p-3 shrink-0 md:pl-8   ">
                <span className="h3 font-bold text-primary font-cardo ">
                  04
                </span>
                <p className="capitalize text-gray-400 text-base">
                  Best seller Awards
                </p>
              </div>
            </div>
            <div className="w-full lg:w-fit flex flex-col md:flex-row gap-4 xl:gap-10   p-4 bg-primary  items-start sm:items-center ">
              <img src={QRCode} alt="" className="flex-shrink-1" />
              <div className="flex flex-col justify-between   ">
                <p className="text-base font-cardo   text-secondary font-[600]">
                  John Abraham , Ph.d
                </p>
                <p className="text-gray-300 text-base">
                  Mail: <a href="">johnabraham@gmail.com</a>
                </p>
                <p className="text-gray-300 text-base">
                  Phone: <a href="">(+2) 123 545 9000</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                />
                <h3 className="h6 font-[600]">{item.title}</h3>
                <p className="text-gray-400 text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary ">
        <div className="wrapper ">
          <div className="flex flex-col items-center  lg:flex-row text-white gap-4 lg:gap-8 justify-between lg:py-8  ">
            <div className="flex flex-col items-start">
              <Heading
                dashColor={"secondary"}
                color={"white"}
                direction={"left"}
              >
                get book copy today!
              </Heading>
              <p className="text-gray-300 text-base   my-8">
                We believe that bookstores are essential to a healthy culture.
                They’re where authors can connect with readers.
              </p>
              <button className=" btn bg-primary border-secondary text-white hover:bg-secondary">
                Order Today
              </button>
            </div>
            <img src={CoffeeImage} alt="" className="lg:w-[40%]" />
          </div>
        </div>
      </section>
      <section>
        <div className="wrapper ">
          <Heading dashColor={"secondary"} color={"primary"}>
            what will you learn?
          </Heading>
          <div className="flex flex-col xl:flex-row  mt-16 justify-between lg:items-center xl:items-stretch gap-8 ">
            <div className="grid grid-cols-1 items-start  lg:grid-cols-2 h-fit gap-4 font-cardo  text-primary  text-start mt-5   lg:order-2 xl:order-1 lg:basis-1/2 ">
              <div className="bg-gray-100 p-6">
                <span className=" w-[50px] h-[50px] rounded-full  bg-secondary text-xl text-center place-content-center grid mb-7 font-bold">
                  01
                </span>
                <p className="text-xl font-bold ">
                  Use HDFS & Map Reduce for storing & analyzing data at scale.
                </p>
              </div>
              <div className="bg-gray-100 p-6">
                <span className=" w-[50px] h-[50px] rounded-full  bg-secondary text-xl text-center place-content-center grid mb-7 font-bold">
                  02
                </span>
                <p className="text-xl font-bold ">
                  Analyze non-relational data using HBase, Cassandra, and
                  MongoDB.
                </p>
              </div>
              <div className="bg-gray-100 p-6">
                <span className=" w-[50px] h-[50px] rounded-full  bg-secondary text-xl text-center place-content-center grid mb-7 font-bold">
                  03
                </span>
                <p className="text-xl font-bold ">
                  Consume streaming data using Spark Streaming, Flink, and
                  Storm.
                </p>
              </div>
              <div className="bg-gray-100 p-6">
                <span className=" w-[50px] h-[50px] rounded-full  bg-secondary text-xl text-center place-content-center grid mb-7 font-bold">
                  04
                </span>
                <p className="text-xl font-bold ">
                  Analyze non-relational data using HBase, Cassandra, and
                  MongoDB.
                </p>
              </div>
            </div>
            <div className="framed-image lg:order-1 xl:order-2 lg:mb-7  shadow-xl">
              <img src={ReadingWoman} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-neutral">
        <div className="wrapper">
          <div className="flex flex-col items-center w-full">
            <Heading color={"primary"} dashColor={"secondary"}>
              Enhance knowladge & vision
            </Heading>
            <div className="grid grid-cols-1 xl:grid-cols-2 items-start gap-6 my-16">
              {knowladgeSectionData.map(item => (
                <div
                  className="flex flex-col p-9 gap-4 bg-white "
                  key={item.title}
                >
                  <h3 className="font-cardo text-xl capitalize font-bold">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-base">{item.text}</p>
                  <div className="flex flex-col lg:flex-row gap-4 items-start ">
                    <div className="flex flex-col lg:flex-row items-center">
                      <p className="text-lg text-center font-[600] font-cardo">
                        <span className="w-[15px] h-[15px]  rounded-full inline-block bg-secondary mr-3  " />
                        <span>Pages:</span>
                      </p>
                      <p className=" text-gray-400 ml-6 mt-4 lg:mt-0">
                        {item.numberOfPages}Pages
                      </p>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center">
                      <p className="text-lg text-center font-[600] font-cardo">
                        <span className="w-[15px] h-[15px]  rounded-full inline-block bg-secondary mr-3  " />
                        <span>Length:</span>
                      </p>
                      <p className=" text-gray-400 ml-6 mt-4 lg:mt-0 text-base">
                        {item.length}Pages
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/contactus"
              className=" btn big bg-secondary border-secondary text-primary hover:bg-white hover:text-primary"
            >
              start free 15-days free trail
            </Link>

            <p className="text-base text-gray-400 mt-6 text-center">
              Short description about each chapter <br />
              <Link to="/contactus" className="text-blue-700">
                Have any question?
              </Link>{" "}
              Contact us
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="wrapper">
          <div className="flex flex-col items-center gap-6 xl:flex-row xl:gap-10 my-[4rem]">
            <div className="flex flex-col gap-3 items-start text-primary  flex-shrink-[1] ">
              <Heading
                dashColor={"secondary"}
                color={"primary"}
                direction={"left"}
                headingStyle={"text-start"}
              >
                words from our <br /> readers
              </Heading>
              <p className="text-base text-gray-400 my-6">
                We believe that bookstores are essential to a healthy culture.
                They’re where authors can connect with readers, where we
                discover new writers, where children get hooked on the thrill of
                reading that can last a lifetime.
              </p>
              <p className="flex items-center gap-1 text-lg font-cardo font-bold">
                <Rating size={20} rate={4.5} />
                (4.8/5)
              </p>
              <p className="text-base capitalize ">Overall customer ratings</p>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 xl:grid-rows-2  gap-10  xl:flex-wrap xl:grid-flow-col  xl:gap-4 xl:place-content-between flex-shrink-[.7] ">
              {/* client 1 */}
              <div className="bg-primary text-white p-6 flex flex-col gap-3 items-start ">
                <div className="flex flex-col md:flex-row items-start gap-5 lg:items-center">
                  <img src={Client1} alt="Client" className="rounded-full" />
                  <h4 className="text-xl font-bold font-cardo capitalize ">
                    <span className="mb-3 inline-block">James Williams</span>{" "}
                    <br className="" />
                    <Rating size={12} rate={4.5} />
                  </h4>
                </div>
                <p className="font-cardo capitalize font-bold text-lg">
                  “ Great Books Collections ”
                </p>
                <p className="text-base text-gray-300">
                  I was searching this book for many years and I was happy that
                  I could find it here.
                </p>
              </div>
              {/* client 2 */}
              <div className="bg-primary text-white p-6 flex flex-col gap-3 items-start xl:h-fit">
                <div className="flex flex-col md:flex-row items-start gap-5 lg:items-center">
                  <img src={Client2} alt="Client" className="rounded-full" />
                  <h4 className="text-xl font-bold font-cardo capitalize ">
                    <span className="mb-3 inline-block">Chris Adams</span>{" "}
                    <br className="" />
                    <Rating size={12} rate={4} />
                  </h4>
                </div>
                <p className="font-cardo capitalize font-bold text-lg">
                  “ Perfect Response Author”
                </p>
                <p className="text-base text-gray-300">
                  I had a question about the book and the author response was
                  great & comfort.
                </p>
              </div>
              {/* client 3 */}
              <div className="bg-primary text-white p-6 flex flex-col gap-3 items-start  xl:self-end xl:translate-y-32">
                <div className="flex flex-col md:flex-row items-start gap-5 lg:items-center">
                  <img src={Client3} alt="Client" className="rounded-full" />
                  <h4 className="text-xl font-bold font-cardo capitalize ">
                    <span className="mb-3 inline-block">Angeline Flora</span>{" "}
                    <br className="" />
                    <Rating size={12} rate={4.5} />
                  </h4>
                </div>
                <p className="font-cardo capitalize font-bold text-lg">
                  “ Creative Writing Skill”
                </p>
                <p className="text-base text-gray-300">
                  Sent an email after to books arrived to ask about the author &
                  I received a reply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral">
        <div className="wrapper">
          <Heading color={"primary"} dashColor={"secondary"}>
            Articles & Resources
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {articlesData.slice(0, 3).map(item => (
              <ArticlePreviewCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper ">
          <CallToAction />
        </div>
      </section>
    </div>
  );
};

export default Home;
