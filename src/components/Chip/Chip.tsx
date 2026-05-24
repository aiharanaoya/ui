import type { ComponentPropsWithoutRef, FC } from 'react';
import styles from './Chip.module.css';

type Color = 'blue' | 'red';

type Props = {
	selected?: boolean;
	color?: Color;
} & ComponentPropsWithoutRef<'button'>;

const selectedColorClass: Record<Color, string> = {
	blue: styles.selectedBlue,
	red: styles.selectedRed,
};

export const Chip: FC<Props> = ({
	selected = false,
	color = 'blue',
	className,
	...rest
}) => {
	const classNames = [
		styles.chip,
		selected && selectedColorClass[color],
		className,
	]
		.filter(Boolean)
		.join(' ');

	return (
		<button
			type="button"
			className={classNames}
			aria-pressed={selected}
			{...rest}
		/>
	);
};
