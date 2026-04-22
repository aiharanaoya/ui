import type { ComponentPropsWithoutRef, FC } from 'react';
import styles from './Input.module.css';

type Props = {
	label?: string;
	error?: string;
	hint?: string;
} & ComponentPropsWithoutRef<'input'>;

export const Input: FC<Props> = ({
	label,
	error,
	hint,
	className,
	id,
	...rest
}) => {
	const inputClass = [styles.input, error && styles.error, className]
		.filter(Boolean)
		.join(' ');

	return (
		<div className={styles.field}>
			{label && (
				<label className={styles.label} htmlFor={id}>
					{label}
				</label>
			)}
			<input
				className={inputClass}
				id={id}
				aria-invalid={!!error}
				aria-describedby={
					error ? `${id}-error` : hint ? `${id}-hint` : undefined
				}
				{...rest}
			/>
			{error && (
				<span className={styles.errorMessage} id={`${id}-error`} role="alert">
					{error}
				</span>
			)}
			{hint && !error && (
				<span className={styles.hint} id={`${id}-hint`}>
					{hint}
				</span>
			)}
		</div>
	);
};
