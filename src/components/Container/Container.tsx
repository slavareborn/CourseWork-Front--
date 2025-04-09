import React from 'react';
import { Container } from '@mui/material';

interface ContainerComponentProps {
  children: React.ReactNode;
}

const ContainerComponent: React.FC<ContainerComponentProps> = ({
  children,
}) => {
  return (
    <Container
      data-testid="container"
      sx={{
        margin: '0 auto',
        maxWidth: '1440px',
      }}
    >
      {children}
    </Container>
  );
};

export default ContainerComponent;
