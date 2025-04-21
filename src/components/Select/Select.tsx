import { Autocomplete, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface Option {
  label: string;
  value: string;
}

// interface SelectInputProps {
//   name: string;
//   label: string;
//   options: Option[];
//   placeholder?: string;
//   ariaLabel?: string;
// }

const SelectInput = ({
  name,
  label,
  options,
  placeholder,
}: {
  name: string;
  label: string;
  placeholder: string;
  options: Option[];
}) => {
  const { control } = useFormContext();
  const [localOptions, setLocalOptions] = useState<Option[]>(options);

  useEffect(() => {
    setLocalOptions(options);
  }, [options]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <label htmlFor={name}>{label}</label>
          <Autocomplete
            options={localOptions}
            getOptionLabel={(option) =>
              option && option.label ? option.label : ''
            }
            value={
              localOptions.find((opt) => opt.value === field.value) || null
            }
            onChange={(event, newValue) => {
              if (
                newValue &&
                typeof newValue === 'object' &&
                !localOptions.includes(newValue)
              ) {
                setLocalOptions((prev) => [...prev, newValue]);
              }
              field.onChange(newValue?.value || '');
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                fullWidth
                InputProps={{
                  ...params.InputProps,
                  endAdornment: null,
                }}
                error={!!error}
                placeholder={placeholder}
                helperText={error ? error.message : ''}
              />
            )}
            isOptionEqualToValue={(option, value) =>
              option.value === value.value
            }
            noOptionsText="Місто не знайдено"
          />
        </div>
      )}
    />
  );
};

export default SelectInput;
