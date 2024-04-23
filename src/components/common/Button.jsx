import styled, { css, keyframes } from 'styled-components';

const rotateAnimation = keyframes`
    0% {
transform: rotateZ(0deg)
    }
    100% {
transform: rotateZ(360deg)
    }
`;

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #fff;

  border-radius: 200px;
  padding: 16px 40px;
  width: 166px;
  height: 56px;

  margin: ${({ margin }) => margin || '20px 0px 0px 0px'};
  background-color: ${({ theme }) => theme.colors.button};

  &:hover {
    background: #d84343;
    outline: none;
    /* animation: ${rotateAnimation} 2s infinite linear; */
  }

  align-self: ${(props) => props.align || 'stretch'};

  ${(props) =>
    props.primary &&
    css`
      color: ${(props) => props.color || 'white'};
      background: ${(props) => props.background || '#E44848'};
    `}

  &.load {
    border: 1px solid rgba(71, 84, 103, 0.2);
    border-radius: 200px;
    padding: 16px 32px;
    width: 145px;
    height: 56px;
    background-color: ${({ theme }) => theme.colors.inputs};
    color: #101828;

    &:hover {
      border: 1px solid var(--button);
    }
  }
`;

// const LargeStyledButton = styled(StyledButton)`
//   font-size: 32px;
// `;

export const Button = (props) => {
  return <StyledButton {...props} />;
};