import { Link, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import './Survey.css';

const Survey = () => {
  const { questionNumber } = useParams();
  const previousLink = `/survey/${parseInt(questionNumber) - 1}`;
  const nextLink = `/survey/${parseInt(questionNumber) + 1}`;

  return (
    <>
      <Header />
      <h1>Questionnaire</h1>
      <h2>Question n°{questionNumber}</h2>
      <nav className="survey-navbar">
        {parseInt(questionNumber) <= 1 ? null : (
          <Link to={previousLink}>Précédent</Link>
        )}
        {parseInt(questionNumber) >= 10 ? (
          <Link to="/results">Résultats</Link>
        ) : (
          <Link to={nextLink}>Suivant</Link>
        )}
      </nav>
    </>
  );
};

export default Survey;
