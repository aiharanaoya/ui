import type { FC } from 'react';
import styles from './SegmentedControl.module.css';

type Option = {
	label: string;
	value: string;
};

type Props = {
	options: Option[];
	value: string;
	onChange: (value: string) => void;
};

export const SegmentedControl: FC<Props> = ({ options, value, onChange }) => (
	<fieldset className={styles.track}>
		{options.map((opt) => (
			<button
				key={opt.value}
				type="button"
				className={[styles.segment, value === opt.value && styles.active]
					.filter(Boolean)
					.join(' ')}
				aria-pressed={value === opt.value}
				onClick={() => onChange(opt.value)}
			>
				{opt.label}
			</button>
		))}
	</fieldset>
);
