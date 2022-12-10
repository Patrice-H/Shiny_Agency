import { useContext } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { useFetch } from '../../utils/hooks';
import { ThemeContext } from '../../utils/context';
import { API_URL } from '../../utils/config';
import Header from '../../components/Header';
import Card from '../../components/Card';
import { Loader } from '../../utils/Atoms';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const StyledTitle = styled.h1`
  font-size: 30px;
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')};
  width: fit-content;
  margin: 95px auto 0;
`;
const StyledPromise = styled.p`
  font-size: 20px;
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : colors.secondary)};
  width: fit-content;
  margin: 50px auto 100px;
  padding: 0 30px;
`;
const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  gap: 50px;
  margin: auto;
`;

const Freelances = () => {
  const { data, isDataLoading, error } = useFetch(`${API_URL}/freelances`);
  const profiles = data.freelancersList;
  const { theme } = useContext(ThemeContext);

  if (error) return <span>Désolé il y a eu un problème !</span>;

  return (
    <>
      <Header />
      <StyledTitle isDarkMode={theme === 'dark'}>
        Trouvez votre prestataire
      </StyledTitle>
      <StyledPromise isDarkMode={theme === 'dark'}>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </StyledPromise>
      {isDataLoading ? (
        <Loader />
      ) : (
        <CardsContainer>
          {profiles &&
            profiles.map((profile, index) => (
              <Link
                key={`freelance-${profile.id}`}
                to={`/profile/${profile.id}`}
              >
                <Card
                  key={`${profile.name}-${index}`}
                  label={profile.job}
                  picture={profile.picture}
                  title={profile.name}
                />
              </Link>
            ))}
        </CardsContainer>
      )}
      <Footer />
    </>
  );
};

export default Freelances;
