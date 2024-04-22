import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 20px;
  background-color: #f7f7f7;
  box-shadow: 0 0 10px #8a8a8a;
  transition:
    color 0.3s,
    text-shadow 0.3s;
  margin-bottom: 40px;
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
`;
export const NamePart = styled.span`
  width: 150px;
  width: 150px;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 25px;
  line-height: 125%;
  color: var(--main);
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  padding: 8px 16px;
  color: #ffffff; /* White text color */
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
  transition:
    color 0.3s,
    text-shadow 0.3s;

  &:hover,
  &:focus {
    color: #00baff; /* Blue text color on hover/focus */
    text-shadow:
      0 0 5px #00baff,
      0 0 10px #00baff,
      0 0 20px #00baff,
      0 0 40px #00baff,
      0 0 80px #00baff;
  }
`;
