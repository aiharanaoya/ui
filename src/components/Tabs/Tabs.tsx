import type { ComponentPropsWithoutRef, FC } from 'react';
import styles from './Tabs.module.css';

type TabsProps = ComponentPropsWithoutRef<'div'>;

export const Tabs: FC<TabsProps> = ({ children, className, ...rest }) => {
	const classNames = [styles.tabs, className].filter(Boolean).join(' ');
	return (
		<div className={classNames} role="tablist" {...rest}>
			{children}
		</div>
	);
};

type TabProps = {
	label: string;
	active?: boolean;
} & ComponentPropsWithoutRef<'button'>;

export const Tab: FC<TabProps> = ({ label, active, className, ...rest }) => {
	const classNames = [styles.tab, active && styles.active]
		.filter(Boolean)
		.join(' ');
	return (
		<button
			type="button"
			role="tab"
			aria-selected={!!active}
			className={classNames}
			{...rest}
		>
			{label}
		</button>
	);
};
