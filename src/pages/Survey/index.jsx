import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { SurveyContext } from '../../utils/context';
import { useFetch } from '../../utils/hooks';
import Header from '../../components/Header';
import { Loader } from '../../utils/Atoms';
import Footer from '../../components/Footer';

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
  width: fit-content;
  margin: auto;
  @media (max-width: 768px) {
    margin: 40px auto 0;
  }
`;
const QuestionContent = styled.div`
  width: fit-content;
  margin: 30px auto;
  padding: 0 30px;
`;
const LinkWrapper = styled.nav`
  width: fit-content;
  margin: 30px auto;
  & a {
    margin-left: 20px;
  }
`;
const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
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

  const saveReply = (answer) => {
    saveAnswers({ [questionNumber]: answer });
  };

  return (
    <>
      <Header />
      <QuestionTitle>Question n°{questionPage}</QuestionTitle>
      {isDataLoading ? (
        <Loader />
      ) : (
        <QuestionContent>
          {surveyData && surveyData[questionNumber]}
        </QuestionContent>
      )}
      <ReplyWrapper>
        <ReplyBox
          onClick={() => saveReply(true)}
          isSelected={answers[questionNumber] === true}
        >
          Oui
        </ReplyBox>
        <ReplyBox
          onClick={() => saveReply(false)}
          isSelected={answers[questionNumber] === false}
        >
          Non
        </ReplyBox>
      </ReplyWrapper>
      <LinkWrapper>
        {questionNumber <= 1 ? null : <Link to={previousLink}>Précédent</Link>}
        {questionNumber >= 6 ? (
          <Link to="/results">Résultats</Link>
        ) : (
          <Link to={nextLink}>Suivant</Link>
        )}
      </LinkWrapper>
      <Footer />
    </>
  );
};

export default Survey;
