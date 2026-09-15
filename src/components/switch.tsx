import React, { ChangeEvent } from "react";
import styled from "styled-components";

type SwitchProps = {
  checked: boolean;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Switch = ({ checked, onchange }: SwitchProps) => {
  return (
    <StyledWrapper>
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={onchange} />
        <span className="slider" />
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .switch {
    --secondary-container: #0b6d3b;
    --primary: #fff;
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 54px;
    height: 24px;
  }

  .switch input {
    display: none;
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: -3px;
    bottom: 0;
    background-color: #313033;
    transition: 0.2s;
    border-radius: 30px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    border-radius: 20px;
    left: 0.2em;
    bottom: 0.1em;
    background-color: #aeaaae;
    transition: 0.4s;
  }

  input:checked + .slider::before {
    background-color: var(--primary);
  }

  input:checked + .slider {
    background-color: var(--secondary-container);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px var(--secondary-container);
  }

  input:checked + .slider:before {
    transform: translateX(1.9em);
  }
`;

export default Switch;
