import type { FC } from 'react';
import styles from './EmptyState.module.css';

type Variant = 'no-data' | 'no-results' | 'error';

type Action = {
	label: string;
	onClick: () => void;
};

type Props = {
	variant?: Variant;
	title: string;
	body: string;
	primaryAction?: Action;
	secondaryAction?: Action;
};

const variantClass: Record<Variant, string> = {
	'no-data': styles.noData,
	'no-results': styles.noResults,
	error: styles.error,
};

const icons: Record<Variant, string> = {
	'no-data': '○',
	'no-results': '◎',
	error: '✕',
};

export const EmptyState: FC<Props> = ({
	variant = 'no-data',
	title,
	body,
	primaryAction,
	secondaryAction,
}) => (
	<div className={styles.container}>
		<div
			className={[styles.icon, variantClass[variant]].join(' ')}
			aria-hidden="true"
		>
			{icons[variant]}
		</div>
		<div className={styles.title}>{title}</div>
		<div className={styles.body}>{body}</div>
		{(primaryAction || secondaryAction) && (
			<div className={styles.actions}>
				{primaryAction && (
					<button
						type="button"
						className={styles.primaryBtn}
						onClick={primaryAction.onClick}
					>
						{primaryAction.label}
					</button>
				)}
				{secondaryAction && (
					<button
						type="button"
						className={styles.secondaryBtn}
						onClick={secondaryAction.onClick}
					>
						{secondaryAction.label}
					</button>
				)}
			</div>
		)}
	</div>
);
