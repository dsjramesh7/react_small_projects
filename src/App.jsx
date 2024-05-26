import React from "react";
import Accordian from "./components/accordian/Accordian";
import RandomColor from "./components/randomColoGenerator/RandomColor";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider/ImageSlider";
import LoadMoreData from "./components/loadMoreData/LoadMoreData";
import MenuBar from "./components/tree-view/MenuBar";

const App = () => {
  return (
    <>
      {/* Accordian Component  */}
      {/* <Accordian /> */}

      {/* Random Color Component  */}
      {/* <RandomColor /> */}

      {/* StarRating Component */}
      {/* <StarRating noOfStars={10} /> */}

      {/* ImageSlider Component  */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} page={1} /> */}

      {/* loadMoreData component  */}
      {/* <LoadMoreData /> */}

      {/* Tree-view component  */}
      <MenuBar />
    </>
  );
};

export default App;
