import type { FC } from 'react';
import styles from './ProgressBar.module.css';

type Variant = 'default' | 'gradient' | 'error';

type Props = {
	value: number;
	variant?: Variant;
	label?: string;
	showValue?: boolean;
};

const variantClass: Record<Variant, string> = {
	default: styles.default,
	gradient: styles.gradient,
	error: styles.error,
};

export const ProgressBar: FC<Props> = ({
	value,
	variant = 'default',
	label,
	showValue = false,
}) => {
	const clamped = Math.min(100, Math.max(0, value));

	return (
		<div className={styles.wrap}>
			{(label || showValue) && (
				<div className={styles.header}>
					{label && <span className={styles.label}>{label}</span>}
					{showValue && <span className={styles.value}>{clamped}%</span>}
				</div>
			)}
			<div
				className={styles.track}
				role="progressbar"
				aria-valuenow={clamped}
				aria-valuemin={0}
				aria-valuemax={100}
				aria-label={label}
			>
				<div
					className={[styles.bar, variantClass[variant]].join(' ')}
					style={{ width: `${clamped}%` }}
				/>
			</div>
		</div>
	);
};
