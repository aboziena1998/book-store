import React from "react";
import Heading from "../components/Heading";
import { articlesData } from "../../data";
import ArticlePreviewCard from "../components/ArticlePreviewCard";

const Articles = () => {
  return (
    <>
      <section className="banner ">
        <div className="wrapper">
          <Heading color={"white"} dashColor={"secondary"}>
            Articles
          </Heading>
          <p className="text-center text-gray-300 text-sm md:text-lg leading-6  mt-8">
            Every single details in the book store like offers latest news about
            the events <br />
            has more attractive and provide a seamless user experience.
          </p>
        </div>
      </section>

      <section className="bg-neutral">
        <div className="wrapper">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {articlesData.map(item => (
              <ArticlePreviewCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Articles;
