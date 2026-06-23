import * as React from 'react';

export interface BadgeProps {
  children?: React.ReactNode;
  tone?: 'neutral' | 'navy' | 'gold' | 'success' | 'warning' | 'danger' | 'info';
  /** Filled background instead of soft tint. */
  solid?: boolean;
  size?: 'sm' | 'md';
  iconStart?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Small pill label for counts, tags, and feature flags (ناصية، بحري). */
export function Badge(props: BadgeProps): JSX.Element;
