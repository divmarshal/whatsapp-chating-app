import React from "react";
import Home from "./Home";
import MobileView from "./MobileView";

const Root = () => {
  return (
    <>
      <div className="bg-primary h-[20vh] hidden md:block"></div>
      <div className="bg-gray-50 h-[80vh] hidden md:block"></div>
      <Home />
      <MobileView />
    </>
  );
};

export default Root;

// const [isMobileView, setIsMobileView] = useState(false);

// window.addEventListener("resize", (e) => {
//   const width = window.innerWidth;
//   setIsMobileView(width < 768);
// });
