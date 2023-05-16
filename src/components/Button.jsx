const Button = ({ text, style, isLarge }) => {
  return (
    <button
      type="button"
      className={`btn ${style} ${
        isLarge ? "px-12 md:px-14 lg:px-20" : "px-6 md:px-9 lg:px-12"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
