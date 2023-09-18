import { Row } from "antd";
import { styled } from "styled-components";

export const ContentFooter = styled.div`
  width: 100%;
  background: #000000;
  color: #ffffff;
  text-algn: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
`;
export const BoxContent = styled.div`
  width: 400px;
  margin-right: 5%;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
    padding-right: 0;
    margin-bottom: 10px;
  }
`;
export const StyledRow = styled(Row)`
  @media (max-width: 768px) {
    margin: 0 !important;
  }
`;
export const H2 = styled.h2`
  font-size: 18px;
  color: #ffffff;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 900;
  @media (max-width: 768px) {
    width: 90%;
    margin-bottom: 20px;
  }
`;
export const Img = styled.img`
  filter: invert(100%);
  margin-right: 10px;
`;
export const Text = styled.p`
  display: flex;
  color: #cccccc;
  padding: 7.5px 0;
  font-family: "Work Sans", Helvetica, Arial, sans-serif;
  line-height: 1.9 !important;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  font-weight: 900;
  letter-spacing: 1px;
  line-height: 2;
  &.info {
    letter-spacing: 1px;
    padding-top: 0;
    padding-bottom: 0;
  }
`;
export const ImgReview = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 5px;
  @media (max-width: 768px) {
    width: 110px;
    height: 110px;
  }
`;

export const AreaSocial = styled.div`
  @media (max-width: 768px) {
    text-align: center;
  }
`;
export const FormSocialMedia = styled.a`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 20px 10px 0px 5px !important;
  border: none;
  &.facebook {
    background-color: #2d5f9a;
  }
  &.twitter {
    background-color: #00c3f3;
  }
  &.youtube {
    background-color: #cc181e;
  }
  &.pinterest {
    background-color: #bd081c;
  }
  &.instagram {
    background-color: #405de6;
  }
`;
export const SocialMedia = styled.span`
  height: 100%;
  font-size: 18px;
  color: #ffffff;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FooterBar = styled.div`
  max-width: 1425px;
  margin: 0 auto;
  border-top: 1px solid #222222;
`;
export const ContentFooterBar = styled.div`
  padding: 0 90px;
  color: #cccccc;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding-top: 30px;
  padding-bottom: 30px;
  font-family: Poppins, Helvetica, Arial, sans-serif;
  @media (max-width: 768px) {
    max-width: 90%;
    display: flex;
    flex-direction: column-reverse;
    padding: 10px 25px;
    margin: 0 auto;
    line-height: 1.7;
  }
`;

export const MenuFooterBar = styled.div`
  display: flex;
  @media (max-width: 768px) {
    padding: 15px 0;
  }
`;
export const LiFooterBar = styled.div`
  list-style: none;
  margin-right: 20px;
`;
export const LinkMenu = styled.a`
  color: #cccccc;
  text-decoration: none;
  font-size: 12px;
`;
