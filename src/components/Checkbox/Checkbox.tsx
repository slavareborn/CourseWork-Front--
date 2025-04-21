'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Checkbox, FormControlLabel, FormHelperText } from '@mui/material';

const FormCheckbox = ({ name, label }: { name: string; label: string }) => {
  const { control } = useFormContext();

  return (
    // <FormControl component="fieldset">
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <FormControlLabel
            control={
              <Checkbox
                {...field}
                checked={!!field.value}
                // onChange={(e) => field.onChange(e.target.checked)}
              />
            }
            label={label}
          />
          {error && <FormHelperText error>{error.message}</FormHelperText>}
        </>
      )}
    />
    // </FormControl>
  );
};

export default FormCheckbox;
