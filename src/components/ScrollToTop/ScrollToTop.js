import React, { useState, useEffect } from "react";
import { BackTop } from "antd";
import { BackToTop, IconUp } from "./styled";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return isVisible ? (
    <BackTop>
      <BackToTop onClick={scrollToTop}>
        <IconUp />
      </BackToTop>
    </BackTop>
  ) : null;
};
export default ScrollToTop;
