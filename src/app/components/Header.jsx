import * as React from 'react';
import { Link } from 'react-router-dom';

import 'Styles/Header.scss';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/score">SCORE</Link>
        </li>
        <li>
          <Link to="/race">RACE</Link>
        </li>
        <li>
          <Link to="/create">CREATE</Link>
        </li>
      </ul>  
    </nav>  
  </header>
);

export default Header;
