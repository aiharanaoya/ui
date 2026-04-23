import type { FC } from 'react';
import { Card } from '../Card/Card';
import styles from './StatCard.module.css';

type Props = {
	label: string;
	value: string | number;
	trend?: string;
	trendDirection?: 'up' | 'down';
};

export const StatCard: FC<Props> = ({
	label,
	value,
	trend,
	trendDirection = 'up',
}) => (
	<Card className={styles.statCard}>
		<p className={styles.label}>{label}</p>
		<p className={styles.value}>{value}</p>
		{trend && (
			<p
				className={[styles.trend, trendDirection === 'down' && styles.down]
					.filter(Boolean)
					.join(' ')}
			>
				{trendDirection === 'up' ? '↑' : '↓'} {trend}
			</p>
		)}
	</Card>
);
