'use client';

import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { StyledInputWrapper, StyledLabel, StyledTextField } from './styled';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const FormInput = ({
  name,
  type,
  placeholder,
  label,
}: {
  name: string;
  type?: string;
  placeholder?: string;
  label?: string;
}) => {
  const { control } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <StyledInputWrapper>
          <StyledLabel htmlFor={name}>{label}</StyledLabel>
          <StyledTextField
            {...field}
            id={name}
            variant="outlined"
            type={type === 'password' && !showPassword ? 'password' : 'text'}
            error={!!error}
            helperText={error ? error.message : ''}
            placeholder={placeholder}
            fullWidth
            slotProps={{
              input:
                type === 'password'
                  ? {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            area-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }
                  : undefined,
            }}
          />
        </StyledInputWrapper>
      )}
    ></Controller>
  );
};

export default FormInput;
