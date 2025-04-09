import React from 'react';
import { Box } from '@mui/material';

interface MainComponentProps {
  children: React.ReactNode;
}

const MainContent: React.FC<MainComponentProps> = ({ children }) => {
  return <Box component="main">{children}</Box>;
};

export default MainContent;
