import type { ReactNode } from 'react';
import styles from './Table.module.css';

type Align = 'left' | 'center' | 'right';
type SortDir = 'asc' | 'desc';

export type Column<T> = {
	key: keyof T;
	label: string;
	align?: Align;
	sortable?: boolean;
	render?: (value: T[keyof T], row: T) => ReactNode;
};

type Props<T extends object> = {
	columns: Column<T>[];
	data: T[];
	sortKey?: keyof T;
	sortDir?: SortDir;
	onSort?: (key: keyof T, dir: SortDir) => void;
};

const alignClass: Record<Align, string> = {
	left: styles.left,
	center: styles.center,
	right: styles.right,
};

export const Table = <T extends object>({
	columns,
	data,
	sortKey,
	sortDir,
	onSort,
}: Props<T>) => {
	const handleSort = (col: Column<T>) => {
		if (!col.sortable || !onSort) return;
		const next: SortDir =
			sortKey === col.key && sortDir === 'asc' ? 'desc' : 'asc';
		onSort(col.key, next);
	};

	return (
		<div className={styles.wrap}>
			<table className={styles.table}>
				<thead>
					<tr className={styles.headRow}>
						{columns.map((col) => {
							const isActive = sortKey === col.key;
							return (
								<th
									key={String(col.key)}
									className={[
										styles.th,
										col.align && alignClass[col.align],
										col.sortable && styles.sortable,
										isActive && styles.sortActive,
									]
										.filter(Boolean)
										.join(' ')}
									onClick={() => handleSort(col)}
									aria-sort={
										isActive
											? sortDir === 'asc'
												? 'ascending'
												: 'descending'
											: undefined
									}
								>
									{col.label}
									{col.sortable && (
										<span className={styles.sortIcon} aria-hidden="true">
											{isActive ? (sortDir === 'asc' ? ' ↑' : ' ↓') : ' ↕'}
										</span>
									)}
								</th>
							);
						})}
					</tr>
				</thead>
				<tbody>
					{data.map((row, rowIndex) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: table rows have no stable key by default
						<tr key={rowIndex} className={styles.bodyRow}>
							{columns.map((col) => (
								<td
									key={String(col.key)}
									className={[styles.td, col.align && alignClass[col.align]]
										.filter(Boolean)
										.join(' ')}
								>
									{col.render
										? col.render(row[col.key], row)
										: String(row[col.key] ?? '')}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
