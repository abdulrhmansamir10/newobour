import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Adds hover lift + pointer cursor. */
  interactive?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

/** Base white surface container — soft corners, restrained navy shadow. */
export function Card(props: CardProps): JSX.Element;
