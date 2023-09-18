/* eslint-disable jsx-a11y/anchor-is-valid */
// Header.js
import React, { useEffect, useState } from "react";
import {
  Link,
  StyledHeader,
  StyledMenuItem,
  StyledSubMenu,
  StyledMenu,
  ButtonCart,
  StyledBadge,
  ListMenu,
} from "./styled";
import Logo from "../../assets/logo.png";
import LogoBlack from "../../assets/logo-black.png";
import HeaderMenuItem from "./HeaderMenuItem.js";
import SideBar from "./SideBar";
import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const Header = ({ open, showDrawer, onClose }) => {
  const [showHeader, setShowHeader] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const menuItems = [
    {
      label: "Home",
      menu: (
        <StyledMenu>
          <StyledMenuItem key="1">
            <Link to="#">Home 1 – Background Image</Link>
          </StyledMenuItem>
          <StyledMenuItem key="2">
            <Link to="#">Home 2 – Youtube Video</Link>
          </StyledMenuItem>
          <StyledMenuItem key="3">
            <Link to="#">Home 3 – Google Inspired</Link>
          </StyledMenuItem>
          <StyledMenuItem key="4">
            <Link to="#">Home 4 – Travel Site</Link>
          </StyledMenuItem>
        </StyledMenu>
      ),
    },
    {
      label: "Tours",
      menu: (
        <StyledMenu>
          <StyledSubMenu title={<Link href="#">Tour Classic Fullwidth</Link>}>
            <StyledMenuItem key="5">
              <Link href="#">2 Columns</Link>
            </StyledMenuItem>
            <StyledMenuItem key="6">
              <Link href="#">3 Columns</Link>
            </StyledMenuItem>
            <StyledMenuItem key="7">
              <Link href="#">4 Columns</Link>
            </StyledMenuItem>
          </StyledSubMenu>
          <StyledSubMenu title={<Link href="#">Tour Classic Sidebar</Link>}>
            <StyledMenuItem key="8">
              <Link href="#">Right Sidebar</Link>
            </StyledMenuItem>
            <StyledMenuItem key="9">
              <Link href="#">Left Sidebar</Link>
            </StyledMenuItem>
          </StyledSubMenu>
          <StyledSubMenu title={<Link href="#">Tour Grid Fullwidth</Link>}>
            <StyledMenuItem key="10">
              <Link href="#">2 Columns</Link>
            </StyledMenuItem>
            <StyledMenuItem key="11">
              <Link href="#">3 Columns</Link>
            </StyledMenuItem>
            <StyledMenuItem key="12">
              <Link href="#">4 Columns</Link>
            </StyledMenuItem>
          </StyledSubMenu>
          <StyledSubMenu title={<Link href="#">Tour Grid Sidebar</Link>}>
            <StyledMenuItem key="13">
              <Link href="#">Right Sidebar</Link>
            </StyledMenuItem>
            <StyledMenuItem key="14">
              <Link href="#">Left Sidebar</Link>
            </StyledMenuItem>
          </StyledSubMenu>
          <StyledSubMenu title={<Link href="#">Tour List Sidebar</Link>}>
            <StyledMenuItem key="15">
              <Link href="#">Right Sidebar</Link>
            </StyledMenuItem>
            <StyledMenuItem key="16">
              <Link href="#">Left Sidebar</Link>
            </StyledMenuItem>
          </StyledSubMenu>
          <StyledSubMenu title={<Link href="#">Tour Header Type</Link>}>
            <StyledMenuItem key="17">
              <Link href="#">Featured Image</Link>
            </StyledMenuItem>
            <StyledMenuItem key="18">
              <Link href="#">Video</Link>
            </StyledMenuItem>
          </StyledSubMenu>
          <StyledSubMenu title={<Link href="#">Tour Categories</Link>}>
            <StyledMenuItem key="19">
              <Link href="#">Rural</Link>
            </StyledMenuItem>
            <StyledMenuItem key="20">
              <Link href="#">Snow & Ice</Link>
            </StyledMenuItem>
            <StyledMenuItem key="21">
              <Link href="#">Wildlife</Link>
            </StyledMenuItem>
            <StyledMenuItem key="22">
              <Link href="#">Mountain</Link>
            </StyledMenuItem>
          </StyledSubMenu>
        </StyledMenu>
      ),
    },
    {
      label: "Booking",
      menu: (
        <StyledMenu>
          <StyledSubMenu
            title={<Link href="#">Online Payment for Booking</Link>}
          >
            <StyledMenuItem key="23">
              <Link href="#">Variable Tour Pricing</Link>
            </StyledMenuItem>
            <StyledMenuItem key="24">
              <Link href="#">Simple Tour Pricing</Link>
            </StyledMenuItem>
          </StyledSubMenu>
          <StyledSubMenu title={<Link href="#">Custom Booking Form</Link>}>
            <StyledMenuItem key="25">
              <Link href="#">Booking Form + Sub Tour Date</Link>
            </StyledMenuItem>
            <StyledMenuItem key="26">
              <Link href="#">Booking Form + Custom Date</Link>
            </StyledMenuItem>
          </StyledSubMenu>
          <StyledSubMenu title={<Link href="#">Tour Durations</Link>}>
            <StyledMenuItem key="3">
              <Link href="#">Single Day Tour</Link>
            </StyledMenuItem>
            <StyledMenuItem key="4">
              <Link href="#">Multiple Days Tour</Link>
            </StyledMenuItem>
          </StyledSubMenu>
          <StyledMenuItem key="27">
            <Link href="#">Custom Booking URL for Affiliate Tour</Link>
          </StyledMenuItem>
          <StyledMenuItem key="28">
            <Link href="#">Custom Booking using custom HTML & Shortcode</Link>
          </StyledMenuItem>
          <StyledSubMenu title={<Link href="#">Header Options</Link>}>
            <StyledMenuItem key="29">
              <Link href="#">Standard Background Header</Link>
            </StyledMenuItem>
            <StyledMenuItem key="30">
              <Link href="#">Video Background Header</Link>
            </StyledMenuItem>
          </StyledSubMenu>
          <StyledSubMenu title={<Link href="#">Layout Options</Link>}>
            <StyledMenuItem key="30">
              <Link href="#">With Sidebar</Link>
            </StyledMenuItem>
            <StyledMenuItem key="31">
              <Link href="#">Fullwidth</Link>
            </StyledMenuItem>
          </StyledSubMenu>
        </StyledMenu>
      ),
    },
    {
      label: "Destinations",
      menu: (
        <StyledMenu>
          <StyledMenuItem key="32">
            <Link href="#">Destination Fullwidth</Link>
          </StyledMenuItem>
          <StyledMenuItem key="33">
            <Link href="#">Destination + Video Header</Link>
          </StyledMenuItem>
          <StyledMenuItem key="34">
            <Link href="#">Destination Right Sidebar</Link>
          </StyledMenuItem>
          <StyledMenuItem key="35">
            <Link href="#">Destination Left Sidebar</Link>
          </StyledMenuItem>
          <StyledMenuItem key="36">
            <Link href="#">Single Destination</Link>
          </StyledMenuItem>
          <StyledMenuItem key="37">
            <Link href="#">Single Destination + Video</Link>
          </StyledMenuItem>
        </StyledMenu>
      ),
    },
    {
      label: "Pages",
      menu: (
        <StyledMenu>
          <StyledMenuItem key="38">
            <Link href="#">About Us</Link>
          </StyledMenuItem>
          <StyledMenuItem key="39">
            <Link href="#">Contact Us</Link>
          </StyledMenuItem>
          <StyledMenuItem key="40">
            <Link href="#">FAQs</Link>
          </StyledMenuItem>
          <StyledMenuItem key="41">
            <Link href="#">Gallery</Link>
          </StyledMenuItem>
          <StyledMenuItem key="42">
            <Link href="#">Page Fullwidth</Link>
          </StyledMenuItem>
          <StyledMenuItem key="43">
            <Link href="#">Page + Video Background Header</Link>
          </StyledMenuItem>
          <StyledMenuItem key="44">
            <Link href="#">Page Right Sidebar</Link>
          </StyledMenuItem>
          <StyledMenuItem key="45">
            <Link href="#">Page Left Sidebar</Link>
          </StyledMenuItem>
        </StyledMenu>
      ),
    },
    {
      label: "Blog",
      menu: (
        <StyledMenu>
          <StyledMenuItem key="46">
            <Link href="#">Blog Right Sidebar</Link>
          </StyledMenuItem>
          <StyledMenuItem key="47">
            <Link href="#">Blog Left Sidebar</Link>
          </StyledMenuItem>
          <StyledMenuItem key="48">
            <Link href="#">Blog Fullwidth</Link>
          </StyledMenuItem>
          <StyledMenuItem key="49">
            <Link href="#">Blog Grid Right Sidebar</Link>
          </StyledMenuItem>
          <StyledMenuItem key="50">
            <Link href="#">Blog Grid Left Sidebar</Link>
          </StyledMenuItem>
          <StyledMenuItem key="51">
            <Link href="#">Blog Grid Fullwidth</Link>
          </StyledMenuItem>
          <StyledMenuItem key="52">
            <Link href="#">Blog Full + Grid Right Sidebar</Link>
          </StyledMenuItem>
          <StyledMenuItem key="53">
            <Link href="#">Blog Full + Grid Left Sidebar</Link>
          </StyledMenuItem>
          <StyledMenuItem key="54">
            <Link href="#">Blog Full + Grid Fullwidthr</Link>
          </StyledMenuItem>
        </StyledMenu>
      ),
    },
    {
      label: "Shortcodes",
      menu: (
        <StyledMenu>
          <StyledMenuItem key="55">
            <Link href="#">Accordion & Toggles</Link>
          </StyledMenuItem>
          <StyledMenuItem key="56">
            <Link href="#">Alert Boxes</Link>
          </StyledMenuItem>
          <StyledMenuItem key="57">
            <Link href="#">Animated Content</Link>
          </StyledMenuItem>
          <StyledMenuItem key="58">
            <Link href="#">Buttons & Social Icons</Link>
          </StyledMenuItem>
          <StyledMenuItem key="59">
            <Link href="#">Columns</Link>
          </StyledMenuItem>
          <StyledMenuItem key="60">
            <Link href="#">Google Maps</Link>
          </StyledMenuItem>
          <StyledMenuItem key="61">
            <Link href="#">Image Frame & Animation</Link>
          </StyledMenuItem>
          <StyledMenuItem key="62">
            <Link href="#">Image Teasers</Link>
          </StyledMenuItem>
          <StyledMenuItem key="63">
            <Link href="#">Pricing Tables</Link>
          </StyledMenuItem>
          <StyledMenuItem key="64">
            <Link href="#">Tabs</Link>
          </StyledMenuItem>
        </StyledMenu>
      ),
    },
    {
      label: "Shop",
      menu: (
        <StyledMenu>
          <StyledMenuItem key="65">
            <Link href="#">Shop Fullwidth</Link>
          </StyledMenuItem>
          <StyledMenuItem key="66">
            <Link href="#">Shop Sidebar</Link>
          </StyledMenuItem>
          <StyledMenuItem key="67">
            <Link href="#">Single Product Fullwidth</Link>
          </StyledMenuItem>
          <StyledMenuItem key="68">
            <Link href="#">Single Product With Sidebar</Link>
          </StyledMenuItem>
        </StyledMenu>
      ),
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY || currentScrollY < 100) {
        console.log("Cuộn xuống");
        setShowHeader(false); // Cuộn xuống, ẩn header
      } else {
        console.log("Cuộn lên");
        setShowHeader(true); // Cuộn lên, hiện header
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <StyledHeader className={showHeader ? "show" : ""}>
      <a href="#">
        <img src={showHeader ? LogoBlack : Logo} alt="" width={94} />
      </a>
      <ListMenu>
        {menuItems.map((menuItem, index) => (
          <HeaderMenuItem
            showHeader={showHeader}
            label={menuItem.label}
            menu={menuItem.menu}
          />
        ))}
        <ButtonCart type="primary" onClick={showDrawer}>
          <MenuOutlined style={{ color: showHeader ? "#000" : "#fff" }} />
        </ButtonCart>
        <SideBar open={open} onClose={onClose} />
        <a href="#">
          <StyledBadge size="small" count="0" showZero>
            <ShoppingCartOutlined
              style={{ color: showHeader ? "#000" : "#fff" }}
            />
          </StyledBadge>
        </a>
      </ListMenu>
    </StyledHeader>
  );
};

export default Header;
