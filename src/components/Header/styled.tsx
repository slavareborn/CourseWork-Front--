'use client';

import { styled } from '@mui/material';
import Link from 'next/link';

export const StyledNav = styled('nav')(() => ({
  backgroundColor: '#333',
  padding: '10px 20px',
  boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
}));

export const StyledList = styled('ul')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
}));

export const StyledLink = styled(Link)(() => ({
  color: '#0000FF',
  '&:hover': {
    color: '#000FFF',
    textDecoration: 'underline',
  },
}));
