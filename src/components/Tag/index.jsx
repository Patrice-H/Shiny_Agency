import { useContext } from 'react';
import { ThemeContext } from '../../utils/context';
import styled from 'styled-components';

const StyledTag = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')};
  padding: 5px 10px;
  margin-right: 12px;
  border: solid 1px;
  border-color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')};
  border-radius: 8px;
  @media (max-width: 768px) {
    margin: 0 6px;
  }
`;

const Tag = ({ skill }) => {
  const { theme } = useContext(ThemeContext);

  return <StyledTag isDarkMode={theme === 'dark'}>{skill}</StyledTag>;
};

export default Tag;
