import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { SurveyContext } from '../../utils/context';
import { ThemeContext } from '../../utils/context';
import { useFetch } from '../../utils/hooks';
import Header from '../../components/Header';
import { Loader } from '../../utils/Atoms';
import Footer from '../../components/Footer';

const QuestionTitle = styled.h2`
  font-size: 25px;
  text-decoration: underline;
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')};
  text-decoration-color: ${colors.primary};
  width: fit-content;
  margin: auto;
  @media (max-width: 768px) {
    margin: 40px auto 0;
  }
`;
const QuestionContent = styled.div`
  font-size: 20px;
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')};
  width: fit-content;
  margin: 30px auto;
  padding: 0 30px;
`;
const LinkWrapper = styled.nav`
  width: fit-content;
  margin: 30px auto;
  & a {
    font-size: 18px;
    color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')};
    margin-left: 20px;
  }
`;
const ReplyBox = styled.button`
  font-size: 25px;
  font-weight: 700;
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')};
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? colors.backgroundDark : colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`;
const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Survey = () => {
  const { questionPage } = useParams();
  const questionNumber = parseInt(questionPage);
  const previousLink = `/survey/${questionNumber - 1}`;
  const nextLink = `/survey/${questionNumber + 1}`;
  const { answers, saveAnswers } = useContext(SurveyContext);
  const { data, isDataLoading } = useFetch(`http://localhost:8000/survey`);
  const { surveyData } = data;
  const { theme } = useContext(ThemeContext);

  const saveReply = (answer) => {
    saveAnswers({ [questionNumber]: answer });
  };

  return (
    <>
      <Header />
      <QuestionTitle isDarkMode={theme === 'dark'}>
        Question n°{questionPage}
      </QuestionTitle>
      {isDataLoading ? (
        <Loader />
      ) : (
        <QuestionContent isDarkMode={theme === 'dark'}>
          {surveyData && surveyData[questionNumber]}
        </QuestionContent>
      )}
      <ReplyWrapper>
        <ReplyBox
          onClick={() => saveReply(true)}
          isSelected={answers[questionNumber] === true}
          isDarkMode={theme === 'dark'}
        >
          Oui
        </ReplyBox>
        <ReplyBox
          onClick={() => saveReply(false)}
          isSelected={answers[questionNumber] === false}
          isDarkMode={theme === 'dark'}
        >
          Non
        </ReplyBox>
      </ReplyWrapper>
      <LinkWrapper isDarkMode={theme === 'dark'}>
        {questionNumber <= 1 ? null : <Link to={previousLink}>Précédente</Link>}
        {questionNumber >= 6 ? (
          <Link to="/results">Résultats</Link>
        ) : (
          <Link to={nextLink}>Suivante</Link>
        )}
      </LinkWrapper>
      <Footer />
    </>
  );
};

export default Survey;
