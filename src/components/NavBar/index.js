import React from 'react';
import { Nav, Link } from './styles';

import { GoHome, GoListUnordered } from 'react-icons/go';

const SIZE = '26px';

export const NavBar = () => {
  return (
    <Nav>
      <Link to='/'>
        <GoHome size={SIZE} />
      </Link>
      <Link to='/lists'>
        <GoListUnordered size={SIZE} />
      </Link>
    </Nav>
  );
};
