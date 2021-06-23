import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
const items = [
  {
    title: "What is React?",
    content: "React is a JS libaray",
  },
  {
    title: "What is React?",
    content: "React is a JS libaray",
  },
  {
    title: "What is React?",
    content: "React is a JS libaray",
  },
];

export default () => {
    // const [selected, setSelected] = useState(options[0]);
    // const [showDropdown, setShowDropdown] = useState(true);
  return (
      <div>
          {/* <button onClick={()=>setShowDropdown(!showDropdown)}>
              Toggle Dropdown
          </button>
          {showDropdown ?
              <Dropdown
              selected={selected}
              onSelectedChange={setSelected}
              options={options}
          />:null} */}

          <Translate/>
    </div>
  );
};
