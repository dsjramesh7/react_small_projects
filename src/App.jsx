import React from "react";
import Accordian from "./components/accordian/Accordian";
import RandomColor from "./components/randomColoGenerator/RandomColor";
import StarRating from "./components/star-rating";

const App = () => {
  return (
    <>
      {/* Accordian Component  */}
      {/* <Accordian /> */}

      {/* Random Color Component  */}
      {/* <RandomColor /> */}

      {/* StarRating Component */}
      <StarRating noOfStars={10} />
    </>
  );
};

export default App;
