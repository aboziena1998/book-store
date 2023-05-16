import { useEffect, useState } from "react";

export const useHandleOutsideClick = ref => {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    const handleOutsideClick = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        return setClicked(true);
      }

      setClicked(false);
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref]);

  return clicked;
};
