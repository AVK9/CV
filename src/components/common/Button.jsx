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
  padding: 16px 60px;
  width: 173px;
  height: 56px;
  font-size: 22px;

  background: var(--button);

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
`;

const LargeStyledButton = styled(StyledButton)`
  font-size: 32px;
`;

export const Button = (props) => {
  return <StyledButton {...props} />;
};
