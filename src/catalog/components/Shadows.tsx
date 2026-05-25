import type { FC } from 'react';
import styles from './Shadows.module.css';

const shadows = [
	{ name: 'xs', value: 'var(--shadow-xs)' },
	{ name: 'sm', value: 'var(--shadow-sm)' },
	{ name: 'md', value: 'var(--shadow-md)' },
	{ name: 'lg', value: 'var(--shadow-lg)' },
	{ name: 'xl', value: 'var(--shadow-xl)' },
	{ name: 'brand', value: 'var(--shadow-brand)' },
	{ name: 'accent', value: 'var(--shadow-accent)' },
];

export const Shadows: FC = () => (
	<section id="shadows" className={styles.section}>
		<div className={styles.sectionHead}>
			<span className={styles.sectionNum}>05</span>
			<h2 className={styles.sectionTitle}>Shadows</h2>
		</div>

		<div className={styles.shadowRow}>
			{shadows.map(({ name, value }) => (
				<div
					key={name}
					className={styles.shadowTile}
					style={{ boxShadow: value }}
				>
					{name}
				</div>
			))}
		</div>
	</section>
);
