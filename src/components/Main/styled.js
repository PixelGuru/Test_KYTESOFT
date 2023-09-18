import {
  Button,
  Card,
  DatePicker,
  Form,
  Input,
  Rate,
  Select,
  Space,
} from "antd";
import { styled } from "styled-components";
const Font = "Poppins, Helvetica, Arial, sans-serif";

export const MainContent = styled.div`
  position: relative;
  top: -74px;
  left: 0;
  text-align: center;
`;
export const SectionHero = styled.div`
  position: relative;
  left: 0;
  z-index: 2;
`;
export const VideoBackground = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 800px;
  z-index: -1;
  iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    width: var(--video-width);
    height: var(--video-height);
    transform: translate(-50%, -50%);
  }
  @media (max-width: 768px) {
    height: 500px;
  }
`;
export const OverlayBackground = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);

  z-index: 1;
`;
export const Content = styled.div`
  position: absolute;
  top: 50%;
  z-index: 5;
  margin: 0 auto;
  width: 100%;
  transform: translateY(-50%);
  text-align: center;
  line-height: 1.7;
`;
export const H1 = styled.h1`
  color: #ffffff;
  font-size: 50px;
  font-family: ${Font};
  font-weight: 700;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 24px !important;
  }
`;
export const P = styled.p`
  color: #ffffff;
  font-size: 15px;
  font-family: ${Font}
  font-weight: 700;
  margin: 0 0 15px 0;
`;
export const SearchArea = styled.div`
  display: flex;
  justify-content: center;
  &:hover {
    color: #fff;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 30px;
  }
`;

export const StyledSpace = styled(Space)`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0px !important;
    .ant-space-item {
      width: 100%;
      height: 45px;
    }
  }
`;
export const StyledFormItem = styled(Form.Item)`
  width: 250px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const StyledInput = styled(Input)`
  width: 100%;
  height: 40px;
  @media (max-width: 768px) {
    height: 35px;
  }
`;

export const StyledDataPicker = styled(DatePicker)`
  width: 100%;
  height: 40px;
  @media (max-width: 768px) {
    height: 35px;
  }
`;
export const StyledSelect = styled(Select)`
  width: 100%;
  .ant-select-selector {
    height: 40px !important;
  }
  .ant-select-selection-item {
    text-align: start;
    margin: auto 0;
  }
  @media (max-width: 768px) {
    .ant-select-selector {
      height: 35px !important;
    }
  }
`;

export const ButtonAdvancedSearch = styled.a`
  font-size: 12;
  color: #fff;
  &:hover {
    color: #fff;
  }
`;
export const ButtonSearch = styled(Button)`
  width: 250px;
  height: 40px;
  margin-left: 20px;
  background: #ff4a52;
  border: none;
  &:hover {
    background-color: #1ec6b6;
  }
  & span {
    font-family: ${Font};
    font-size: 14px;
    color: #fff;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 35px;
    margin-left: 0px;
    margin-top: 10px;
  }
`;

export const AreaImg = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const BoxImg = styled.div`
  position: relative;
  width: 290px;
  height: 300px;
  margin-right: 30px;
  transition: 0.2s;
  &:hover {
    transform: translateY(-5px);
  }
  @media (max-width: 768px) {
    width: 350px;
    margin-bottom: 30px;
    margin-right: 0px;
  }
`;
export const StyledImg = styled.img`
  position: relative;
  height: 100%;
  width: 100%;
  background-size: cover;
  object-fit: cover;
  border-radius: 5px;
`;
export const Title = styled.div`
  margin: 50px 0;
  line-height: 1.7;
`;
export const H2 = styled.h2`
  font-size: 36px;
  font-weight: 800;
  font-family: ${Font};
  margin: 0;
  @media (max-width: 768px) {
    font-size: 24px !important;
    font-weight: 800;
  }
`;
export const StyledText = styled.p`
  font-size: 15px;
  color: #8d9199;
  font-weight: 500;
  margin: 0;
