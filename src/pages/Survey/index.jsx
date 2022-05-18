import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import Header from '../../components/Header';
import { Loader } from '../../utils/Atoms';
import './Survey.css';

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

const Survey = () => {
  const { questionPage } = useParams();
  const questionNumber = parseInt(questionPage);
  const previousLink = `/survey/${questionNumber - 1}`;
  const nextLink = `/survey/${questionNumber + 1}`;
  const [questions, setQuestions] = useState({});
  const [isDataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    setDataLoading(true);
    fetch(`http://localhost:8000/survey`).then((response) =>
      response
        .json()
        .then(({ surveyData }) => {
          setQuestions(surveyData);
          setDataLoading(false);
        })
        .catch((error) => console.log(error))
    );
  }, []);

  return (
    <>
      <Header />
      <QuestionTitle>Question n°{questionPage}</QuestionTitle>
      {isDataLoading ? (
        <Loader />
      ) : (
        <QuestionContent>{questions[questionNumber]}</QuestionContent>
      )}
      <nav className="survey-navbar">
        {questionNumber <= 1 ? null : <Link to={previousLink}>Précédent</Link>}
        {questionNumber >= 10 ? (
          <Link to="/results">Résultats</Link>
        ) : (
          <Link to={nextLink}>Suivant</Link>
        )}
      </nav>
    </>
  );
};

export default Survey;
