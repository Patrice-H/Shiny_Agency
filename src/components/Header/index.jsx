import { useContext } from 'react';
import { ThemeContext } from '../../utils/context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import logoLight from '../../assets/light-logo.png';
import logoDark from '../../assets/dark-logo.png';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 40px 50px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 20px auto;
  }
`;
const StyledLink = styled(Link)`
  padding: 15px;
  text-decoration: none;
  font-size: 18px;
  color: ${({ isdarkmode }) =>
    isdarkmode === 'true' ? 'white' : colors.secondary};
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`;

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const logo = theme === 'dark' ? logoDark : logoLight;

  return (
    <StyledHeader>
      <img src={logo} alt="logo" />
      <nav className="header-navbar">
        <StyledLink to="/" isdarkmode={(theme === 'dark').toString()}>
          Accueil
        </StyledLink>
        <StyledLink to="/freelances" isdarkmode={(theme === 'dark').toString()}>
          Profils
        </StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </nav>
    </StyledHeader>
  );
};

export default Header;
