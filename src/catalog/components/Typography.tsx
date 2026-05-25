import type { FC } from 'react';
import styles from './Typography.module.css';

export const Typography: FC = () => (
	<section id="typography" className={styles.section}>
		<div className={styles.sectionHead}>
			<span className={styles.sectionNum}>03</span>
			<h2 className={styles.sectionTitle}>Typography</h2>
		</div>

		<div className={styles.typeSpec}>
			<div className={styles.typeMeta}>
				<strong>Display XL</strong>
				<br />
				Barlow Condensed
			</div>
			<div className={`${styles.typeSample} ${styles.tsDisplayXl}`}>
				GAME ON.
			</div>
			<div className={styles.typeInfo}>
				96 / 88 / 800
				<br />
				tracking -0.02em
			</div>
		</div>
		<div className={styles.typeSpec}>
			<div className={styles.typeMeta}>
				<strong>Display LG</strong>
				<br />
				Barlow Condensed
			</div>
			<div className={`${styles.typeSample} ${styles.tsDisplayLg}`}>
				Season Stats
			</div>
			<div className={styles.typeInfo}>64 / 64 / 700</div>
		</div>
		<div className={styles.typeSpec}>
			<div className={styles.typeMeta}>
				<strong>Display MD</strong>
				<br />
				Barlow Condensed
			</div>
			<div className={`${styles.typeSample} ${styles.tsDisplayMd}`}>
				Section Headline
			</div>
			<div className={styles.typeInfo}>44 / 44 / 600</div>
		</div>
		<div className={styles.typeSpec}>
			<div className={styles.typeMeta}>
				<strong>Heading 1</strong>
				<br />
				Plus Jakarta Sans
			</div>
			<div className={`${styles.typeSample} ${styles.tsH1}`}>
				The home of every player on your roster.
			</div>
			<div className={styles.typeInfo}>36 / 42 / 700</div>
		</div>
		<div className={styles.typeSpec}>
			<div className={styles.typeMeta}>
				<strong>Heading 2</strong>
				<br />
				Plus Jakarta Sans
			</div>
			<div className={`${styles.typeSample} ${styles.tsH2}`}>
				Lineup and bench, one tap apart.
			</div>
			<div className={styles.typeInfo}>24 / 30 / 600</div>
		</div>
		<div className={styles.typeSpec}>
			<div className={styles.typeMeta}>
				<strong>Body LG</strong>
				<br />
				Plus Jakarta Sans
			</div>
			<div className={`${styles.typeSample} ${styles.tsBodyLg}`}>
				Built for serious fans and serious analysts. Real-time game data,
				advanced metrics, and a roster manager that keeps up with you.
			</div>
			<div className={styles.typeInfo}>18 / 27 / 400</div>
		</div>
		<div className={styles.typeSpec}>
			<div className={styles.typeMeta}>
				<strong>Body</strong>
				<br />
				Plus Jakarta Sans
			</div>
			<div className={`${styles.typeSample} ${styles.tsBody}`}>
				aiharanaoya UI is a design system built on the Dodgers palette — Royal
				Blue, Red, and White — with Barlow Condensed for display and Plus
				Jakarta Sans for body text.
			</div>
			<div className={styles.typeInfo}>15 / 24 / 400</div>
		</div>
		<div className={styles.typeSpec}>
			<div className={styles.typeMeta}>
				<strong>Label</strong>
				<br />
				Plus Jakarta Sans
			</div>
			<div className={`${styles.typeSample} ${styles.tsLabel}`}>
				SEASON HIGHLIGHTS
			</div>
			<div className={styles.typeInfo}>
				11 / — / 600
				<br />
				tracking 0.14em · upper
			</div>
		</div>
		<div className={styles.typeSpec}>
			<div className={styles.typeMeta}>
				<strong>Mono</strong>
				<br />
				JetBrains Mono
			</div>
			<div className={styles.typeSample}>
				<span className={styles.tsMono}>--color-brand-primary: #005A9C;</span>
			</div>
			<div className={styles.typeInfo}>13 / 20 / 400</div>
		</div>
	</section>
);
