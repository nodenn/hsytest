import React, { useState, useEffect, useRef } from "react";
import r from "@/styles/ui/TopBtn.module.css";

export const TopBtn = () => {
  const [showBtn, setShowBtn] = useState(false);

  const scrollTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleShowBtn = () => {
      if (window.scrollY > 500) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };

    window.addEventListener("scroll", handleShowBtn);
    return () => {
      window.removeEventListener("scroll", handleShowBtn);
    };
  }, []);

  return (
    showBtn && (
      <div className={r.topWrap}>
        <button id={r.top} onClick={scrollTop} type="button">
          Top
        </button>
      </div>
    )
  );
};
