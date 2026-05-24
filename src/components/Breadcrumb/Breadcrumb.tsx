import type { FC } from 'react';
import styles from './Breadcrumb.module.css';

type Item = {
	label: string;
	onClick?: () => void;
};

type Props = {
	items: Item[];
	separator?: string;
};

export const Breadcrumb: FC<Props> = ({ items, separator = '›' }) => (
	<nav aria-label="パンくずリスト">
		<ol className={styles.list}>
			{items.map((item, index) => {
				const isCurrent = index === items.length - 1;
				return (
					<li key={item.label} className={styles.item}>
						{index > 0 && (
							<span className={styles.sep} aria-hidden="true">
								{separator}
							</span>
						)}
						{isCurrent ? (
							<span className={styles.current} aria-current="page">
								{item.label}
							</span>
						) : (
							<button
								type="button"
								className={styles.link}
								onClick={item.onClick}
							>
								{item.label}
							</button>
						)}
					</li>
				);
			})}
		</ol>
	</nav>
);
