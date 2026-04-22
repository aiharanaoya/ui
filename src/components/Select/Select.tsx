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
			<div className={styles.selectWrapper}>
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
				<svg
					aria-hidden="true"
					className={styles.chevron}
					fill="none"
					height="16"
					viewBox="0 0 16 16"
					width="16"
				>
					<path
						d="M4 6l4 4 4-4"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="1.5"
					/>
				</svg>
			</div>
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
