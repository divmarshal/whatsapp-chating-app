import React, { useState } from "react";
import Home from "./Home";
import MobileView from "./MobileView";

const Root = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  window.addEventListener("resize", (e) => {
    const width = window.innerWidth;
    setIsMobileView(width < 768);
  });

  return (
    <>
      {isMobileView ? (
        <MobileView />
      ) : (
        <>
          {" "}
          <div className="bg-primary h-[20vh]"></div>
          <div className="bg-gray-50 h-[80vh]"></div>
          <Home />
        </>
      )}
    </>
  );
};

export default Root;
