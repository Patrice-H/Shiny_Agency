import styled from 'styled-components';
import colors from '../../utils/style/colors';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
`;

const NightModeButton = styled.button`
  font-size: 18px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.secondary};
`;

function Footer() {
  return (
    <FooterContainer>
      <NightModeButton>Changer de mode</NightModeButton>
    </FooterContainer>
  );
}

export default Footer;
