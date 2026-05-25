import type { FC } from 'react';
import { HeroCard, StatCard } from '@/index';
import styles from './Cards.module.css';

const players = [
	{
		initials: 'SO',
		name: 'Shohei Ohtani',
		meta: '.342 BA · 28 HR',
		color: 'var(--color-blue-500)',
	},
	{
		initials: 'MB',
		name: 'Mookie Betts',
		meta: '.310 BA · 22 HR',
		color: 'var(--color-red-500)',
	},
	{
		initials: 'FF',
		name: 'Freddie Freeman',
		meta: '.298 BA · 19 HR',
		color: 'var(--color-blue-900)',
	},
];

export const Cards: FC = () => (
	<section id="cards" className={styles.section}>
		<div className={styles.sectionHead}>
			<span className={styles.sectionNum}>11</span>
			<h2 className={styles.sectionTitle}>Cards</h2>
		</div>

		<div className={styles.cardsRow}>
			<div style={{ flex: 1 }}>
				<StatCard
					label="Win Rate"
					value="73%"
					trend="↑ 4.2% this month"
					trendDirection="up"
				/>
			</div>
			<div style={{ flex: 1 }}>
				<StatCard
					label="Games Played"
					value="142"
					trend="↓ 3 vs last season"
					trendDirection="down"
				/>
			</div>
			<div style={{ flex: 1 }}>
				<StatCard label="Active Roster" value="26/40" />
			</div>

			<div className={styles.listCard}>
				{players.map((p) => (
					<div key={p.initials} className={styles.listItem}>
						<div className={styles.listAvatar} style={{ background: p.color }}>
							{p.initials}
						</div>
						<div>
							<div className={styles.listName}>{p.name}</div>
							<div className={styles.listMeta}>{p.meta}</div>
						</div>
					</div>
				))}
			</div>

			<div style={{ flex: 1 }}>
				<HeroCard label="Season ERA" value="2.84" subtitle="Top 5 in league" />
			</div>
		</div>
	</section>
);
