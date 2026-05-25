import type { FC } from 'react';
import styles from './Brand.module.css';

export const Brand: FC = () => (
	<section id="brand" className={styles.section}>
		<div className={styles.sectionHead}>
			<span className={styles.sectionNum}>01</span>
			<h2 className={styles.sectionTitle}>Brand & Logo</h2>
		</div>

		<div className={styles.brandGrid}>
			<div className={`${styles.brandTile} ${styles.onWhite}`}>
				<div className={styles.logo}>
					<span className={styles.logoText}>aiharanaoya UI</span>
					<div className={styles.logoDot} />
				</div>
				<div className={styles.cap}>Light · Primary</div>
			</div>
			<div className={`${styles.brandTile} ${styles.onBlue}`}>
				<div className={styles.logo}>
					<span className={`${styles.logoText} ${styles.logoTextLight}`}>
						aiharanaoya UI
					</span>
					<div className={styles.logoDot} />
				</div>
				<div className={`${styles.cap} ${styles.capLight}`}>On Brand Blue</div>
			</div>
			<div className={`${styles.brandTile} ${styles.onNavy}`}>
				<div className={styles.logo}>
					<span className={`${styles.logoText} ${styles.logoTextLight}`}>
						aiharanaoya UI
					</span>
					<div className={`${styles.logoDot} ${styles.logoDotWhite}`} />
				</div>
				<div className={`${styles.cap} ${styles.capLight}`}>On Dark Navy</div>
			</div>
			<div className={`${styles.brandTile} ${styles.onSubtle}`}>
				<div className={styles.logoStack}>
					<span className={styles.eyebrow}>PLATFORM</span>
					<div className={styles.logo}>
						<span className={styles.logoText}>aiharanaoya UI</span>
						<div className={styles.logoDot} />
					</div>
				</div>
				<div className={styles.cap}>With Eyebrow</div>
			</div>
		</div>

		<div className={styles.subsection}>
			<p className={styles.subsectionLabel}>Hero Patterns</p>
			<div className={styles.heroRow}>
				<div className={`${styles.heroPattern} ${styles.hpStadium}`}>
					<div className={styles.pkicker}>Season 2026</div>
					<div className={styles.ptitle}>Stadium Energy</div>
				</div>
				<div className={`${styles.heroPattern} ${styles.hpRed}`}>
					<div className={styles.pkicker}>Spotlight</div>
					<div className={styles.ptitle}>Center Mark</div>
				</div>
				<div className={`${styles.heroPattern} ${styles.hpNavy}`}>
					<div className={styles.pkicker}>Premium</div>
					<div className={styles.ptitle}>Diagonal Gold</div>
				</div>
			</div>
		</div>
	</section>
);
