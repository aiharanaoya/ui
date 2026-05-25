import type { FC } from 'react';
import { Avatar, AvatarGroup } from '@/index';
import styles from './Avatars.module.css';

export const Avatars: FC = () => (
	<section id="avatars" className={styles.section}>
		<div className={styles.sectionHead}>
			<span className={styles.sectionNum}>10</span>
			<h2 className={styles.sectionTitle}>Avatars</h2>
		</div>

		<div>
			<p className={styles.subsectionLabel}>Sizes</p>
			<div className={styles.avRow}>
				<div className={styles.avCol}>
					<Avatar initials="SO" size="xs" />
					<div className={styles.avCaption}>xs · 24</div>
				</div>
				<div className={styles.avCol}>
					<Avatar initials="MB" size="sm" />
					<div className={styles.avCaption}>sm · 32</div>
				</div>
				<div className={styles.avCol}>
					<Avatar initials="FF" size="md" />
					<div className={styles.avCaption}>md · 40</div>
				</div>
				<div className={styles.avCol}>
					<Avatar initials="WS" size="lg" />
					<div className={styles.avCaption}>lg · 52</div>
				</div>
				<div className={styles.avCol}>
					<Avatar initials="JD" size="xl" />
					<div className={styles.avCaption}>xl · 64</div>
				</div>
			</div>
		</div>

		<div className={styles.subsection}>
			<p className={styles.subsectionLabel}>Status & Ring</p>
			<div className={styles.avRow}>
				<div className={styles.avCol}>
					<Avatar initials="SO" size="md" status="online" />
					<div className={styles.avCaption}>online</div>
				</div>
				<div className={styles.avCol}>
					<Avatar initials="MB" size="md" status="busy" />
					<div className={styles.avCaption}>busy</div>
				</div>
				<div className={styles.avCol}>
					<Avatar initials="WS" size="md" status="away" />
					<div className={styles.avCaption}>away</div>
				</div>
				<div className={styles.avCol} style={{ marginLeft: 16 }}>
					<Avatar initials="SO" size="lg" ring="blue" />
					<div className={styles.avCaption}>ring blue</div>
				</div>
				<div className={styles.avCol}>
					<Avatar initials="MB" size="lg" ring="red" />
					<div className={styles.avCaption}>ring red</div>
				</div>
				<div className={styles.avCol}>
					<Avatar initials="MVP" size="lg" ring="gold" />
					<div className={styles.avCaption}>ring gold</div>
				</div>
				<div
					className={styles.avCol}
					style={{ marginLeft: 32, alignItems: 'flex-start' }}
				>
					<div className={styles.avCaption} style={{ marginBottom: 2 }}>
						Group
					</div>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<AvatarGroup>
							<Avatar initials="SO" />
							<Avatar initials="MB" />
							<Avatar initials="FF" />
							<Avatar initials="WS" />
						</AvatarGroup>
						<div className={styles.groupCount}>+8</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);
