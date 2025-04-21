'use client';
import React from 'react';
import { IMaskInput } from 'react-imask';

interface CustomProps {
  name: string;
  onChange: (event: { target: { name: string; value: string } }) => void;
}

const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <IMaskInput
        {...other}
        mask="+380 (00) 000-00-00"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref as React.RefCallback<HTMLInputElement>}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  },
);

export default TextMaskCustom;
