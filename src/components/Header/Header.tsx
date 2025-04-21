import { link } from 'fs';
import Link from 'next/link';
import React from 'react';
const navMenuConfig = [
  {
    title: 'Home',
    link: '/',
  },
  { title: 'Login', link: '/signin' },
];
const Header = () => {
  return (
    <nav>
      <ul>
        {navMenuConfig.map((item) => (
          <li key={item.title}>
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
