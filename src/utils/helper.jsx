import { BsCircle, BsCircleFill, BsCircleHalf } from "react-icons/bs";

export const formatToUSD = number => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const formattedNumber = formatter.format(number);

  return formattedNumber;
};

export const rating = (rateNumber, size) => {
  // if number is 5 fill the array with fiilled circle
  // if number is 0 fill the array with outlined circle
  // if number > 3.5 fill the array with outlined circle
  let result = [];
  let rateArray = Array(5).fill(<BsCircle size={size} />);
  if (rateNumber === 5) {
    rateArray.forEach((item, index) =>
      result.push(<BsCircleFill size={size} />)
    );
    return result;
  } else if (rateNumber < 5) {
    rateArray.map((item, index) => {
      if (index < Math.floor(rateNumber))
        result.push(<BsCircleFill size={size} />);
      else if (
        (rateNumber % 5) / rateNumber > 0 &&
        index === Math.floor(rateNumber)
      )
        result.push(<BsCircleHalf size={size} />);
      else result.push(<BsCircle size={size} />);
    });

    return result;
  }

  result = rateArray;

  return result;
};
