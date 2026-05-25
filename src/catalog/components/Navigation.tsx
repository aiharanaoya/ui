import { type FC, useState } from 'react';
import { Breadcrumb, Pagination, Steps, Tab, Tabs } from '@/index';
import styles from './Navigation.module.css';

export const Navigation: FC = () => {
	const [page, setPage] = useState(6);
	const [activeTab, setActiveTab] = useState('overview');

	return (
		<section id="navigation" className={styles.section}>
			<div className={styles.sectionHead}>
				<span className={styles.sectionNum}>16</span>
				<h2 className={styles.sectionTitle}>Navigation</h2>
			</div>

			<div>
				<p className={styles.subsectionLabel}>Top Navigation & Tabs</p>
				<div className={styles.navbar}>
					<div className={styles.navLogo}>
						<span className={styles.navLogoText}>aiharanaoya UI</span>
						<div className={styles.navLogoDot} />
					</div>
					{['Dashboard', 'Roster', 'Analytics', 'Schedule'].map((item) => (
						<div
							key={item}
							className={
								item === 'Dashboard'
									? `${styles.navItem} ${styles.navItemActive}`
									: styles.navItem
							}
						>
							{item}
						</div>
					))}
					<div className={styles.navSpacer} />
					<button type="button" className={styles.navBtn}>
						Upgrade
					</button>
				</div>
				<div className={styles.tabsWrap}>
					<Tabs>
						{['Overview', 'Performance', 'History', 'Settings'].map((tab) => (
							<Tab
								key={tab}
								label={tab}
								active={activeTab === tab.toLowerCase()}
								onClick={() => setActiveTab(tab.toLowerCase())}
							/>
						))}
					</Tabs>
					<div className={styles.tabContent}>
						Tab content renders here — select a tab above.
					</div>
				</div>
			</div>

			<div className={styles.subsection}>
				<p className={styles.subsectionLabel}>Breadcrumbs</p>
				<div className={styles.col}>
					<Breadcrumb
						items={[
							{ label: 'Home' },
							{ label: 'Roster' },
							{ label: 'Starting Pitchers' },
							{ label: 'Shohei Ohtani' },
						]}
					/>
					<Breadcrumb
						separator="/"
						items={[
							{ label: 'aiharanaoya UI' },
							{ label: 'Analytics' },
							{ label: 'Season Overview' },
						]}
					/>
				</div>
			</div>

			<div className={styles.subsection}>
				<p className={styles.subsectionLabel}>Pagination</p>
				<div className={styles.col}>
					<Pagination page={1} totalPages={9} onChange={() => {}} />
					<Pagination page={page} totalPages={8} onChange={setPage} />
				</div>
			</div>

			<div className={styles.subsection}>
				<p className={styles.subsectionLabel}>Step Indicator</p>
				<div style={{ maxWidth: 640 }}>
					<Steps
						steps={[
							{ label: 'Account' },
							{ label: 'Team' },
							{ label: 'Roster' },
							{ label: 'Settings' },
							{ label: 'Review' },
						]}
						currentStep={2}
					/>
				</div>
			</div>
		</section>
	);
};
