/* eslint-disable jsx-a11y/anchor-is-valid */
import { VideoSectionHero } from "./VideoSectionHero";
import {
  ButtonSearch,
  SectionHero,
  Content,
  H1,
  P,
  SearchArea,
  MainContent,
  BoxImg,
  AreaImg,
  StyledImg,
  H2,
  StyledText,
  Title,
  H3,
  OverlayImage,
  StyledCard,
  CardTitle,
  StyledCardText,
  StyledRate,
  AreaRate,
  CountRate,
  Price,
  TextPrice,
  TextPriceSale,
  Sale,
  Box,
  BoxContent,
  StyledImgSection3,
  H4,
  StyledPhoto,
  TimeText,
  StyledCardTextSection3,
  StyleLinkCard,
} from "./styled";
import Search from "./Search";
import ImgTokyo from "../../assets/Tokyo.jpg";
import ImgSeoul from "../../assets/Seoul.jpg";
import ImgParis from "../../assets/Paris.jpg";
import ImgLondon from "../../assets/London.jpg";
import CardFrench from "../../assets/French.jpeg";
import CardGrand from "../../assets/Grand.jpeg";
import ImageMap from "../../assets/Map.png";
import ImageLocation from "../../assets/Location.png";
import ImageBalloon from "../../assets/Balloon.png";
import ImagePhoto from "../../assets/Photo.jpg";
import PhotoCard1 from "../../assets/photoCard1.jpg";
import PhotoCard2 from "../../assets/PhotoCard2.jpeg";
import PhotoCard3 from "../../assets/PhotoCard3.jpg";
import CardDiscoverJapan from "../../assets/DiscoverJapan.jpeg";
import { Space } from "antd";

import { ClockCircleOutlined, RightOutlined } from "@ant-design/icons";

