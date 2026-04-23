import type { FC } from 'react';
import styles from './ListItem.module.css';

type Props = {
	name: string;
	initials: string;
	meta?: string;
};

export const ListItem: FC<Props> = ({ name, initials, meta }) => (
	<div className={styles.listItem}>
		<div className={styles.avatar} aria-hidden="true">
			{initials}
		</div>
		<div className={styles.body}>
			<p className={styles.name}>{name}</p>
			{meta && <p className={styles.meta}>{meta}</p>}
		</div>
	</div>
);
