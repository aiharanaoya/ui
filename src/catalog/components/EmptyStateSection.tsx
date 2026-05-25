import type { FC } from 'react';
import { EmptyState } from '@/index';
import styles from './EmptyStateSection.module.css';

export const EmptyStateSection: FC = () => {
	return (
		<section id="empty-state" className={styles.section}>
			<div className={styles.sectionHead}>
				<span className={styles.sectionNum}>17</span>
				<h2 className={styles.sectionTitle}>Empty States</h2>
			</div>

			<div className={styles.subsection}>
				<p className={styles.subsectionLabel}>Variants</p>
				<div className={styles.row} style={{ alignItems: 'stretch' }}>
					<div style={{ flex: '1 1 0', minWidth: 0 }}>
						<EmptyState
							variant="no-data"
							title="No Stats Yet"
							body="Season stats will appear here once games begin."
							primaryAction={{ label: 'View Schedule', onClick: () => {} }}
						/>
					</div>
					<div style={{ flex: '1 1 0', minWidth: 0 }}>
						<EmptyState
							variant="no-results"
							title="No Results"
							body="No players matched your search. Try a different name or position."
							primaryAction={{ label: 'Clear Filters', onClick: () => {} }}
						/>
					</div>
					<div style={{ flex: '1 1 0', minWidth: 0 }}>
						<EmptyState
							variant="error"
							title="Sync Failed"
							body="Couldn't load game data. Check your connection and try again."
							primaryAction={{ label: 'Retry', onClick: () => {} }}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
