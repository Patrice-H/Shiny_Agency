import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeContext } from '../../utils/context';
import colors from '../../utils/style/colors';
import { ReactComponent as Svg } from '../../assets/home-illustration.svg';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const HomeContainer = styled.div`
  margin: 0 50px;
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? colors.backgroundDark : colors.backgroundLight};
  position: relative;
  display: flex;
  padding-bottom: 140px;
  justify-content: space-between;
  @media (max-width: 992px) {
    padding-bottom: 100px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 30px 0;
  }
`;
const LeftPart = styled.div`
  width: 48%;
  @media (max-width: 768px) {
    width: 80%;
    margin: auto;
    order: 2;
  }
`;
const HomeTitle = styled.h1`
  font-size: 50px;
  margin: 180px 0 100px 120px;
  @media (max-width: 992px) {
    font-size: 40px;
    margin: 100px 0 70px 50px;
  }
  @media (max-width: 768px) {
    margin: 70px auto 0;
    text-align: center;
  }
`;
const HomeImg = styled.div`
  width: 40%;
  margin: 140px 75px 0 0;
  @media (max-width: 992px) {
    margin: 100px 50px 0 0;
  }
  @media (max-width: 768px) {
    width: 70%;
    margin: 70px auto 0;
    order: 1;
  }
`;
const StyledLink = styled(Link)`
  padding: 15px 70px;
  margin-left: 100px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
  @media (max-width: 992px) {
    margin-left: 50px;
  }
  @media (max-width: 768px) {
    display: block;
    width: fit-content;
    text-align: center;
    margin: 50px auto;
  }
`;

function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Header />
      <HomeContainer isDarkMode={theme === 'dark'}>
        <LeftPart>
          <HomeTitle>
            Repérez vos besoins, on s’occupe du reste, avec les meilleurs
            talents
          </HomeTitle>
          <StyledLink to="/survey/1" $isFullLink>
            Faire le test
          </StyledLink>
        </LeftPart>
        <HomeImg>
          <Svg />
        </HomeImg>
      </HomeContainer>
      <Footer />
    </>
  );
}

export default Home;
