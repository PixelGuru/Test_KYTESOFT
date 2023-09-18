import React, { useState, useEffect } from "react";
import { BackTop } from "antd";
import { BackToTop, IconUp } from "./styled";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Lấy vị trí cuộn dọc hiện tại
      const currentScrollY = window.scrollY;

      // Xác định liệu nút cuộn lên có nên hiển thị hay không
      setIsVisible(currentScrollY > 0);
    };

    // Thêm sự kiện lắng nghe cuộn trang
    window.addEventListener("scroll", handleScroll);

    // Loại bỏ sự kiện lắng nghe khi component unmount
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
