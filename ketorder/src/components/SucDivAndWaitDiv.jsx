import React from "react";

const SucDivAndWaitDiv = ({
  successH2Text,
  successH5Text,
  waitingH2Text,
  waitingH5Text,
}) => {
  return (
    <div className="SucDivAndWaitDiv">
      <div>
        <span>
          {waitingH2Text}
          {successH2Text}
        </span>
      </div>
      <div>
        <small>
          {waitingH5Text}
          {successH5Text}
        </small>
      </div>
    </div>
  );
};

export default SucDivAndWaitDiv;
