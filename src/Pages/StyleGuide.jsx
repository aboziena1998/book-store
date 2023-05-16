import Form from "../components/Form";
import Blockquote from "../components/Blockquote";
import Button from "../components/Button";
import Heading from "../components/Heading";

const StyleGuide = () => {
  return (
    <>
      <section className="banner">
        <div className="wrapper">
          <Heading color={"white"} dashColor={"secondary"}>
            Style Guide
          </Heading>
          <p className="text-[#b4c7e7] text-lg px-20 py-6">
            All the default tag styles are listed here to know how it's <br />{" "}
            exactly shown in the template.
          </p>
        </div>
      </section>
      <section className="py-24">
        <div className="wrapper">
          <h2 className="h4 mb-7 text-primary">Colors</h2>
          <div className="flex flex-col  sm:flex-row gap-5 flex-wrap">
            <div className="basis-1/4 text-center flex flex-col gap-3">
              <div className="bg-primary w-full h-52" />
              <h2 className="h4">#f23ac4</h2>
            </div>
            <div className=" basis-1/4 text-center  flex flex-col gap-3">
              <div className="bg-red-600 w-full h-52" />
              <h2 className="h4">#f23ac4</h2>
            </div>
            <div className="basis-1/4 text-center flex flex-col gap-3">
              <div className="bg-yellow-500  w-full h-52" />
              <h2 className="h4">#f23ac4</h2>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrapper">
          <h2 className="h4 mb-7 text-primary">Paragraph</h2>
          <p className="text-gray-400 text-lg ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            iure? Praesentium voluptas sint rem ipsam laborum? Unde dolorum
            voluptate quod? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Officia nulla similique ipsam, dolore nisi reiciendis est.
            Consequuntur, iusto, ratione nihil provident, commodi in reiciendis
            voluptas rerum recusandae enim tempora architecto!
          </p>
        </div>
      </section>
      <section>
        <div className="wrapper">
          <h2 className="h4 mb-7 text-primary">Buttons</h2>
          <div className="grid  grid-cols-1 lg:grid-cols-2 w-[70%] gap-7 items-start justify-start place-items-start">
            <button className="btn bg-secondary outline-secondary text-primary hover:bg-white">
              Button Text
            </button>
            <button className="btn bg-white outline-secondary text-primary hover:bg-secondary">
              Button Text
            </button>
            <button className="btn big bg-secondary outline-secondary text-primary hover:bg-white ">
              Button Text
            </button>
            <button className="btn big bg-white outline-secondary text-primary hover:bg-secondary">
              Button Text
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="wrapper text-primary flex flex-col gap-4">
          <h2 className="h4 mb-7 text-primary">Paragraph</h2>
          <h1 className="h1">Heading H1 Title</h1>
          <h2 className="h2">Heading H2 Title</h2>
          <h3 className="h3">Heading H3 Title</h3>
          <h4 className="h4">Heading H4 Title</h4>
          <h5 className="h5">Heading H5 Title</h5>
          <h6 className="h6">Heading H6 Title</h6>
        </div>
      </section>
      <section>
        <div className="wrapper text-primary ">
          <h2 className="h4 mb-7 text-primary">List</h2>
          <ul className="flex flex-col gap-2 list-disc text-xl pl-4 mb-10">
            <li>
              They has been helping readers, music lovers, and videophiles find
            </li>
            <li>
              Bookstore serving up the full spectrum of Black literature and
              wine black books.
            </li>
            <li>
              We help physical bookstores manage their overstock to the book
              inventory.
            </li>
          </ul>
          <ol className="flex flex-col gap-2 list-decimal text-xl pl-4 mb-10">
            <li>
              They has been helping readers, music lovers, and videophiles find
            </li>
            <li>
              Bookstore serving up the full spectrum of Black literature and
              wine black books.
            </li>
            <li>
              We help physical bookstores manage their overstock to the book
              inventory.
            </li>
          </ol>
        </div>
      </section>
      <section>
        <div className="wrapper">
          <h2 className="h4 mb-7 text-primary ">Blockquote</h2>
          <Blockquote>
            We believe that bookstores are essential to a healthy culture.
            They’re where authors can connect with readers. new writers, where
            children get hooked on the thrill of reading that can last a
            lifetime.
          </Blockquote>
        </div>
      </section>
      <section>
        <div className="wrapper">
          <h2 className="h4 mb-7 text-primary ">Blockquote</h2>
          <Form />
        </div>
      </section>
    </>
  );
};

export default StyleGuide;
