import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../utils/hooks';
import { ThemeContext } from '../../utils/context';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { API_URL } from '../../utils/config';
import Header from '../../components/Header';
import { Loader } from '../../utils/Atoms';
import Tag from '../../components/Tag';
import Footer from '../../components/Footer';

const ProfileSection = styled.section`
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? colors.backgroundDark : colors.backgroundLight};
  margin: 60px;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  @media (max-width: 992px) {
    margin: 60px 0;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 50px;
  }
`;
const ProfilePict = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
`;
const ProfileInfo = styled.div`
  width: 360px;
  position: relative;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
const ProfileName = styled.h1`
  font-size: 32px;
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')};
`;
const ProfileLocation = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : colors.secondary)};
  position: absolute;
  top: 40px;
  right: 0;
  @media (max-width: 768px) {
    position: relative;
    top: 0;
  }
`;
const ProfileJob = styled.p`
  font-size: 25px;
  font-weight: 700;
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')};
`;
const ProfileDispo = styled.p`
  margin-top: 20px;
`;
const IconeDispo = styled.span`
  background-color: green;
  width: 14px;
  height: 14px;
  display: inline-block;
  border-radius: 7px;
`;
const IconeBusy = styled.span`
  background-color: red;
  width: 14px;
  height: 14px;
  display: inline-block;
  border-radius: 7px;
`;
const DispoText = styled.span`
  font-weight: 700;
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')};
  margin-left: 10px;
`;
const ProfilePrice = styled.p`
  font-size: 30px;
  font-weight: 700;
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')};
`;

const Profile = () => {
  const { profileId } = useParams();
  const { data, isDataLoading, error } = useFetch(
    `${API_URL}/freelance/?id=${profileId}`
  );
  const profile = data.freelanceData;
  const { theme } = useContext(ThemeContext);

  if (error) return <span>Désolé il y a eu un problème !</span>;

  return (
    <>
      <Header />
      {!isDataLoading && profile ? (
        <ProfileSection isDarkMode={theme === 'dark'}>
          <div>
            <ProfilePict src={profile.picture} alt={profile.name} />
          </div>
          <ProfileInfo>
            <ProfileName isDarkMode={theme === 'dark'}>
              {profile.name}
            </ProfileName>
            <ProfileLocation isDarkMode={theme === 'dark'}>
              {profile.location}
            </ProfileLocation>
            <ProfileJob isDarkMode={theme === 'dark'}>{profile.job}</ProfileJob>
            <p>
              {profile.skills.map((skill, index) => (
                <Tag key={`skill-${index}`} skill={skill} />
              ))}
            </p>
            {profile.available ? (
              <ProfileDispo>
                <IconeDispo />
                <DispoText isDarkMode={theme === 'dark'}>
                  Disponible maintenant
                </DispoText>
              </ProfileDispo>
            ) : (
              <ProfileDispo>
                <IconeBusy />
                <DispoText isDarkMode={theme === 'dark'}>
                  Non Disponible
                </DispoText>
              </ProfileDispo>
            )}
            <ProfilePrice isDarkMode={theme === 'dark'}>
              <span>{profile.tjm}</span>
              <span> € / jour</span>
            </ProfilePrice>
          </ProfileInfo>
        </ProfileSection>
      ) : (
        <Loader />
      )}
      <Footer />
    </>
  );
};

export default Profile;
