import { type FC, useState } from 'react';
import { Alert } from '@/index';
import styles from './AlertsToasts.module.css';

export const AlertsToasts: FC = () => {
	const [alerts, setAlerts] = useState({
		info: true,
		success: true,
		warning: true,
		error: true,
	});
	const close = (k: keyof typeof alerts) =>
		setAlerts((a) => ({ ...a, [k]: false }));

	return (
		<section id="alerts" className={styles.section}>
			<div className={styles.sectionHead}>
				<span className={styles.sectionNum}>13</span>
				<h2 className={styles.sectionTitle}>Alerts & Toasts</h2>
			</div>

			<div className={styles.alertsCol}>
				{alerts.info && (
					<Alert
						variant="info"
						title="Season stats updated"
						onClose={() => close('info')}
					>
						Live game data has been synced. Stats reflect activity through the
						7th inning.
					</Alert>
				)}
				{alerts.success && (
					<Alert
						variant="success"
						title="Roster saved successfully"
						onClose={() => close('success')}
					>
						Your changes to the active roster have been saved and submitted.
					</Alert>
				)}
				{alerts.warning && (
					<Alert
						variant="warning"
						title="Player eligibility notice"
						onClose={() => close('warning')}
					>
						2 players on your roster are approaching IL eligibility windows.
					</Alert>
				)}
				{alerts.error && (
					<Alert
						variant="error"
						title="Sync failed"
						onClose={() => close('error')}
					>
						Could not connect to the stats API. Check your connection and try
						again.
					</Alert>
				)}
				{!Object.values(alerts).some(Boolean) && (
					<button
						type="button"
						onClick={() =>
							setAlerts({
								info: true,
								success: true,
								warning: true,
								error: true,
							})
						}
						style={{
							fontSize: 12,
							padding: '6px 12px',
							cursor: 'pointer',
							alignSelf: 'flex-start',
						}}
					>
						Reset alerts
					</button>
				)}
			</div>

			<div className={styles.subsection}>
				<p className={styles.subsectionLabel}>Toasts</p>
				<div className={styles.toastCol}>
					<div className={styles.toastItem}>
						<span
							className={styles.toastDot}
							style={{ background: '#16A34A' }}
						/>
						<span className={styles.toastText}>Game data synced</span>
						<button type="button" className={styles.toastAction}>
							View
						</button>
					</div>
					<div className={styles.toastItem}>
						<span
							className={styles.toastDot}
							style={{ background: 'var(--color-red-500)' }}
						/>
						<span className={styles.toastText}>Connection lost</span>
						<button type="button" className={styles.toastAction}>
							Retry
						</button>
					</div>
					<div className={styles.toastItem}>
						<span
							className={styles.toastDot}
							style={{ background: '#C9952C' }}
						/>
						<span className={styles.toastText}>
							New roster update available
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};
