import type { ComponentPropsWithoutRef, FC } from 'react';
import styles from './Tag.module.css';

type Variant = 'blue' | 'red' | 'green';

type Props = {
	variant?: Variant;
} & ComponentPropsWithoutRef<'span'>;

const dotColor: Record<Variant, string> = {
	blue: 'var(--color-blue-500)',
	red: 'var(--color-red-500)',
	green: 'var(--color-success)',
};

export const Tag: FC<Props> = ({
	variant = 'blue',
	className,
	children,
	...rest
}) => {
	const classNames = [styles.tag, styles[variant], className]
		.filter(Boolean)
		.join(' ');
	return (
		<span className={classNames} {...rest}>
			<span
				aria-hidden="true"
				className={styles.dot}
				style={{ background: dotColor[variant] }}
			/>
			{children}
		</span>
	);
};
