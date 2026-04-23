import type { FC } from 'react';
import { Card } from '../Card/Card';
import styles from './HeroCard.module.css';

type Props = {
	label: string;
	value: string | number;
	subtitle?: string;
};

export const HeroCard: FC<Props> = ({ label, value, subtitle }) => (
	<Card className={styles.heroCard}>
		<p className={styles.label}>{label}</p>
		<p className={styles.value}>{value}</p>
		{subtitle && <p className={styles.subtitle}>{subtitle}</p>}
	</Card>
);
