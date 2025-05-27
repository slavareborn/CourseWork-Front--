'use client';

import FormInput from '@/components/Input/Input';
import { styled } from '@mui/material';
import Link from 'next/link';

export const StyledSignIn = styled('section')(() => ({
  paddingTop: '100px',
}));

export const StyledForm = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
  alignItems: 'center',
  width: '100%',
}));

export const StyledLink = styled(Link)(() => ({
  color: '#0000FF',
  textDecoration: 'none',
  '&:hover': {
    color: '#000FFF',
    textDecoration: 'underline',
  },
}));

export const StyledFormInput = styled(FormInput)(() => ({
  width: '100%',
}));
