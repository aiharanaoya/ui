import type { FC } from 'react';
import { Button } from '@/index';
import styles from './Buttons.module.css';

export const Buttons: FC = () => (
	<section id="buttons" className={styles.section}>
		<div className={styles.sectionHead}>
			<span className={styles.sectionNum}>06</span>
			<h2 className={styles.sectionTitle}>Buttons</h2>
		</div>

		<div className={styles.specimen}>
			<p className={styles.subsectionLabel}>Variants</p>
			<div className={styles.specimenRow}>
				<Button variant="primary">Primary</Button>
				<Button variant="accent">Accent</Button>
				<Button variant="outline">Outline</Button>
				<Button variant="ghost">Ghost</Button>
				<Button variant="dark">Dark</Button>
				<button
					type="button"
					style={{
						background: '#C9952C',
						color: '#fff',
						fontSize: 13,
						fontWeight: 600,
						padding: '8px 18px',
						borderRadius: 8,
						border: 'none',
						cursor: 'pointer',
						fontFamily: 'var(--font-sans)',
					}}
				>
					Gold
				</button>
				<button
					type="button"
					style={{
						background: '#DC2626',
						color: '#fff',
						fontSize: 13,
						fontWeight: 600,
						padding: '8px 18px',
						borderRadius: 8,
						border: 'none',
						cursor: 'pointer',
						fontFamily: 'var(--font-sans)',
					}}
				>
					Danger
				</button>
				<Button variant="primary" disabled>
					Disabled
				</Button>
			</div>

			<p className={styles.subsectionLabel} style={{ marginTop: 24 }}>
				Sizes & Shapes
			</p>
			<div className={styles.specimenRow}>
				<Button size="sm">Small</Button>
				<Button size="md">Medium</Button>
				<Button size="lg">Large</Button>
				<Button variant="primary" pill>
					Pill Shape
				</Button>
				<Button variant="accent" pill size="lg">
					Get Started
				</Button>
			</div>

			<p className={styles.subsectionLabel} style={{ marginTop: 24 }}>
				Icon Buttons
			</p>
			<div className={styles.specimenRow}>
				<button
					type="button"
					style={{
						width: 36,
						height: 36,
						borderRadius: 8,
						border: '1.5px solid var(--color-gray-300)',
						background: 'var(--color-white)',
						color: 'var(--color-gray-700)',
						fontSize: 18,
						cursor: 'pointer',
						display: 'inline-flex',
						alignItems: 'center',
						justifyContent: 'center',
						fontFamily: 'var(--font-sans)',
					}}
				>
					+
				</button>
				<button
					type="button"
					style={{
						width: 36,
						height: 36,
						borderRadius: 8,
						border: 'none',
						background: 'var(--color-blue-500)',
						color: '#fff',
						fontSize: 14,
						cursor: 'pointer',
						display: 'inline-flex',
						alignItems: 'center',
						justifyContent: 'center',
						fontFamily: 'var(--font-sans)',
					}}
				>
					★
				</button>
				<button
					type="button"
					style={{
						width: 36,
						height: 36,
						borderRadius: 8,
						border: 'none',
						background: 'var(--color-gray-900)',
						color: '#fff',
						fontSize: 14,
						cursor: 'pointer',
						display: 'inline-flex',
						alignItems: 'center',
						justifyContent: 'center',
						fontFamily: 'var(--font-sans)',
					}}
				>
					↗
				</button>
			</div>
		</div>
	</section>
);
