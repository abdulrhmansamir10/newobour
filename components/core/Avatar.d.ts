import * as React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string;
  /** Used to derive initials when no image. */
  name?: string;
  size?: number;
  /** Gold ring around the avatar. */
  ring?: boolean;
}

/** Circular user avatar — image with initials fallback. */
export function Avatar(props: AvatarProps): JSX.Element;
