import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../constants';
import './index.scss';

function Header() {
  return (
    <header className="Header">
      <nav className="Header--navigation">
        <NavLink exact className="Header--navigation-item" to={ROUTES.defaultPage}>
          Home
        </NavLink>
        <NavLink exact className="Header--navigation-item" to={ROUTES.scoreBoard}>
          Score Board
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
