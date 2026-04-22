import type { ComponentPropsWithoutRef, FC } from 'react';
import styles from './Badge.module.css';

type Variant =
	| 'blue'
	| 'red'
	| 'green'
	| 'yellow'
	| 'gray'
	| 'gold'
	| 'solid-blue'
	| 'solid-red'
	| 'dark';

type Props = {
	variant?: Variant;
} & ComponentPropsWithoutRef<'span'>;

const variantClass: Record<Variant, string> = {
	blue: styles.blue,
	red: styles.red,
	green: styles.green,
	yellow: styles.yellow,
	gray: styles.gray,
	gold: styles.gold,
	'solid-blue': styles.solidBlue,
	'solid-red': styles.solidRed,
	dark: styles.dark,
};

export const Badge: FC<Props> = ({ variant = 'blue', className, ...rest }) => {
	const classNames = [styles.badge, variantClass[variant], className]
		.filter(Boolean)
		.join(' ');
	return <span className={classNames} {...rest} />;
};
