import * as React from 'react';

export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. primary = navy, accent = gold, plus outline/ghost/danger. */
  variant?: 'primary' | 'accent' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  /** Stretch to full width of container. */
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/**
 * Primary action button for NewObour. Navy by default, gold for high-emphasis
 * accent actions; outline/ghost for secondary; supports inline line-icons.
 *
 * @startingPoint section="Core" subtitle="Navy & gold action buttons" viewport="700x120"
 */
export function Button(props: ButtonProps): JSX.Element;
