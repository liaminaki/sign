import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface NavBarProps {
  backPath: string;
}

const NavBar: React.FC<NavBarProps> = ({ backPath }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(backPath);
  };

  return (
    <nav className='nav-bar'>
      <div className='nav-bar-btns'>
        <button title='Back' onClick={handleBackClick}>
          <FontAwesomeIcon icon={faArrowLeft} size="lg" />
        </button>
        <Link to="/" className="home-button">
          <em>sign</em>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;