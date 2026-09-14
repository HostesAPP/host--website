import { ReactNode } from "react";
import styled from "styled-components";

type GridBackgroundProps = {
  children?: ReactNode;
  className?: string;
};

const GridBackground = ({ children, className = "" }: GridBackgroundProps) => {
  return <StyledGrid className={className}>{children}</StyledGrid>;
};

const StyledGrid = styled.section`
  background-color: #fafafa;
  height: 100vh;
  z-index: -4;

  background-image:
    linear-gradient(to right, #e5e7eb 1px, transparent 1px),
    linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);

  background-size: 200px 200px;
`;

export default GridBackground;
