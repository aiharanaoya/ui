import { type FC, useState } from 'react';
import { Chip, SegmentedControl } from '@/index';
import styles from './SelectsChips.module.css';

export const SelectsChips: FC = () => {
	const [segment, setSegment] = useState('day');
	const [segment2, setSegment2] = useState('batting');

	return (
		<section id="selects" className={styles.section}>
			<div className={styles.sectionHead}>
				<span className={styles.sectionNum}>08</span>
				<h2 className={styles.sectionTitle}>Selects & Chips</h2>
			</div>

			<div className={styles.selectGrid}>
				<div>
					<p className={styles.subsectionLabel}>Dropdown · Open</p>
					<div className={styles.dropdown} style={{ height: 200 }}>
						<div className={styles.ddTrigger}>
							Los Angeles Dodgers <span className={styles.chev}>▼</span>
						</div>
						<div className={styles.ddMenu}>
							<div className={`${styles.ddItem} ${styles.ddSelected}`}>
								Los Angeles Dodgers
							</div>
							<div className={styles.ddItem}>New York Yankees</div>
							<div className={styles.ddItem}>San Francisco Giants</div>
							<div className={styles.ddDivider} />
							<div className={`${styles.ddItem} ${styles.ddMuted}`}>
								View all teams…
							</div>
						</div>
					</div>
				</div>

				<div>
					<p className={styles.subsectionLabel}>Dropdown · States</p>
					<div className={styles.col}>
						<div className={styles.ddTrigger}>
							2026 Season <span className={styles.chev}>▼</span>
						</div>
						<div className={`${styles.ddTrigger} ${styles.ddFocus}`}>
							Starting Pitchers <span className={styles.chevFocus}>▲</span>
						</div>
						<div className={`${styles.ddTrigger} ${styles.ddDisabled}`}>
							Disabled option <span className={styles.chev}>▼</span>
						</div>
					</div>
				</div>

				<div>
					<p className={styles.subsectionLabel}>Segmented</p>
					<div className={styles.col}>
						<SegmentedControl
							options={[
								{ label: 'Day', value: 'day' },
								{ label: 'Week', value: 'week' },
								{ label: 'Month', value: 'month' },
								{ label: 'Season', value: 'season' },
							]}
							value={segment}
							onChange={setSegment}
						/>
						<SegmentedControl
							options={[
								{ label: 'Batting', value: 'batting' },
								{ label: 'Pitching', value: 'pitching' },
								{ label: 'Fielding', value: 'fielding' },
							]}
							value={segment2}
							onChange={setSegment2}
						/>
					</div>
				</div>

				<div>
					<p className={styles.subsectionLabel}>Filter Chips</p>
					<div className={styles.col}>
						<div className={styles.row}>
							<Chip selected>Active</Chip>
							<Chip>IL</Chip>
							<Chip>Minors</Chip>
							<Chip selected color="red">
								Suspended
							</Chip>
							<Chip>All</Chip>
						</div>
						<div className={styles.row}>
							<Chip selected>Starters</Chip>
							<Chip selected>Relievers</Chip>
							<Chip>Closers</Chip>
							<Chip>Infield</Chip>
							<Chip>Outfield</Chip>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
