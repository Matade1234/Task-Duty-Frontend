import React from "react";
import { useState } from "react";

const Dropdown1 = ({ setTag }) => {
  const [options, setOptions] = useState(["urgent", "important"]);
  const [selected, setSelected] = useState("urgent");
  const [isOpen, setIsOpen] = useState();
  return (
    <div>
      <p
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {selected}
      </p>
      <div>
        {isOpen
          ? options.map((option) => {
              return (
                <p
                  onClick={() => {
                    setSelected(option);
                    setTag(option);
                    setIsOpen(false);
                  }}
                  key={option}
                >
                  {option}
                </p>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Dropdown1;
