import React from 'react';
import { Button } from '../../atoms/Button/Button';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  const menuIcon = <FontAwesomeIcon icon={faBars} />;
  const userIcon = <FontAwesomeIcon icon={faUserCircle} />;
  return (
    <div className="navBar">
      <Button variant="navIcon menu" icon={menuIcon} />
      <Button variant="navIcon" icon={userIcon} />
    </div>
  );
}

export { NavBar };