`;
export const H3 = styled.h3`
  position: absolute;
  z-index: 5;
  top: 83%;
  left: 5.5%;
  font-size: 30px;
  font-weight: 800;
  color: #fff;
  font-family: ${Font};
  margin: 0;
`;
export const OverlayImage = styled.div`
  background: #3935352e;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
`;
export const Box = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 0px;
    margin-bottom: 0px;
  }
`;
export const StyledCard = styled(Card)`
  width: 21%;
  margin-right: 30px;
  margin-bottom: 30px;
  text-align: left;
  border: 0.2px solid #dce0e0;
  border-radius: 5px;
  transition: 0.2s;
  cursor: default;
  &. ant-card-cover {
    cursor: pointer;
  }
  & .ant-card-body {
    padding: 15px;
  }
  &:hover {
    transform: translateY(-5px);
    .Price {
      transform: scale(1.07);
    }
  }
  @media (max-width: 768px) {
    margin-right: 0px;
    margin-bottom: 30px;
    width: 90%;
  }
`;
export const Price = styled.div`
  position: absolute;
  top: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
`;

export const TextPrice = styled.span`
  background-color: #ff4a52;
  color: #fff;
  padding: 5px 10px;
  font-family: ${Font};
  font-weight: 900;
  font-size: 15px;
`;
export const TextPriceSale = styled.span`
  background-color: #ff4a52;
  color: #ff9ba0;
  padding: 5px 0 5px 5px;
  font-family: ${Font};
  text-decoration: line-through;
  font-size: 14px;
`;
export const Sale = styled.span`
  background-color: #1ec6b6;
  color: #fff;
  padding: 10px 7px 10px 7px;
  position: absolute;
  top: -14px;
  right: -14px;
  border-radius: 50px;
  font-size: 12px;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 800;
  font-family: ${Font};
  margin: 0;
`;
export const StyledCardText = styled.p`
  font-size: 13px;
  font-family: ${Font};
  font-weight: 500;
  color: #4e4e4e;
  margin: 0;
  padding-top: 0.3rem;
  padding-bottom: 0.5rem;
`;
export const AreaRate = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;
export const CountRate = styled.span`
  font-size: 12px;
  font-family: ${Font};
  font-weight: 600;
`;
export const StyledRate = styled(Rate)`
  &.ant-rate {
    font-size: 14px;
  }
  & .ant-rate-star {
    margin: 0 0.5px !important;
    color: #1ec6b6;
  }
  .ant-rate:last-child {
    color: red !important;
  }
`;

export const BoxContent = styled.div`
  width: 19.5%;
  margin-bottom: 70px;
  margin-left: 50px;
  @media (max-width: 768px) {
    margin-left: 0px;
    width: 90%;
  }
`;
export const StyledImgSection3 = styled.img`
  width: 150px;
`;
export const H4 = styled.h4`
  font-size: 20px;
  margin: 15px 0;
  font-family: ${Font};
  font-weight: 800;
`;
export const TextSection3 = styled.span`
  font-family: "Work Sans", sans-serif;
  color: #222222;
`;
export const StyledPhoto = styled.img`
  width: 100%;
  height: 570px;
  object-fit: cover;
`;

export const TimeText = styled.span`
  color: #222;
  text-transform: uppercase;
  font-family: ${Font};
  font-size: 12px;
  font-weight: 700;
  margin: 5px 0;
`;

export const StyledCardTextSection3 = styled.p`
  font-size: 15px;
  font-family: ${Font};
  font-weight: 500;
  line-height: 1.7;
  color: #222;
  margin: 0;
  padding-top: 0.3rem;
  padding-bottom: 2.5rem;
  letter-spacing: 1px;
`;
export const StyleLinkCard = styled.a`
  font-size: 15px;
  color: #222222;
  font-family: ${Font};
  opacity: 0.5;
  &:hover {
    color: #000;
    opacity: 1;
  }
`;
