import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
  padding: 20px;
  background-color: #f7f7f7;
  box-shadow: 0 0 10px #8a8a8a;
  transition:
    color 0.3s,
    text-shadow 0.3s;
  margin-bottom: 40px;
  display: flex;
  gap: 250px;
  justify-content: center;
  align-items: center;
`;
export const BoxLogo = styled.div`
  border-right: 2px solid black;
  width: 150px;
  display: flex;
  gap: 30px;
`;
export const BoxName = styled.div`
  display: flex;
  flex-direction: column;

  width: 150px;
`;
export const Name = styled.span`
  margin-top: 8px;
  width: 150px;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 35px;
  line-height: 125%;
  color: var(--main);
  letter-spacing: 1px;
`;
export const NamePart = styled.div`
  width: 130px;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 25px;
  line-height: 125%;
  color: var(--main);
  text-align: center;
`;
export const StyledElement = styled.div`
  position: relative;
  padding: 0 10px;
  &:before,
  &:after {
    content: ' ';
    position: absolute;
    display: flex;
    align-items: center;

    top: 13px;
    bottom: 0;
    height: 3px;
    width: 15px;
    background-color: #000;
  }
  &:before {
    left: -5px;
  }
  &:after {
    right: -5px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

export const StyledLink = styled(NavLink)`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: var(--main);
  &:hover {
    color: var(--button);
  }
  &.active {
    color: var(--button);
  }
`;
