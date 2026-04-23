import type { ComponentPropsWithoutRef, FC } from 'react';
import styles from './Nav.module.css';

type NavProps = ComponentPropsWithoutRef<'nav'>;

export const Nav: FC<NavProps> = ({ children, className, ...rest }) => {
	const classNames = [styles.nav, className].filter(Boolean).join(' ');
	return (
		<nav className={classNames} {...rest}>
			<ul className={styles.list}>{children}</ul>
		</nav>
	);
};

type NavItemProps = {
	label: string;
	active?: boolean;
} & ComponentPropsWithoutRef<'a'>;

export const NavItem: FC<NavItemProps> = ({
	label,
	active,
	className,
	...rest
}) => {
	const classNames = [styles.item, active && styles.active]
		.filter(Boolean)
		.join(' ');
	return (
		<li>
			<a
				className={classNames}
				aria-current={active ? 'page' : undefined}
				{...rest}
			>
				{label}
			</a>
		</li>
	);
};
