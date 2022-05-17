import styled from 'styled-components';
import colors from '../../utils/style/colors';
import Header from '../../components/Header';
import Card from '../../components/Card';
import DefaultPicture from '../../assets/profile.png';

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
    picture: DefaultPicture,
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
    picture: DefaultPicture,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
    picture: DefaultPicture,
  },
];

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
  return (
    <>
      <Header />
      <StyledTitle>Trouvez votre prestataire</StyledTitle>
      <StyledPromise>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </StyledPromise>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            picture={profile.picture}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </>
  );
};

export default Freelances;
