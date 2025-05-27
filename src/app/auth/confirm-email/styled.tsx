'use client';
import { Box, styled } from '@mui/material';

export const StyledBox = styled(Box)(() => ({
  display: 'flex',
  minHeight: '100vh',
  justifyContent: 'space-between',
  width: '100%',
  gap: '32px',
}));

export const StyledSection = styled(Box)(() => ({
  width: '51%',
  padding: '20px 0 20px 50px',
}));
