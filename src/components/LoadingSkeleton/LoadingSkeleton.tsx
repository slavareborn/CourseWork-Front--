import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { StyledBox } from './styled';

export default function LoadingSkeleton() {
  return (
    <StyledBox data-testid="loading-skeleton">
      {Array.from({ length: 6 }).map((_, index) => (
        <Skeleton
          key={index}
          variant="rectangular"
          width="100%"
          height={220}
          animation="wave"
        />
      ))}
    </StyledBox>
  );
}
