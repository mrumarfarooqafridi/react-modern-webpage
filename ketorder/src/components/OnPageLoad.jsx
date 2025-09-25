import React, { useState, useEffect } from "react";
import SucDivAndWaitDiv from "./SucDivAndWaitDiv";

const OnPageLoad = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setStep(1), 1000), // show "Finding Product"
      setTimeout(() => setStep(2), 2500), // show "(1) Product Found"
      setTimeout(() => setStep(3), 4000), // show "Approved"
      setTimeout(() => setStep(4), 5000), // hide spinner after Approved
    ];
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="OnPageLoadMainDiv">
      {/* Waiting State */}
      <SucDivAndWaitDiv
        waitingH2Text="Waiting!"
        waitingH5Text="You will be Approved to get a product"
      />

      {/* Animated Steps */}
      <div className="FindingProductDiv">
        {step >= 1 && (
          <div className="animate-zoom">
            <small>Finding Product</small>
          </div>
        )}
        {step >= 2 && (
          <div className="animate-fade">
            <small>(1) Product Found</small>
          </div>
        )}
        {step >= 3 && (
          <div className="animate-pop">
            <span>Approved</span>
          </div>
        )}
        {/* Futuristic Spinner */}
        {step < 4 && (
          <div className="SpinnerDiv">
            <div className="spinner"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnPageLoad;
