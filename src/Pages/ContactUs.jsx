import Heading from "../components/Heading";
import { FiHome, FiPhoneCall } from "react-icons/fi";
import { SlEnvolope } from "react-icons/sl";
import Form from "../components/Form";
import Accordion from "../components/Accordion";

const ContactUs = () => {
  return (
    <>
      <section className="banner ">
        <div className="wrapper">
          <Heading color={"white"} dashColor={"secondary"}>
            contact us
          </Heading>
          <p className="text-center text-gray-300 text-sm md:text-lg leading-6  mt-8">
            Whether you have a question about features, pricing or anything else
            about the books,
            <br />
            our team is ready to answer all your questions.
          </p>
        </div>
      </section>
      <section className=" ">
        <div className="wrapper">
          <div className="flex flex-col gap-6 items-start xl:flex-row ">
            <div className="flex-1 flex flex-col gap-6">
              <Heading
                color={"primary"}
                dashColor={"secondary"}
                direction={"left"}
                headingStyle={"text-left"}
              >
                Keep in touch
              </Heading>
              <p className=" text-gray-400 text-sm md:text-lg leading-6  mt-8">
                We believe that bookstores are essential to a healthy culture.
                They’re where authors can connect with readers. You can connect
                with us with these details.
              </p>
              <div className="flex flex-col  gap-8">
                <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 ">
                  <span className=" count-icon before:hidden bg-primary">
                    <h3 className=" text-3xl my-auto font-thin text-secondary">
                      <FiHome strokeWidth={1} />
                    </h3>
                  </span>
                  <div className="sm:inline-block">
                    <h5 className="text-xl font-cardo font-bold capitalize">
                      Visit us :
                    </h5>
                    <p className=" text-gray-400">
                      No:09a, Downtown, San Diego, USA.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 ">
                  <span className=" count-icon before:hidden bg-primary">
                    <h3 className=" text-3xl my-auto font-thin text-secondary">
                      <SlEnvolope />
                    </h3>
                  </span>
                  <div className="sm:inline-block">
                    <h5 className="text-xl font-cardo font-bold capitalize">
                      drop us :
                    </h5>
                    <a
                      href="mailto:support@pages.com"
                      className=" text-gray-400 text-sm"
                    >
                      support@pages.com
                    </a>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 ">
                  <span className=" count-icon before:hidden bg-primary">
                    <h3 className=" text-3xl my-auto font-thin text-secondary">
                      <FiPhoneCall strokeWidth={1.5} />
                    </h3>
                  </span>
                  <div className="sm:inline-block">
                    <h5 className="text-xl font-cardo font-bold capitalize">
                      call us :
                    </h5>
                    <a
                      href="tel:18001239999"
                      className=" text-gray-400 text-sm"
                    >
                      Call: 1-800-123-9999
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex-1 ">
              <Form />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-neutral">
        <div className="wrapper">
          <Heading dashColor={"secondary"} color={"primary"}>
            Frequent Questions?
          </Heading>
          <div className="flex flex-col w-full items-center mt-10 ">
            <Accordion />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
