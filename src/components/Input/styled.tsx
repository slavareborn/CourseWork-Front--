import { InputLabel, styled, TextField } from '@mui/material';

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '6px',
    boxSizing: 'border-box !important',
    padding: '4px',
    color: theme.palette.custom.black.highEmphasis,
    fontSize: theme.typography.body2.fontSize,
    fontWeight: theme.typography.body2.fontWeight,
    lineHeight: theme.typography.body2.lineHeight,
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.custom.black.highEmphasis,
    },
    '& .MuiInputAdornment-root': {
      paddingRight: '16px',
    },
    '& .Mui-error': {
      borderColor: '2px solid #f44336 !important',
    },
    '&.Mui-error fieldset': {
      borderColor: '2px solid #f44336',
    },
  },
}));

export const StyledLabel = styled(InputLabel)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.body2.fontWeight,
  lineHeight: theme.typography.body2.lineHeight,
  marginBottom: '8px',
}));

export const StyledInputWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  width: '100%',
}));
