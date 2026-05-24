import type { ComponentPropsWithoutRef, FC } from 'react';
import styles from './Radio.module.css';

type Props = {
	label?: string;
	error?: string;
} & Omit<ComponentPropsWithoutRef<'input'>, 'type'>;

export const Radio: FC<Props> = ({
	label,
	error,
	disabled,
	id,
	className,
	...rest
}) => {
	const inputClass = [styles.input, error && styles.inputError, className]
		.filter(Boolean)
		.join(' ');

	return (
		<div className={styles.field}>
			<label
				className={[styles.row, disabled && styles.disabled]
					.filter(Boolean)
					.join(' ')}
				htmlFor={id}
			>
				<input
					type="radio"
					id={id}
					disabled={disabled}
					className={inputClass}
					aria-invalid={!!error}
					aria-describedby={error ? `${id}-error` : undefined}
					{...rest}
				/>
				{label && <span className={styles.label}>{label}</span>}
			</label>
			{error && (
				<span className={styles.errorMessage} id={`${id}-error`} role="alert">
					{error}
				</span>
			)}
		</div>
	);
};
