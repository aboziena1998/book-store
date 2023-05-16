import { rating } from "../utils/helper";

export const Rating = ({ rate, size }) => {
  const ratings = rating(rate, size);
  return (
    <div className="flex  gap-1 text-secondary">
      {ratings.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};
