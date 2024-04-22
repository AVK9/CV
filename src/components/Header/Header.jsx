import { Link } from 'react-router-dom';
import {
  Name,
  NamePart,
  BoxName,
  HeaderContainer,
  Navigation,
  BoxLogo,
} from './Header.styled';
import logo from '../../assets/img/logo.svg';
export const Header = () => {
  return (
    <HeaderContainer>
      <BoxLogo>
        <img src={logo} alt="Camper for you" />
        <BoxName>
          <Name>CAMPER</Name>
          <NamePart>FOR YOU</NamePart>
        </BoxName>
      </BoxLogo>
      <Navigation>
        <Link to="/catalog">Catalog</Link>
        <Link to="/favorites">Favorites</Link>
      </Navigation>
    </HeaderContainer>
  );
};
