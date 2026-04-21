import type { ComponentPropsWithoutRef, FC } from 'react';
import styles from './Button.module.css';

type Props = {
	variant?: 'primary' | 'accent' | 'outline' | 'ghost' | 'dark';
	size?: 'sm' | 'md' | 'lg';
	pill?: boolean;
} & ComponentPropsWithoutRef<'button'>;

export const Button: FC<Props> = ({
	variant = 'primary',
	size = 'md',
	pill = false,
	className,
	...rest
}) => {
	const classNames = [
		styles.button,
		styles[variant],
		styles[size],
		pill && styles.pill,
		className,
	]
		.filter(Boolean)
		.join(' ');

	return <button className={classNames} {...rest} />;
};
