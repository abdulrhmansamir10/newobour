import * as React from 'react';

export interface TabItem { value: string; label: React.ReactNode; count?: number; }

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  items: TabItem[];
  /** Controlled active value. Omit for uncontrolled. */
  value?: string;
  onChange?: (value: string) => void;
}

/** Underline tabs with gold active indicator and optional count pills. */
export function Tabs(props: TabsProps): JSX.Element;
