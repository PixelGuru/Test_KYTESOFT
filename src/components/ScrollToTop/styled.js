import { UpOutlined } from "@ant-design/icons";
import { styled } from "styled-components";

export const BackToTop = styled.div`
  position: fixed;
  inset-inline-end: 20px;
  inset-block-end: 20px;
  background: #1ec6b6;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
export const IconUp = styled(UpOutlined)`
  color: #fff;
`;
