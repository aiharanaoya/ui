import type { FC } from 'react';
import { Badge, Tag } from '@/index';
import styles from './BadgesTags.module.css';

export const BadgesTags: FC = () => (
	<section id="badges" className={styles.section}>
		<div className={styles.sectionHead}>
			<span className={styles.sectionNum}>09</span>
			<h2 className={styles.sectionTitle}>Badges & Tags</h2>
		</div>

		<div className={styles.specimen}>
			<p className={styles.subsectionLabel}>Tonal Badges</p>
			<div className={styles.specimenRow}>
				<Badge variant="blue">Active</Badge>
				<Badge variant="red">Alert</Badge>
				<Badge variant="green">Complete</Badge>
				<Badge variant="yellow">Pending</Badge>
				<Badge variant="gray">Archived</Badge>
				<Badge variant="gold">MVP</Badge>
			</div>

			<p className={styles.subsectionLabel} style={{ marginTop: 24 }}>
				Solid Badges
			</p>
			<div className={styles.specimenRow}>
				<Badge variant="solid-blue">Primary</Badge>
				<Badge variant="solid-red">New</Badge>
				<Badge variant="dark">Beta</Badge>
			</div>

			<p className={styles.subsectionLabel} style={{ marginTop: 24 }}>
				Status Tags
			</p>
			<div className={styles.specimenRow}>
				<Tag variant="blue">In Progress</Tag>
				<Tag variant="red">Overdue</Tag>
				<Tag variant="green">Done</Tag>
				<Tag>Idle</Tag>
			</div>
		</div>
	</section>
);
