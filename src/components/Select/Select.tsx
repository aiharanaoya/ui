import type { ComponentPropsWithoutRef, FC } from 'react';
import styles from './Select.module.css';

type Props = {
	label?: string;
	error?: string;
	hint?: string;
} & ComponentPropsWithoutRef<'select'>;

export const Select: FC<Props> = ({
	label,
	error,
	hint,
	className,
	id,
	children,
	...rest
}) => {
	const selectClass = [styles.input, error && styles.error, className]
		.filter(Boolean)
		.join(' ');

	return (
		<div className={styles.field}>
			{label && (
				<label className={styles.label} htmlFor={id}>
					{label}
				</label>
			)}
			<select
				className={selectClass}
				id={id}
				aria-invalid={!!error}
				aria-describedby={
					error ? `${id}-error` : hint ? `${id}-hint` : undefined
				}
				{...rest}
			>
				{children}
			</select>
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
