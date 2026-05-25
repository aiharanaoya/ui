import type { FC } from 'react';
import styles from './ColorSection.module.css';

const blueSwatches = [
	{ step: '50', hex: '#EBF3FA', dark: false },
	{ step: '100', hex: '#C8DFF1', dark: false },
	{ step: '200', hex: '#91BFE3', dark: false },
	{ step: '300', hex: '#5A9FD5', dark: true },
	{ step: '400', hex: '#1A6FAF', dark: true },
	{ step: '500★', hex: '#005A9C', dark: true },
	{ step: '600', hex: '#004880', dark: true },
	{ step: '700', hex: '#003664', dark: true },
	{ step: '800', hex: '#002448', dark: true },
	{ step: '900', hex: '#0A1628', dark: true },
];
const redSwatches = [
	{ step: '50', hex: '#FEF2F2', dark: false },
	{ step: '100', hex: '#FDEAEA', dark: false },
	{ step: '200', hex: '#FCA5A5', dark: false },
	{ step: '300', hex: '#F87171', dark: true },
	{ step: '400', hex: '#F55A5E', dark: true },
	{ step: '500★', hex: '#EF3E42', dark: true },
	{ step: '600', hex: '#CC2D31', dark: true },
	{ step: '700', hex: '#991B1E', dark: true },
	{ step: '800', hex: '#7F1D1F', dark: true },
	{ step: '—', hex: 'n/a', dark: false, empty: true },
];
const graySwatches = [
	{ step: 'white', hex: '#FFFFFF', dark: false, bordered: true },
	{ step: '50', hex: '#F9FAFB', dark: false, bordered: true },
	{ step: '100', hex: '#F3F4F6', dark: false, bordered: true },
	{ step: '200', hex: '#E5E7EB', dark: false },
	{ step: '300', hex: '#D1D5DB', dark: false },
	{ step: '400', hex: '#9CA3AF', dark: true },
	{ step: '500', hex: '#6B7280', dark: true },
	{ step: '600', hex: '#4B5563', dark: true },
	{ step: '700', hex: '#374151', dark: true },
	{ step: '900', hex: '#111827', dark: true },
];

type Swatch = {
	step: string;
	hex: string;
	dark: boolean;
	bordered?: boolean;
	empty?: boolean;
};

const SwatchTile: FC<Swatch> = ({ step, hex, dark, bordered, empty }) => (
	<div
		className={[
			styles.swatch,
			dark ? styles.swatchDark : styles.swatchLight,
			bordered ? styles.swatchBordered : '',
		].join(' ')}
		style={
			empty
				? { background: 'transparent', border: '1px dashed #D1D5DB' }
				: { background: hex }
		}
	>
		<span
			className={styles.swatchStep}
			style={empty ? { color: '#9CA3AF' } : undefined}
		>
			{step}
		</span>
		<span
			className={styles.swatchHex}
			style={empty ? { color: '#9CA3AF' } : undefined}
		>
			{hex}
		</span>
	</div>
);

export const ColorSection: FC = () => (
	<section id="color" className={styles.section}>
		<div className={styles.sectionHead}>
			<span className={styles.sectionNum}>02</span>
			<h2 className={styles.sectionTitle}>Color</h2>
		</div>

		<div className={styles.colorScales}>
			<div className={styles.scale}>
				<div className={styles.scaleHead}>
					Royal Blue<small>Primary</small>
				</div>
				<div className={styles.swatches}>
					{blueSwatches.map((s) => (
						<SwatchTile key={s.step} {...s} />
					))}
				</div>
			</div>
			<div className={styles.scale}>
				<div className={styles.scaleHead}>
					Red<small>Accent</small>
				</div>
				<div className={styles.swatches}>
					{redSwatches.map((s) => (
						<SwatchTile key={s.step} {...s} />
					))}
				</div>
			</div>
			<div className={styles.scale}>
				<div className={styles.scaleHead}>
					Neutral<small>Gray</small>
				</div>
				<div className={styles.swatches}>
					{graySwatches.map((s) => (
						<SwatchTile key={s.step} {...s} />
					))}
				</div>
			</div>
			<div className={styles.scale}>
				<div className={styles.scaleHead}>
					Gold<small>Premium</small>
				</div>
				<div className={styles.swatches}>
					<SwatchTile step="400" hex="#F5C842" dark={true} />
					<SwatchTile step="500" hex="#E6B800" dark={true} />
					<SwatchTile step="600" hex="#C49C00" dark={true} />
					<div
						className={styles.swatchBordered}
						style={{
							gridColumn: 'span 7',
							background: 'transparent',
							border: '1px dashed #D1D5DB',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							fontFamily: 'var(--font-mono)',
							fontSize: 10,
							letterSpacing: '0.1em',
							textTransform: 'uppercase',
							color: '#9CA3AF',
							borderRadius: 'var(--radius-sm)',
							padding: '8px',
						}}
					>
						Reserved for trophy / MVP states
					</div>
				</div>
			</div>
		</div>

		<div className={styles.subsection}>
			<p className={styles.subsectionLabel}>Semantic Tokens</p>
			<div className={styles.semanticGrid}>
				{[
					{
						bg: 'var(--color-blue-500)',
						role: 'Brand · Primary',
						name: '--color-brand-primary',
					},
					{
						bg: 'var(--color-red-500)',
						role: 'Brand · Accent',
						name: '--color-brand-secondary',
					},
					{
						bg: 'var(--color-blue-900)',
						role: 'Brand · Dark',
						name: '--color-brand-dark',
					},
					{ bg: '#16A34A', role: 'Success', name: '--color-success · #16A34A' },
					{ bg: '#D97706', role: 'Warning', name: '--color-warning · #D97706' },
					{ bg: 'var(--color-red-500)', role: 'Error', name: '--color-error' },
					{ bg: 'var(--color-blue-400)', role: 'Info', name: '--color-info' },
					{
						bg: 'var(--color-gray-700)',
						role: 'Foreground · Secondary',
						name: '--color-fg-secondary',
					},
				].map(({ bg, role, name }) => (
					<div key={name} className={styles.semTile} style={{ background: bg }}>
						<div className={styles.semRole}>{role}</div>
						<div className={styles.semName}>{name}</div>
					</div>
				))}
			</div>
		</div>
	</section>
);
