import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="header-navbar">
      <Link to="/">Accueil</Link>
      <Link to="/freelances">Profils</Link>
      <Link to="/survey/1">Faire le test</Link>
    </nav>
  );
};

export default Header;
