import {
	type ComponentPropsWithoutRef,
	type FC,
	useEffect,
	useRef,
} from 'react';
import styles from './Checkbox.module.css';

type Props = {
	label?: string;
	indeterminate?: boolean;
	error?: string;
} & Omit<ComponentPropsWithoutRef<'input'>, 'type'>;

export const Checkbox: FC<Props> = ({
	label,
	indeterminate,
	error,
	disabled,
	id,
	className,
	...rest
}) => {
	const ref = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (ref.current) {
			ref.current.indeterminate = !!indeterminate;
		}
	}, [indeterminate]);

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
					ref={ref}
					type="checkbox"
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
