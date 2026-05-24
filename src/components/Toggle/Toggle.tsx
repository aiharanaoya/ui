import type { FC } from 'react';
import styles from './Toggle.module.css';

type Color = 'blue' | 'red';

type Props = {
	checked: boolean;
	onChange: (checked: boolean) => void;
	disabled?: boolean;
	label?: string;
	color?: Color;
};

const colorClass: Record<Color, string> = {
	blue: styles.blue,
	red: styles.red,
};

export const Toggle: FC<Props> = ({
	checked,
	onChange,
	disabled = false,
	label,
	color = 'blue',
}) => {
	const trackClass = [
		styles.track,
		checked && colorClass[color],
		disabled && styles.disabled,
	]
		.filter(Boolean)
		.join(' ');

	return (
		<label
			className={[styles.row, disabled && styles.disabledRow]
				.filter(Boolean)
				.join(' ')}
		>
			<button
				type="button"
				role="switch"
				aria-checked={checked}
				disabled={disabled}
				className={trackClass}
				onClick={() => !disabled && onChange(!checked)}
			>
				<span className={styles.knob} />
			</button>
			{label && <span className={styles.label}>{label}</span>}
		</label>
	);
};
