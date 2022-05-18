import { useState, useEffect } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import Header from '../../components/Header';
import Card from '../../components/Card';
import { Loader } from '../../utils/Atoms';
import Footer from '../../components/Footer';

const StyledTitle = styled.h1`
  font-size: 30px;
  width: fit-content;
  margin: 95px auto 0;
`;
const StyledPromise = styled.p`
  font-size: 20px;
  color: ${colors.secondary};
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
  const [profiles, setProfiles] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false);
  useEffect(() => {
    setDataLoading(true);
    fetch(`http://localhost:8000/freelances`).then((response) =>
      response
        .json()
        .then(({ freelancersList }) => {
          setProfiles(freelancersList);
          setDataLoading(false);
        })
        .catch((error) => console.log(error))
    );
  }, []);

  return (
    <>
      <Header />
      <StyledTitle>Trouvez votre prestataire</StyledTitle>
      <StyledPromise>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </StyledPromise>
      {isDataLoading ? (
        <Loader />
      ) : (
        <CardsContainer>
          {profiles.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.job}
              picture={profile.picture}
              title={profile.name}
            />
          ))}
        </CardsContainer>
      )}
      <Footer />
    </>
  );
};

export default Freelances;
