import type { FC } from 'react';
import { ProgressBar, Spinner } from '@/index';
import styles from './Progress.module.css';

export const Progress: FC = () => (
	<section id="progress" className={styles.section}>
		<div className={styles.sectionHead}>
			<span className={styles.sectionNum}>15</span>
			<h2 className={styles.sectionTitle}>Progress</h2>
		</div>

		<div className={styles.progressGrid}>
			<div>
				<p className={styles.subsectionLabel}>Progress Bars</p>
				<div className={styles.col}>
					<ProgressBar value={73} label="Win Rate" showValue />
					<ProgressBar value={36} variant="error" label="On-Base %" showValue />
					<ProgressBar
						value={58}
						variant="gradient"
						label="Season Complete"
						showValue
					/>
					<ProgressBar value={40} label="Disabled" showValue />
				</div>
			</div>

			<div>
				<p className={styles.subsectionLabel}>Circular</p>
				<div className={styles.circRow}>
					<div className={styles.circ}>
						<svg
							width="64"
							height="64"
							viewBox="0 0 64 64"
							style={{ transform: 'rotate(-90deg)' }}
						>
							<title>73%</title>
							<circle
								cx="32"
								cy="32"
								r="26"
								fill="none"
								stroke="#E5E7EB"
								strokeWidth="6"
							/>
							<circle
								cx="32"
								cy="32"
								r="26"
								fill="none"
								stroke="#005A9C"
								strokeWidth="6"
								strokeDasharray="163.4"
								strokeDashoffset="44"
								strokeLinecap="round"
							/>
						</svg>
						<div className={styles.circLabel}>73%</div>
					</div>
					<div className={styles.circ}>
						<svg
							width="64"
							height="64"
							viewBox="0 0 64 64"
							style={{ transform: 'rotate(-90deg)' }}
						>
							<title>34%</title>
							<circle
								cx="32"
								cy="32"
								r="26"
								fill="none"
								stroke="#E5E7EB"
								strokeWidth="6"
							/>
							<circle
								cx="32"
								cy="32"
								r="26"
								fill="none"
								stroke="#EF3E42"
								strokeWidth="6"
								strokeDasharray="163.4"
								strokeDashoffset="108"
								strokeLinecap="round"
							/>
						</svg>
						<div
							className={styles.circLabel}
							style={{ color: 'var(--color-red-500)' }}
						>
							34%
						</div>
					</div>
				</div>
			</div>

			<div>
				<p className={styles.subsectionLabel}>Spinners</p>
				<div className={styles.row}>
					<Spinner size="sm" />
					<Spinner size="md" />
					<Spinner size="lg" />
					<Spinner size="md" color="red" />
				</div>
			</div>

			<div>
				<p className={styles.subsectionLabel}>Skeleton</p>
				<div className={styles.skelCard}>
					<div className={styles.skelAv} />
					<div className={styles.skelLines}>
						<div className={styles.skel} style={{ width: '70%', height: 14 }} />
						<div
							className={styles.skel}
							style={{ width: '100%', height: 10 }}
						/>
						<div className={styles.skel} style={{ width: '55%', height: 10 }} />
					</div>
				</div>
			</div>
		</div>
	</section>
);
