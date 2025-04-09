'use client';
import { styled, Box } from '@mui/material';

export const StyledBox = styled(Box)(({}) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '10px',
  gridTemplateRows: 'auto auto',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
}));
