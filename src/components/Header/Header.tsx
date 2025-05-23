import React from 'react';
import { StyledLink, StyledList, StyledNav } from './styled';
const navMenuConfig = [
  {
    title: 'Home',
    link: '/',
  },
  { title: 'Login', link: '/signin' },
];
const Header = () => {
  return (
    <StyledNav>
      <StyledList>
        {navMenuConfig.map((item) => (
          <li key={item.title}>
            <StyledLink href={item.link}>{item.title}</StyledLink>
          </li>
        ))}
      </StyledList>
    </StyledNav>
  );
};

export default Header;
