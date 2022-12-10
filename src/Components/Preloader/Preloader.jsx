import React, { useEffect, useRef } from "react";
import "./Preloader.css";

const Preloader = () => {
  useEffect(() => {
    preloader.current.classList.add("active");
    preloaderTop.current.classList.add("active");
    preloaderBottom.current.classList.add("active");
    preloaderText.current.classList.add("active");
  });
  const preloader = useRef();
  const preloaderTop = useRef();
  const preloaderBottom = useRef();
  const preloaderText = useRef();
  return (
    <div className="preloader" ref={preloader}>
      <div className="preloader__top" ref={preloaderTop}></div>
      <div className="preloader__bottom" ref={preloaderBottom}></div>
      <div className="preloader__text" ref={preloaderText}>
        <h1 className="text text__m">M</h1>
        <h1 className="text text__o">A</h1>
      </div>
    </div>
  );
};

export default Preloader;
