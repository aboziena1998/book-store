const Heading = ({
  children,
  direction,
  dashColor,
  color,
  extraStyle,
  headingStyle,
}) => {
  let dashPosition;

  if (direction === "left".toLocaleLowerCase()) dashPosition = "left-0 ";
  else if (direction === "right".toLocaleLowerCase()) dashPosition = "right-0";
  else dashPosition = "left-[50%] translate-x-[-50%]";
  return (
    <h1
      className={` relative py-4 lg:py-5 font-bold text-${color} capitalize text-[1.8rem] lg:text-4xl x:text-5xl ${
        headingStyle ?? "text-center"
      }`}
    >
      {children}
      <span
        className={`w-[60px] h-[3px] bg-${dashColor} absolute bottom-[0] ${dashPosition}  `}
      />
    </h1>
  );
};

export default Heading;
