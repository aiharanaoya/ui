import type { ComponentPropsWithoutRef, FC } from 'react';
import styles from './Alert.module.css';

type Variant = 'info' | 'success' | 'warning' | 'error' | 'toast';

type Props = {
	variant?: Variant;
	title?: string;
	onClose?: () => void;
} & ComponentPropsWithoutRef<'div'>;

const variantClass: Record<Variant, string> = {
	info: styles.info,
	success: styles.success,
	warning: styles.warning,
	error: styles.error,
	toast: styles.toast,
};

const icons: Record<Variant, string> = {
	info: 'i',
	success: '✓',
	warning: '!',
	error: '✕',
	toast: '•',
};

export const Alert: FC<Props> = ({
	variant = 'info',
	title,
	onClose,
	children,
	className,
	...rest
}) => {
	const classNames = [styles.alert, variantClass[variant], className]
		.filter(Boolean)
		.join(' ');

	return (
		<div className={classNames} role="alert" {...rest}>
			<div className={styles.icon} aria-hidden="true">
				{icons[variant]}
			</div>
			<div className={styles.content}>
				{title && <div className={styles.title}>{title}</div>}
				{children && <div className={styles.body}>{children}</div>}
			</div>
			{onClose && (
				<button
					type="button"
					className={styles.close}
					onClick={onClose}
					aria-label="閉じる"
				>
					✕
				</button>
			)}
		</div>
	);
};
