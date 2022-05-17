import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { ReactComponent as Svg } from '../../assets/404.svg';

const ErrorContainer = styled.div`
  margin: 0 50px;
  background-color: ${colors.backgroundLight};
  padding: 40px 0 100px;
  @media (max-width: 768px) {
    margin: 40px 0;
  }
`;
const ErrorText = styled.p`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin: 60px 20px;
`;
const ErrorImg = styled.div`
  width: 61%;
  margin: auto;
`;

const Error = () => {
  return (
    <ErrorContainer>
      <ErrorText>Oups...</ErrorText>
      <ErrorImg>
        <Svg />
      </ErrorImg>
      <ErrorText>Il semblerait qu’il y ait un problème</ErrorText>
    </ErrorContainer>
  );
};

export default Error;
