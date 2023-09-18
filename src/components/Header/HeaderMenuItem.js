/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { CustomDownIcon, StyledDropdownLabel } from "./styled";

const HeaderMenuItem = ({ label, menu, showHeader }) => {
  console.log(showHeader);
  return (
    <StyledDropdownLabel overlay={menu}>
      <a
        className={showHeader ? "show" : ""}
        onClick={(e) => e.preventDefault()}
      >
        {label}
        <CustomDownIcon />
      </a>
    </StyledDropdownLabel>
  );
};

export default HeaderMenuItem;
