import type { FC } from 'react';
import styles from './Spinner.module.css';

type Size = 'sm' | 'md' | 'lg';
type Color = 'blue' | 'red';

type Props = {
	size?: Size;
	color?: Color;
	label?: string;
};

const sizeClass: Record<Size, string> = {
	sm: styles.sm,
	md: styles.md,
	lg: styles.lg,
};

const colorClass: Record<Color, string> = {
	blue: styles.blue,
	red: styles.red,
};

export const Spinner: FC<Props> = ({
	size = 'md',
	color = 'blue',
	label = 'ロード中',
}) => (
	<div
		className={[styles.spinner, sizeClass[size], colorClass[color]].join(' ')}
		role="status"
		aria-label={label}
	/>
);
