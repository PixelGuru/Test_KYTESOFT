/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  AreaSocial,
  BoxContent,
  Container,
  ContentFooter,
  ContentFooterBar,
  FooterBar,
  FormSocialMedia,
  H2,
  Img,
  ImgReview,
  LiFooterBar,
  LinkMenu,
  MenuFooterBar,
  SocialMedia,
  StyledRow,
  Text,
} from "./styled";
import IconMobile from "../../assets/SVG/mobile.svg";
import IconLocation from "../../assets/SVG/location-pin.svg";
import IconClock from "../../assets/SVG/alarm-clock.svg";
import { Col, Row } from "antd";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
  return (
    <ContentFooter>
      <Container>
        <StyledRow gutter={16}>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <BoxContent>
              <H2>Our Awards</H2>
              <Text>
                London is a megalopolis of people, ideas and frenetic energy.
                The capital and largest city of the United Kingdom.
              </Text>
              <div>
                <img
                  src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png"
                  width={246}
                  height={113}
                  alt=""
                />
              </div>
            </BoxContent>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <BoxContent>
              <H2>Contact Info</H2>
              <Text className="info">
                <Img src={IconMobile} alt="" />
                <span>1-567-124-44227</span>
              </Text>
              <Text className="info">
                <Img src={IconLocation} alt="" />
                184 Main Street East Perl Habour 8007
              </Text>
              <Text className="info">
                <Img src={IconClock} alt="" />
                Mon - Sat 8.00 - 18.00 Sunday CLOSED
              </Text>
              <AreaSocial>
                <FormSocialMedia className="facebook">
                  <SocialMedia href="">
                    <FaFacebookF />
                  </SocialMedia>
                </FormSocialMedia>
                <FormSocialMedia className="twitter">
                  <SocialMedia href="">
                    <FaTwitter />
                  </SocialMedia>
                </FormSocialMedia>
                <FormSocialMedia className="youtube">
                  <SocialMedia href="">
                    <TfiYoutube />
                  </SocialMedia>
                </FormSocialMedia>
                <FormSocialMedia className="pinterest">
                  <SocialMedia href="">
                    <FaPinterest />
                  </SocialMedia>
                </FormSocialMedia>
                <FormSocialMedia className="instagram">
                  <SocialMedia href="">
                    <FaInstagram />
                  </SocialMedia>
                </FormSocialMedia>
              </AreaSocial>
            </BoxContent>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <BoxContent>
              <H2>Recent Trips</H2>
              <Row gutter={[4, 4]}>
                <Col span={8}>
                  <ImgReview
                    src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg"
                    alt=""
                  />
                </Col>
                <Col span={8}>
                  <ImgReview
                    src="https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg"
                    alt=""
                  />
                </Col>
                <Col span={8}>
                  <ImgReview
                    src="https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg"
                    alt=""
                  />
                </Col>
                <Col span={8}>
                  <ImgReview
                    src="https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg"
                    alt=""
                  />
                </Col>
                <Col span={8}>
                  <ImgReview
                    src="https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg"
                    alt=""
                  />
                </Col>
                <Col span={8}>
                  <ImgReview
                    src="https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg"
                    alt=""
                  />
                </Col>
              </Row>
            </BoxContent>
          </Col>
        </StyledRow>
      </Container>
      <FooterBar>
        <ContentFooterBar>
          <span>© Copyright Grand Tour Theme Demo - Theme by ThemeGoods</span>
          <MenuFooterBar>
            <LiFooterBar>
              <LinkMenu href="#">Home</LinkMenu>
            </LiFooterBar>
            <LiFooterBar>
              <LinkMenu href="#">Tours</LinkMenu>
            </LiFooterBar>
            <LiFooterBar>
              <LinkMenu href="#">Blog</LinkMenu>
            </LiFooterBar>
            <LiFooterBar>
              <LinkMenu href="#">Purchase Theme</LinkMenu>
            </LiFooterBar>
          </MenuFooterBar>
        </ContentFooterBar>
      </FooterBar>
    </ContentFooter>
  );
};

export default Footer;
