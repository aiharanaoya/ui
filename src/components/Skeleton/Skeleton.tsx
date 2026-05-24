import type { CSSProperties, FC } from 'react';
import styles from './Skeleton.module.css';

type Variant = 'text' | 'title' | 'avatar' | 'card';

type Props = {
	variant?: Variant;
	width?: string;
};

const variantClass: Record<Variant, string> = {
	text: styles.text,
	title: styles.title,
	avatar: styles.avatar,
	card: styles.card,
};

export const Skeleton: FC<Props> = ({ variant = 'text', width }) => {
	const style: CSSProperties = width ? { width } : {};

	if (variant === 'card') {
		return (
			<div className={styles.cardWrap} style={style}>
				<div className={[styles.base, styles.avatar].join(' ')} />
				<div className={styles.cardLines}>
					<div className={[styles.base, styles.title].join(' ')} />
					<div className={[styles.base, styles.text].join(' ')} />
					<div
						className={[styles.base, styles.text].join(' ')}
						style={{ width: '60%' }}
					/>
				</div>
			</div>
		);
	}

	return (
		<div
			className={[styles.base, variantClass[variant]].join(' ')}
			style={style}
			aria-hidden="true"
		/>
	);
};
