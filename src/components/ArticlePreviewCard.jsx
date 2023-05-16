/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ArticlePreviewCard = ({ item }) => {
  const { image, title, text, id } = item;
  return (
    <Link
      to={`/articles/${id}`}
      className=" overflow-hidden rounded-md text-primary  shadow-lg flex flex-col gap-4 bg-white "
    >
      <div className="flex-grow-0 ">
        <img src={image} alt="" className="object-cover w-full" />
      </div>
      <div className="flex flex-col justify-between h-full p-4 gap-2 lg:gap-3 flex-grow-0  ">
        <h4 className="text-[24px] font-cardo font-bold">{title}</h4>
        <p className="text-gray-400 text-base ">{text}</p>
        <div className="flex flex-col xl:flex-row xl:justify-between w-full gap-3 xl:gap-0  ">
          <button className="text-[19px] hover:text-secondary font-bold font-cardo underline underline-offset-2">
            Readmore
          </button>
          <p className="text-[19px]">October 6,2023</p>
        </div>
      </div>
    </Link>
  );
};

export default ArticlePreviewCard;
