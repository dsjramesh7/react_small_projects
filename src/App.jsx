import React from "react";
import Accordian from "./components/accordian/Accordian";
import RandomColor from "./components/randomColoGenerator/RandomColor";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider/ImageSlider";
import LoadMoreData from "./components/loadMoreData/LoadMoreData";
import MenuBar from "./components/tree-view/MenuBar";
import QRCodeGenerator from "./components/qr-code-generator/Qr";
import Ldmode from "./components/light-dark-mode/Ldmode";
import ScrollIndicator from "./components/scroll-indicator";
import TodoList from "./components/todoList/TodoList";

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
      {/* <MenuBar /> */}

      {/* QR code component  */}
      {/* <QRCodeGenerator /> */}

      {/* LightDark Mode Component  */}
      {/* <Ldmode /> */}

      {/* scroll indicator component */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}

      {/* Todo list  */}
      <TodoList />
    </>
  );
};

export default App;
