import { Link } from 'react-router-dom';
import {
  Name,
  NamePart,
  BoxName,
  HeaderContainer,
  Navigation,
  BoxLogo,
  StyledElement,
  StyledLink,
} from './Header.styled';
import logo from '../../assets/img/logo.svg';
export const Header = () => {
  return (
    <HeaderContainer>
      <Link to={'/'}>
        <BoxLogo>
          <img src={logo} alt="Camper for you" />
          <BoxName>
            <Name>CAMPER</Name>
            <StyledElement>
              <NamePart>FOR YOU</NamePart>
            </StyledElement>
          </BoxName>
        </BoxLogo>
      </Link>
      <Navigation>
        <StyledLink to="/catalog">Catalog</StyledLink>
        <StyledLink to="/favorites">Favorites</StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};
