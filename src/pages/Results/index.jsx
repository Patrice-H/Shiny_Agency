import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useContext } from 'react';
import { SurveyContext } from '../../utils/context';
import { ThemeContext } from '../../utils/context';
import { useFetch } from '../../utils/hooks';
import colors from '../../utils/style/colors';
import Header from '../../components/Header';
import { Loader } from '../../utils/Atoms';
import Footer from '../../components/Footer';
import { ReactComponent as Svg } from '../../assets/undraw_missed_chances.svg';

const ResultsContainer = styled.div`
  position: relative;
  margin: 0 50px;
  padding-top: 110px;
  padding-bottom: 90px;
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? colors.backgroundDark : colors.backgroundLight};
  @media (max-width: 768px) {
    margin: 40px 0 0;
  }
`;
const ResultsTitle = styled.h1`
  font-size: 31px;
  text-align: center;
  width: 470px;
  margin: auto;
  @media (max-width: 992px) {
    width: 48%;
  }
`;
const CommonTitle = styled.span`
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')};
`;
const DataTitle = styled.span`
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : colors.primary)};
`;
const ResultsContents = styled.div`
  width: 720px;
  margin: 70px auto 0;
  @media (max-width: 992px) {
    width: 72%;
  }
`;
const ResultWrapper = styled.div`
  margin-bottom: 10px;
`;
const ResultTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : colors.primary)};
`;
const ResultDescription = styled.p`
  font-size: 20px;
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : colors.secondary)};
`;
const StyledLink = styled(Link)`
  display: block;
  width: fit-content;
  margin: 70px auto;
  padding: 15px 70px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
  text-decoration: none;
`;
const UnfortunateImg = styled.div`
  width: 61%;
  margin: 20px auto;
`;
const UnfortunateText = styled.p`
  font-size: 20px;
  text-align: center;
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')};
  width: 335px;
  margin: auto;
`;

export const switchTitle = (resultsCount) => {
  if (resultsCount > 0) {
    return 'Les compétences dont vous avez besoin :';
  }
  return 'Dommage...';
};

export const formatJobList = (jobTitle, jobListLenght, index) => {
  if (index === jobListLenght - 1) {
    return `${jobTitle}`;
  }

  return `${jobTitle},`;
};

export const formatAnswersParams = (rawData) => {
  const Data = Object.values(rawData);
  let params = '';
  let separator;
  Data.forEach((data, index) => {
    index < Data.length - 1 ? (separator = '&') : (separator = '');
    params += `a${index + 1}=${data}${separator}`;
  });
  return params;
};

const Results = () => {
  const { answers } = useContext(SurveyContext);
  const { theme } = useContext(ThemeContext);
  const answersParams = formatAnswersParams(answers);
  const { data, isDataLoading, error } = useFetch(
    `http://localhost:8000/results/?${answersParams}`
  );
  const results = data.resultsData;

  if (error) return <span>Désolé il y a eu un problème !</span>;

  return (
    <>
      <Header />
      {isDataLoading ? (
        <Loader />
      ) : (
        <ResultsContainer isDarkMode={theme === 'dark'}>
          <ResultsTitle>
            {results && (
              <CommonTitle isDarkMode={theme === 'dark'}>
                {switchTitle(results.length)}
              </CommonTitle>
            )}
            {results &&
              results.map((result, index) => (
                <DataTitle
                  key={`${result.title}1-${index}`}
                  isDarkMode={theme === 'dark'}
                >
                  {` ${formatJobList(result.title, results.length, index)}`}
                </DataTitle>
              ))}
          </ResultsTitle>
          {results && results.length === 0 ? (
            <>
              <UnfortunateImg>
                <Svg />
              </UnfortunateImg>
              <UnfortunateText isDarkMode={theme === 'dark'}>
                Il semblerait que vous n’ayez besoin d’aucune compétence
              </UnfortunateText>
            </>
          ) : (
            <StyledLink to="/freelances" $isFullLink>
              Découvrez nos profils
            </StyledLink>
          )}
          <ResultsContents>
            {results &&
              results.length > 0 &&
              results.map((result, index) => (
                <ResultWrapper key={`${result.title}2-${index}`}>
                  <ResultTitle isDarkMode={theme === 'dark'}>
                    {result.title}
                  </ResultTitle>
                  <ResultDescription isDarkMode={theme === 'dark'}>
                    {result.description}
                  </ResultDescription>
                </ResultWrapper>
              ))}
          </ResultsContents>
        </ResultsContainer>
      )}
      <Footer />
    </>
  );
};

export default Results;
