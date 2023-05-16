import React, { useEffect, useRef, useState } from "react";
import Heading from "./Heading";
import { accordionData } from "../../data";
import { BsChevronDown } from "react-icons/bs";
import { useHandleOutsideClick } from "../hooks/useHandleOutsideClick";

const Accordion = () => {
  const [selectedIndex, setSelectedIndex] = useState();
  const accordionRef = useRef(null);

  const handleToglleColapse = (e, index) => {
    e.stopPropagation();
    if (index === selectedIndex) {
      console.log("here");
      return setSelectedIndex(null);
    }
    setSelectedIndex(index);
  };

  const clicked = useHandleOutsideClick(accordionRef);

  useEffect(() => {
    if (clicked) setSelectedIndex(null);
  }, [clicked]);

  return (
    <div
      className="accordion"
      aria-labelledby="accordion-heading"
      role="tablist"
    >
      {accordionData.map((item, index) => {
        return (
          <div
            role="tab"
            className="accordion-item"
            tabIndex={0}
            key={index}
            ref={index === selectedIndex ? accordionRef : null}
          >
            <div
              className="accordion-label-container py-4 "
              onClick={e => handleToglleColapse(e, index)}
            >
              <div className="accordion-item-label " tabIndex={0}>
                <h1>{item.question}</h1>
              </div>
              <button
                className={`accordion-item-button ${
                  selectedIndex === index ? "rotate-180" : "rotate-0"
                } hidden sm:block`}
                onClick={e => handleToglleColapse(e, index)}
              >
                <BsChevronDown strokeWidth={2} />
              </button>
            </div>
            <div
              className={`accordion-item-content ${
                selectedIndex === index ? "open" : ""
              }`}
            >
              <p className="cursor-text">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
