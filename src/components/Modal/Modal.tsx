import { type FC, type ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

type Props = {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	children?: ReactNode;
	footer?: ReactNode;
};

export const Modal: FC<Props> = ({
	isOpen,
	onClose,
	title,
	children,
	footer,
}) => {
	useEffect(() => {
		if (!isOpen) return;
		document.body.style.overflow = 'hidden';
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};
		document.addEventListener('keydown', handleKey);
		return () => {
			document.body.style.overflow = '';
			document.removeEventListener('keydown', handleKey);
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return createPortal(
		<div className={styles.container}>
			<button
				type="button"
				className={styles.backdrop}
				onClick={onClose}
				aria-label="モーダルを閉じる"
				tabIndex={-1}
			/>
			<div
				role="dialog"
				aria-modal="true"
				aria-label={title}
				className={styles.modal}
			>
				<div className={styles.header}>
					{title && <div className={styles.title}>{title}</div>}
					<button
						type="button"
						className={styles.close}
						onClick={onClose}
						aria-label="閉じる"
					>
						✕
					</button>
				</div>
				{children && <div className={styles.body}>{children}</div>}
				{footer && <div className={styles.footer}>{footer}</div>}
			</div>
		</div>,
		document.body,
	);
};
