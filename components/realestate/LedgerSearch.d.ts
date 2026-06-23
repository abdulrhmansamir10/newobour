import * as React from 'react';

export interface LedgerSearchField { value: string; label: string; }

export interface LedgerSearchProps extends React.HTMLAttributes<HTMLDivElement> {
  fields?: LedgerSearchField[];
  field?: string;
  query?: string;
  placeholder?: string;
  onFieldChange?: (field: string) => void;
  onQueryChange?: (query: string) => void;
  onSearch?: (payload: { field: string; query: string }) => void;
  loading?: boolean;
}

/**
 * The legalization-ledger search bar (كشوف التقنين) — field-type selector
 * (name / national ID / plot) plus query input and search button.
 *
 * @startingPoint section="Real Estate" subtitle="Legalization ledger search bar" viewport="700x110"
 */
export function LedgerSearch(props: LedgerSearchProps): JSX.Element;
