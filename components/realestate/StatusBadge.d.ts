import * as React from 'react';

export type LandStatus = 'mail' | 'ledger' | 'alloc' | 'license' | 'build';

export interface StatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Legal land state. mail=تم تقديم البريد, ledger=نزلت كشف, alloc=تم التخصيص, license=تم الترخيص, build=جاري البناء */
  status?: LandStatus;
  /** Override the default Arabic label. */
  label?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  dot?: boolean;
}

/**
 * Semantic badge for a land plot's legal status, with brand-correct colors.
 *
 * @startingPoint section="Real Estate" subtitle="Land legal-state badges" viewport="700x120"
 */
export function StatusBadge(props: StatusBadgeProps): JSX.Element;
