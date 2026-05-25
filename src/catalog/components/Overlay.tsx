import type { FC } from 'react';
import { Tooltip } from '@/index';
import styles from './Overlay.module.css';

export const Overlay: FC = () => (
	<section id="overlay" className={styles.section}>
		<div className={styles.sectionHead}>
			<span className={styles.sectionNum}>14</span>
			<h2 className={styles.sectionTitle}>Overlays</h2>
		</div>

		<div className={styles.overlaysGrid}>
			<div>
				<p className={styles.subsectionLabel}>Confirmation Modal</p>
				<div className={styles.modalOverlay}>
					<div className={styles.modal}>
						<div className={styles.modalHeader}>
							<span className={styles.modalTitle}>Remove Player</span>
							<button type="button" className={styles.modalClose}>
								×
							</button>
						</div>
						<p className={styles.modalBody}>
							Are you sure you want to remove <strong>Teoscar Hernandez</strong>{' '}
							from the active roster? This action moves him to the inactive
							list.
						</p>
						<div className={styles.modalFooter}>
							<button type="button" className={styles.btnGhost}>
								Cancel
							</button>
							<button type="button" className={styles.btnDanger}>
								Remove
							</button>
						</div>
					</div>
				</div>
			</div>

			<div>
				<p className={styles.subsectionLabel}>Popover</p>
				<div className={styles.popoverCol}>
					<div className={styles.popover}>
						<div className={styles.popTitle}>Shohei Ohtani</div>
						<div className={styles.popBody}>
							2026 stats — .342 BA, 28 HR, 89 RBI, 2.45 ERA. Currently on active
							roster.
						</div>
						<div className={styles.popActions}>
							<button type="button" className={styles.popBtnPrimary}>
								View Profile
							</button>
							<button type="button" className={styles.popBtnGhost}>
								Dismiss
							</button>
						</div>
					</div>
					<div className={styles.popoverAlert}>
						<div className={styles.popTitleRed}>IL Alert</div>
						<div className={styles.popBody}>
							Teoscar Hernandez has been placed on the 10-day IL. Activate a
							replacement?
						</div>
						<div className={styles.popActions}>
							<button type="button" className={styles.popBtnRed}>
								Activate
							</button>
							<button type="button" className={styles.popBtnGhost}>
								Later
							</button>
						</div>
					</div>
				</div>
			</div>

			<div>
				<p className={styles.subsectionLabel}>Tooltips</p>
				<div className={styles.ttBlock}>
					<Tooltip content="Batting average: .342">
						<span className={styles.ttTarget}>Hover</span>
					</Tooltip>
					<Tooltip content="Approaching IL">
						<span className={`${styles.ttTarget} ${styles.ttRed}`}>
							Warning
						</span>
					</Tooltip>
					<Tooltip content="Slugging: .612" position="right">
						<span className={`${styles.ttTarget} ${styles.ttDark}`}>Right</span>
					</Tooltip>
				</div>
			</div>
		</div>
	</section>
);
