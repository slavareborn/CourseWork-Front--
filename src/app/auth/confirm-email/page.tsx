import React from 'react';
import MainContent from '@/components/MainComponent/MainComponent';
import { StyledBox, StyledSection } from './styled';
import EmailConfirmation from '@/components/emailConfirmation/emailConfirmation';
import { Container } from '@mui/material';

const ConfirmEmail = () => {
  return (
    <Container>
      <MainContent>
        <StyledBox>
          <StyledSection>
            <EmailConfirmation />
          </StyledSection>
        </StyledBox>
      </MainContent>
    </Container>
  );
};

export default ConfirmEmail;
