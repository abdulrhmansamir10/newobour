import * as React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  iconStart?: React.ReactNode;
  size?: 'md' | 'lg';
}

/** Labelled text field with optional leading icon, hint and error states. RTL-first. */
export function Input(props: InputProps): JSX.Element;
