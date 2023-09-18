import { styled } from "styled-components";

export const LadingPage = styled.div`
  transition: filter 0.3s ease;
  filter: ${({ blur }) => (blur ? "blur(20px)" : "none")};
`;
