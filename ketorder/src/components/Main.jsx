import React from "react";
import SucDivAndWaitDiv from "./SucDivAndWaitDiv";
import Product from "./Product";
import Comments from "./Comments";

const Main = () => {
  return (
    <div className="MainDiv">
      <Product />
      <div className="ExperAndHrDiv">
        <h4>How was your experience?</h4>
        <hr />
      </div>
      <Comments />
    </div>
  );
};

export default Main;
