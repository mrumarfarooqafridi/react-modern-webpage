import React, { useState, useEffect } from "react";
import OnPageLoad from "./components/OnPageLoad";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SucDivAndWaitDiv from "./components/SucDivAndWaitDiv";

const App = () => {
  const [showOnPageLoad, setShowOnPageLoad] = useState(true);

  useEffect(() => {
    // Hide OnPageLoad after animations + 1s buffer (~6s total)
    const timer = setTimeout(() => {
      setShowOnPageLoad(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="AppMainDiv">
      <Header />
      <div className="RenderingDiv">
        {showOnPageLoad ? (
          <OnPageLoad />
        ) : (
          <>
            <SucDivAndWaitDiv
              successH2Text="Success!"
              successH5Text="You have been Approved to get a product"
            />
            <Main />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
