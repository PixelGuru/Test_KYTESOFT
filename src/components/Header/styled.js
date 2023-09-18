import { DownOutlined } from "@ant-design/icons";
import { Badge, Drawer, Dropdown, Menu } from "antd";
import { styled } from "styled-components";

export const StyledHeader = styled.div`
  height: 74px;
  padding: 0 305px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 3;
  transition: filter 0.3s ease;
  filter: ${({ blur }) => (blur ? "blur(5px)" : "none")};
  @media (max-width: 768px) {
    margin: 0px !important;
    padding: 0 30px !important;
  }
  &.show {
    width: 68%;
    position: fixed !important;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    z-index: 99;
    @media (max-width: 768px) {
      width: 85%;
    }
  }
`;
export const Link = styled.a`
  font-family: Poppins, Helvetica, Arial, sans-serif;
  font-size: 13px;
  font-weight: 700;
  color: #ffffff;
  &:hover {
    background-color: #ffffff !important;
    color: #ff4a52 !important;
  }
  &.show {
    background: #000;
  }
`;
export const StyledDropdownLabel = styled(Dropdown)`
  margin-right: 30px;
  font-family: Poppins, Helvetica, Arial, sans-serif;
  font-size: 13px !important;
  font-weight: 700;
  color: #ffffff;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
  &.show {
    color: #000;
  }
`;
export const StyledMenu = styled(Menu)`
  margin-top: 20px !important;
  position: absolute;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const CustomDownIcon = styled(DownOutlined)`
  font-size: 10px;
  margin-left: 5px;
`;

export const StyledMenuItem = styled(Menu.Item)`
  font-family: Poppins, Helvetica, Arial, sans-serif !important;
  padding: 5px 25px !important;
  width: 240px;
  &:hover {
    background-color: #ffffff !important;
    color: #ff4a52 !important;
  }
  .ant-dropdown-menu-title-content {
    &:after {
      content: "";
      display: block;
      border-bottom: 1px solid #dce0e0;
      margin-top: 10px;
    }
  }
  &:last-child .ant-dropdown-menu-title-content:after {
    content: "";
    display: block;
    border-bottom: none;
    margin-top: 10px;
  }
`;
export const StyledSubMenu = styled(Menu.SubMenu)`
  width: 240px;
  font-family: Poppins, Helvetica, Arial, sans-serif !important;
  padding: 5px 10px !important;
  .ant-dropdown-menu-submenu-title {
    &:hover {
      background-color: #ffffff !important;
      color: #ff4a52 !important;
    }
    &:after {
      content: "";
      display: block;
      border-bottom: 1px solid #dce0e0;
      margin-top: 10px;
    }
  }
  &:last-child .ant-dropdown-menu-submenu-title:after {
    content: "";
    display: block;
    border-bottom: none;
    margin-top: 10px;
  }
`;
export const ButtonCart = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #ffffff;
  font-weight: 700;
  margin-right: 5px;
`;
export const StyledBadge = styled(Badge)`
  .ant-scroll-number {
    width: 14px;
    height: 14px;
    top: -3px !important;
    left: 5px !important;
    box-shadow: none;
  }
  .ant-scroll-number-only-unit {
    font-size: 12px;
  }
`;
export const StyledDrawer = styled(Drawer)`
  background: rgba(255, 255, 255, 0.85) !important;
  .ant-drawer-header {
    border-bottom: none;
  }
  .ant-drawer-header-title {
    display: block;
    text-align: end;
  }
  .ant-drawer-close {
    padding: 13px;
    border-radius: 50%;
    background: red;
    color: #fff !important;
    margin-top: 15px;
    transition: 0.2s;
    &:hover {
      color: #fff;
      transform: translateY(-5px);
    }
  }
`;
export const MenuSidebar = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;
`;
export const LinkInMeNuSideBar = styled.a`
  color: #000000;
  font-family: Poppins, Helvetica, Arial, sans-serif;
  font-size: 24px;
  line-height: 2em;
  font-weight: 900;
  margin-left: 20px;
  &:hover {
    color: #ff4a52 !important;
  }
`;

export const BoxImg = styled.div`
  margin-bottom: 20px !important ;
  margin: 0 auto;
  position: relative;
  text-align: center;
`;
export const Content = styled.div`
  position: absolute;
  top: 50%;
  color: #fff;
`;
export const Price = styled.span`
  padding: 3px 10px 2px 10px;
  color: #fff;
  font-weight: 900;
  font-size: 15px;
  background-color: #ff4a52;
  & .sale {
    font-weight: 400;
    margin-right: 5px;
    text-decoration: line-through;
    opacity: 0.6;
    font-size: 13px;
  }
`;
export const Info = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin: 20px 0 5px 15px;
  line-height: 0;
`;

export const Img = styled.img`
  width: 265px;
  height: 200px;
  border-radius: 5px;
`;
