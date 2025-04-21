'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { StyledInputWrapper, StyledLabel, StyledTextField } from './styled';
import TextMaxCustom from './TextMaxCustom';

const PhoneInput = ({
  name,
  placeholder,
  label,
}: {
  name: string;
  placeholder: string;
  label: string;
}) => {
  const { control } = useFormContext();
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
            error={!!error}
            helperText={error ? error.message : ''}
            placeholder={placeholder}
            fullWidth
            InputProps={{ inputComponent: TextMaxCustom as any }}
          />
        </StyledInputWrapper>
      )}
    ></Controller>
  );
};

export default PhoneInput;
