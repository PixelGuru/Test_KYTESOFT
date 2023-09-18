/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  BoxImg,
  Content,
  Img,
  Info,
  LinkInMeNuSideBar,
  MenuSidebar,
  Price,
  StyledDrawer,
} from "./styled";

import { StyledRate } from "../Main/styled";
const SideBar = ({ open, onClose }) => {
  return (
    <StyledDrawer width={360} placement="right" onClose={onClose} open={open}>
      <MenuSidebar>
        <LinkInMeNuSideBar href="#">Home</LinkInMeNuSideBar>
        <LinkInMeNuSideBar href="#">Tours</LinkInMeNuSideBar>
        <LinkInMeNuSideBar href="#">Booking</LinkInMeNuSideBar>
        <LinkInMeNuSideBar href="#">Destinations</LinkInMeNuSideBar>
        <LinkInMeNuSideBar href="#">Pages</LinkInMeNuSideBar>
        <LinkInMeNuSideBar href="#">Blog</LinkInMeNuSideBar>
        <LinkInMeNuSideBar href="#">Shortcodes</LinkInMeNuSideBar>
        <LinkInMeNuSideBar href="#">Shop</LinkInMeNuSideBar>
      </MenuSidebar>
      <BoxImg>
        <Img
          src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-131729-700x466.jpeg"
          alt=""
        />
        <Content>
          <Price>$S3,900</Price>
          <Info>
            <p>Swiss Alps Trip</p>
            <StyledRate disabled defaultValue={4} />
          </Info>
        </Content>
      </BoxImg>
      <BoxImg>
        <Img
          src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-225630-700x466.jpeg"
          alt=""
        />
        <Content>
          <Price>
            <span className="sale">$4,900</span>$4,200
          </Price>
          <Info>
            <p>5Lake of Fuji San</p>
            <StyledRate disabled defaultValue={4} />
          </Info>
        </Content>
      </BoxImg>
    </StyledDrawer>
  );
};

export default SideBar;
