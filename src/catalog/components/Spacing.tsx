import type { FC } from 'react';
import styles from './Spacing.module.css';

const spaces = [
	{ step: '1', px: 4 },
	{ step: '2', px: 8 },
	{ step: '3', px: 12 },
	{ step: '4', px: 16 },
	{ step: '5', px: 20 },
	{ step: '6', px: 24 },
	{ step: '8', px: 32 },
	{ step: '10', px: 40 },
	{ step: '12', px: 48 },
	{ step: '16', px: 64 },
	{ step: '20', px: 80 },
	{ step: '24', px: 96 },
];

const radii = [
	{ name: 'sm · 4', value: 'var(--radius-sm)' },
	{ name: 'md · 8', value: 'var(--radius-md)' },
	{ name: 'lg · 12', value: 'var(--radius-lg)' },
	{ name: 'xl · 16', value: 'var(--radius-xl)' },
	{ name: '2xl · 24', value: 'var(--radius-2xl)' },
	{ name: 'full · 9999', value: 'var(--radius-full)' },
];

export const Spacing: FC = () => (
	<section id="spacing" className={styles.section}>
		<div className={styles.sectionHead}>
			<span className={styles.sectionNum}>04</span>
			<h2 className={styles.sectionTitle}>Spacing & Radii</h2>
		</div>

		<div className={styles.subsection}>
			<p className={styles.subsectionLabel}>Spacing Scale (8-pt base)</p>
			<div className={styles.spaceRow}>
				{spaces.map(({ step, px }) => (
					<div key={step} className={styles.spaceItem}>
						<div
							className={styles.spaceBox}
							style={{ width: px, height: px }}
						/>
						<div className={styles.spaceName}>
							<strong>{step}</strong> · {px}px
						</div>
					</div>
				))}
			</div>
		</div>

		<div className={styles.subsection}>
			<p className={styles.subsectionLabel}>Radii</p>
			<div className={styles.radiiRow}>
				{radii.map(({ name, value }) => (
					<div
						key={name}
						className={styles.radiiTile}
						style={{ borderRadius: value }}
					>
						<span>{name}</span>
					</div>
				))}
			</div>
		</div>
	</section>
);
