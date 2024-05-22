import React, { useState } from "react";
import "./Accordianstyle.css";
import data from "./data";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    // console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId) => {
    let cpyMultiple = [...multipleSelected];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
    // console.log(findIndexOfCurrentId)
    if (findIndexOfCurrentId === -1) {
      cpyMultiple.push(getCurrentId);
    } else {
      cpyMultiple.splice(findIndexOfCurrentId, 1);
    }

    setMultipleSelected(cpyMultiple);
  };
  return (
    <>
      <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
          Enable Mulitverse
        </button>
        <div className="accordian">
          {/* {console.log(data)} */}
          {data && data.length > 0 ? (
            data.map((item) => (
              <div className="item" key={item.id}>
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(item.id)
                      : () => handleSingleSelection(item.id)
                  }
                  className="title"
                >
                  <h3>{item.question}</h3>
                  <span>+</span>
                </div>
                {enableMultiSelection
                  ? multipleSelected.indexOf(item.id) !== -1 && (
                      <p className="acc-content">{item.answer}</p>
                    )
                  : selected === item.id && (
                      <p className="acc-content">{item.answer}</p>
                    )}
              </div>
            ))
          ) : (
            <p>No data present</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordian;
