import * as React from 'react';
import { AppProps } from 'next/app';
import './globals.css';

export default function App({ Component, ...rest }: AppProps) {
  return <Component {...rest} />;
}
