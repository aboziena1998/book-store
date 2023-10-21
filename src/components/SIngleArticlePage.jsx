import { useParams } from "react-router-dom";
import { articlesData } from "../../data";
import Heading from "./Heading";
import Blockquote from "./Blockquote";

const SIngleArticlePage = () => {
  const articleId = useParams();
  const article = articlesData.find(
    article => article.id === +articleId.articleId
  );
  return (
    <>
      <section className="banner">
        <div className="wrapper">
          <Heading color={"white"} dashColor={"secondary"}>
            {article.title}
          </Heading>
        </div>
      </section>
      <article>
        <div className="wrapper">
          <div className="object-cover overflow-hidden rounded-md shadow-lg">
            <img
              src={article.image}
              className="w-full "
              alt=""
              loading="lazy"
            />
          </div>
          <h4 className="font-bold font-cardo text-base my-6">
            October 6, 2021 / Classics
          </h4>
          <p className="text-gray-400 text-base md:text-lg my-6">
            Uniquely matrix economically sound value through cooperative
            technology. Competently parallel task fully researched data and
            enterprise process improvements. Collaboratively expedite quality
            manufactured products via client-focused results quickly communicate
            enabled technology and turnkey leadership skills. Uniquely enable
            accurate supply chains rather than friction technology.
          </p>
          <h1 className="font-bold text-lg sm:text-2xl xl:text-3xl py-2">
            The perfect book for all
          </h1>
          <p className="text-gray-400 text-base md:text-lg my-6">
            Appropriately empower dynamic leadership skills after business
            portals. Globally my coordinate interactive supply chains with
            distinctive quality vectors global sources services. Uniquely matrix
            economically sound value through cooperative technology. Competently
            parallel task fully researched data and enterprise process
            improvements.
          </p>
          <ul className="flex flex-col gap-3 mb-6  list-inside">
            <li className="list-item list-disc text-primary text-lg">
              Dynamically target high-payoff intellectual capital for customized
            </li>
            <li className="list-item list-disc text-primary text-lg">
              Interactively procrastinate high-payoff content
            </li>
            <li className="list-item list-disc text-primary text-lg">
              Credibly reinter mediate backend ideas for cross-platform models
            </li>
          </ul>
          <Blockquote>
            Crowdsource term sheet freemium beta stealth responsive web design
            niche market rock star channels.
          </Blockquote>

          <h2 className="font-bold text-xl sm:text-2xl">
            Make real time a story books
          </h2>
          <p className="text-gray-400 text-base md:text-lg my-2">
            Collaboratively administrate empowered markets via plug-and-play
            networks. Dynamically procrastinate B2C users after installed base
            benefits. Dramatically visualize customer directed convergence
            without revolutionary ROI.
          </p>
          <ol className="flex flex-col list-decimal gap-3 my-3 list-inside">
            <li className="list-item  text-primary text-lg">
              It brings the right people together with all the right information
              and tools to get work done
            </li>
            <li className="list-item  text-primary text-lg">
              We provide operational efficiency, data security, and flexible
              scale
            </li>
            <li className="list-item  text-primary text-lg">
              CYour best work, together in one package that works seamlessly
              from your computer
            </li>
            <li className="list-item  text-primary text-lg">
              Delivers the tools you need to save time Improve field performance
              always
            </li>
          </ol>
        </div>
      </article>
    </>
  );
};

export default SIngleArticlePage;
