import type { ComponentPropsWithoutRef, FC } from 'react';
import styles from './Avatar.module.css';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type Status = 'online' | 'busy' | 'away';
type Ring = 'blue' | 'red' | 'gold';

type Props = {
	initials: string;
	size?: Size;
	color?: string;
	status?: Status;
	ring?: Ring;
} & Omit<ComponentPropsWithoutRef<'div'>, 'children'>;

const sizeClass: Record<Size, string> = {
	xs: styles.xs,
	sm: styles.sm,
	md: styles.md,
	lg: styles.lg,
	xl: styles.xl,
};

const statusClass: Record<Status, string> = {
	online: styles.statusOnline,
	busy: styles.statusBusy,
	away: styles.statusAway,
};

const ringClass: Record<Ring, string> = {
	blue: styles.ringBlue,
	red: styles.ringRed,
	gold: styles.ringGold,
};

export const Avatar: FC<Props> = ({
	initials,
	size = 'md',
	color,
	status,
	ring,
	className,
	style,
	...rest
}) => {
	const avatarClass = [
		styles.avatar,
		sizeClass[size],
		ring && ringClass[ring],
		className,
	]
		.filter(Boolean)
		.join(' ');

	return (
		<div className={styles.wrap}>
			<div
				role="img"
				className={avatarClass}
				style={color ? { background: color, ...style } : style}
				aria-label={initials}
				{...rest}
			>
				{initials}
			</div>
			{status && (
				<span
					role="img"
					className={[styles.statusDot, statusClass[status]].join(' ')}
					aria-label={status}
				/>
			)}
		</div>
	);
};

type GroupProps = {
	children: React.ReactNode;
	max?: number;
	extra?: number;
} & ComponentPropsWithoutRef<'div'>;

export const AvatarGroup: FC<GroupProps> = ({
	children,
	className,
	...rest
}) => {
	const classNames = [styles.group, className].filter(Boolean).join(' ');
	return (
		<div className={classNames} {...rest}>
			{children}
		</div>
	);
};
