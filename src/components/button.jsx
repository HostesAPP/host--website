import styled from "styled-components";

const Button = ({ text, icon, ...props }) => {
  const characters = text.split("");

  return (
    <StyledWrapper>
      <button {...props}>
        <span className="button-content">
          <span className="span-mother">
            {characters.map((char, index) => (
              <span
                key={`current-${index}`}
                style={{ "--index": index }}
                className="text-[16px]"
              >
                {char}
              </span>
            ))}

            {icon && (
              <span className="icon" style={{ "--index": characters.length }}>
                {icon}
              </span>
            )}
          </span>

          <span className="span-mother2">
            {characters.map((char, index) => (
              <span key={`next-${index}`} style={{ "--index": index }}>
                {char}
              </span>
            ))}

            {icon && (
              <span className="icon" style={{ "--index": characters.length }}>
                {icon}
              </span>
            )}
          </span>
        </span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    box-sizing: border-box;
    font-weight: bold;
    color: white;
    border-radius: 2rem;
    cursor: pointer;
    height: 42.66px;
    padding: 0 42px;
    border: none;
    background-color: #ef5a22;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 768px) {
      padding: 0 18px;
    }
  }

  .button-content {
    position: relative;
    display: grid;
    place-items: center;
  }

  .span-mother,
  .span-mother2 {
    display: flex;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    grid-area: 1 / 1;
  }

  .span-mother span,
  .span-mother2 span {
    white-space: pre;
    transition: calc(0.1s * var(--index) + 0.2s);
  }

  .span-mother {
    position: relative;
  }

  button:hover .span-mother span {
    transform: translateY(1.2em);
  }

  .span-mother2 {
    position: relative;
  }

  .span-mother2 span {
    transform: translateY(-1.2em);
  }

  button:hover .span-mother2 span {
    transform: translateY(0);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 6px;
  }
`;

export default Button;
