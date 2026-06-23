import React from 'react';

/**
 * Surface Card — the base container for content across NewObour.
 * Soft rounded corners, subtle navy-tinted shadow, optional hover lift.
 */
export function Card({
  children,
  padding = 'md',
  interactive = false,
  as = 'div',
  style = {},
  ...rest
}) {
  const pads = { none: 0, sm: 'var(--space-4)', md: 'var(--space-6)', lg: 'var(--space-8)' };
  const Tag = as;
  const [hover, setHover] = React.useState(false);

  return (
    <Tag
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-card)',
        padding: pads[padding] ?? pads.md,
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hover ? 'translateY(-2px)' : 'none',
        transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
        cursor: interactive ? 'pointer' : 'default',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
