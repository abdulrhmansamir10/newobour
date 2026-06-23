import * as React from 'react';
import { LandStatus } from './StatusBadge';

export interface PropertyCardProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  image?: string;
  status?: LandStatus;
  title?: React.ReactNode;
  /** الحي */
  district?: string;
  /** المجاورة / البلوك */
  block?: string | number;
  /** رقم القطعة */
  plotNo?: string | number;
  /** المساحة بالمتر المربع */
  area?: number;
  /** السعر الإجمالي بالجنيه */
  price?: number;
  /** سمات مثل ناصية، بحري، خدمات */
  features?: string[];
  verified?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

/**
 * Marketplace listing card for a land plot or unit — image, status, area,
 * location, price (auto price-per-meter), and feature tags.
 *
 * @startingPoint section="Real Estate" subtitle="Marketplace property listing card" viewport="380x420"
 */
export function PropertyCard(props: PropertyCardProps): JSX.Element;
