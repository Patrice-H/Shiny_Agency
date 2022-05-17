import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import DefaultPicture from '../../assets/profile.png';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 340px;
  height: 335px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;
const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: bold;
  margin-top: 30px;
`;
const CardImage = styled.img`
  height: 148px;
  width: 148px;
  border-radius: 50%;
  margin: 30px 0;
`;
const CardTitle = styled.span`
  font-size: 25px;
`;

const Card = ({ label, title, picture }) => {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  );
};

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

Card.defaultProps = {
  label: '',
  title: '',
  picture: DefaultPicture,
};

export default Card;