const Main = () => {
  return (
    <MainContent>
      <SectionHero>
        <VideoSectionHero></VideoSectionHero>
        <Content>
          <H1>Where do you want to go?</H1>
          <P>Trips, experiences, and places. All in one service</P>
          <SearchArea>
            <Search />
            <ButtonSearch>Search</ButtonSearch>
          </SearchArea>
        </Content>
      </SectionHero>
      <section>
        <Title>
          <H2>Popular Destinations</H2>
          <StyledText>World's best tourist destinations</StyledText>
        </Title>
        <AreaImg>
          <BoxImg>
            <StyledImg src={ImgTokyo} />

            <OverlayImage>
              <H3>Tokyo</H3>
            </OverlayImage>
          </BoxImg>
          <BoxImg>
            <StyledImg src={ImgSeoul} />
            <OverlayImage>
              <H3>Seoul</H3>
            </OverlayImage>
          </BoxImg>
          <BoxImg>
            <StyledImg src={ImgParis} />
            <OverlayImage>
              <H3>Paris</H3>
            </OverlayImage>
          </BoxImg>
          <BoxImg>
            <StyledImg src={ImgLondon} />
            <OverlayImage>
              <H3>London</H3>
            </OverlayImage>
          </BoxImg>
        </AreaImg>
      </section>
      <section>
        <div>
          <Title>
            <H2>Best Value Trips</H2>
            <StyledText>Best offers trips from us</StyledText>
          </Title>
          <Box>
            <StyledCard
              hoverable
              cover={
                <div style={{ position: "relative" }}>
                  <img alt="example" src={CardFrench} width="100%" />
                  <Price className="Price">
                    <TextPrice>$5,000</TextPrice>
                  </Price>
                </div>
              }
            >
              <CardTitle>French Autumn</CardTitle>
              <StyledCardText>City Tours, Urban</StyledCardText>
              <AreaRate>
                <Space size={3}>
                  <StyledRate disabled defaultValue={4} />
                  <CountRate>4 reviews</CountRate>
                </Space>
                <Space size={2}>
                  <ClockCircleOutlined />
                  <CountRate>5 days</CountRate>
                </Space>
              </AreaRate>
            </StyledCard>
            <StyledCard
              hoverable
              cover={
                <div style={{ position: "relative" }}>
                  <img alt="example" src={CardGrand} width="100%" />
                  <Price className="Price">
                    <TextPrice>$6,000</TextPrice>
                  </Price>
                </div>
              }
            >
              <CardTitle>Grand Switzerland</CardTitle>
              <StyledCardText>Shopping, Mountain, Snow & Ice</StyledCardText>
              <AreaRate>
                <Space size={3}>
                  <StyledRate disabled defaultValue={4} />
                  <CountRate>4 reviews</CountRate>
                </Space>
                <Space size={2}>
                  <ClockCircleOutlined />
                  <CountRate>5 days</CountRate>
                </Space>
              </AreaRate>
            </StyledCard>
            <StyledCard
              hoverable
              cover={
                <div style={{ position: "relative" }}>
                  <img alt="example" src={CardDiscoverJapan} width="100%" />
                  <Price className="Price">
                    <TextPriceSale>$3,000</TextPriceSale>
                    <TextPrice>$2,500</TextPrice>
                  </Price>
                  <Sale>Sale</Sale>
                </div>
              }
            >
              <CardTitle>Discover Japan</CardTitle>
              <StyledCardText>City Tours, Iconic</StyledCardText>
              <AreaRate>
                <Space size={3}>
                  <StyledRate disabled defaultValue={4} />
                  <CountRate>4 reviews</CountRate>
                </Space>
                <Space size={2}>
                  <ClockCircleOutlined />
                  <CountRate>5 days</CountRate>
                </Space>
              </AreaRate>
            </StyledCard>
          </Box>
        </div>
      </section>
      <section>
        <div>
          <Title>
            <H2>Why Choose Us</H2>
            <StyledText>
              Here are reasons you should plan trip with us
            </StyledText>
          </Title>
          <Box>
            <BoxContent>
              <StyledImgSection3 src={ImageMap} alt="" />
              <H4>Handpicked Hotels</H4>
              <StyledCardTextSection3>
                Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa
              </StyledCardTextSection3>
            </BoxContent>
            <BoxContent>
              <StyledImgSection3 src={ImageLocation} alt="" />
              <H4>World Class Service</H4>
              <StyledCardTextSection3>
                Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa
              </StyledCardTextSection3>
            </BoxContent>
            <BoxContent>
              <StyledImgSection3 src={ImageBalloon} alt="" />
              <H4>Best Price Guarantee</H4>
              <StyledCardTextSection3>
                Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa
              </StyledCardTextSection3>
            </BoxContent>
          </Box>
          <StyledPhoto src={ImagePhoto} alt="" />
        </div>
      </section>
      <section>
        <div>
          <Title>
            <H2>Articles & Tips</H2>
            <StyledText>
              Explore some of the best tips from around the world
            </StyledText>
          </Title>
          <Box>
            <StyledCard
              hoverable
              cover={
                <div style={{ position: "relative" }}>
                  <img alt="example" src={PhotoCard1} width="100%" />
                </div>
              }
            >
              <TimeText>December 10, 2016</TimeText>
              <H4>Memorial Day to Someone Told Me to Travel</H4>
              <StyledCardTextSection3>
                Meh synth Schlitz, tempor duis single-origin coffee ea next
                level ethnic fingerstache...
              </StyledCardTextSection3>
              <StyleLinkCard href="#">
                Read More <RightOutlined />
              </StyleLinkCard>
            </StyledCard>
            <StyledCard
              hoverable
              cover={
                <div style={{ position: "relative" }}>
                  <img alt="example" src={PhotoCard2} width="100%" />
                </div>
              }
            >
              <TimeText>December 10, 2016</TimeText>
              <H4>7 Tips For Nomads On A Budget Trips</H4>
              <StyledCardTextSection3>
                Meh synth Schlitz, tempor duis single-origin coffee ea next
                level ethnic fingerstache...
              </StyledCardTextSection3>
              <StyleLinkCard href="#">
                Read More <RightOutlined />
              </StyleLinkCard>
            </StyledCard>
            <StyledCard
              hoverable
              cover={
                <div style={{ position: "relative" }}>
                  <img alt="example" src={PhotoCard3} width="100%" />
                </div>
              }
            >
              <TimeText>December 10, 2016</TimeText>
              <H4>Taking A Travel Blog Victory Lap</H4>
              <StyledCardTextSection3>
                Meh synth Schlitz, tempor duis single-origin coffee ea next
                level ethnic fingerstache...
              </StyledCardTextSection3>

              <StyleLinkCard href="#">
                Read More <RightOutlined />
              </StyleLinkCard>
            </StyledCard>
          </Box>
        </div>
      </section>
    </MainContent>
  );
};

export default Main;
