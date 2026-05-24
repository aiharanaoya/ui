import type { FC, ReactNode } from 'react';
import styles from './Tooltip.module.css';

type Position = 'top' | 'right' | 'bottom';

type Props = {
	content: string;
	position?: Position;
	children: ReactNode;
};

const positionClass: Record<Position, string> = {
	top: styles.top,
	right: styles.right,
	bottom: styles.bottom,
};

export const Tooltip: FC<Props> = ({ content, position = 'top', children }) => (
	<span className={styles.wrap}>
		{children}
		<span
			className={[styles.tooltip, positionClass[position]].join(' ')}
			role="tooltip"
		>
			{content}
		</span>
	</span>
);
