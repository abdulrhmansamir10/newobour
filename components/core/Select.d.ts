import * as React from 'react';

export interface SelectOption { value: string; label: string; }

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  options?: (SelectOption | string)[];
  placeholder?: string;
  size?: 'md' | 'lg';
}

/** Dropdown select matching Input chrome — land status, neighbourhood, block. */
export function Select(props: SelectProps): JSX.Element;
