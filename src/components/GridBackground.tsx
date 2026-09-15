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
  background-color: var(--grid-background);
  height: 100vh;
  z-index: -4;

  background-image:
    linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
    linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px);

  background-size: 200px 200px;
`;

export default GridBackground;
