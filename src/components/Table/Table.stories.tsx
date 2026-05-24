import { useState } from 'react';
import type { Column } from './Table';
import { Table } from './Table';

type Player = {
	name: string;
	position: string;
	avg: number;
	hr: number;
};

const columns: Column<Player>[] = [
	{ key: 'name', label: '名前' },
	{ key: 'position', label: 'ポジション' },
	{ key: 'avg', label: '打率', align: 'right', sortable: true },
	{ key: 'hr', label: '本塁打', align: 'right', sortable: true },
];

const data: Player[] = [
	{ name: '大谷翔平', position: 'DH', avg: 0.31, hr: 44 },
	{ name: 'ムーキー・ベッツ', position: 'RF', avg: 0.289, hr: 19 },
	{ name: 'フレディ・フリーマン', position: '1B', avg: 0.282, hr: 22 },
	{ name: 'テオスカー・エルナンデス', position: 'LF', avg: 0.272, hr: 33 },
];

export default { component: Table };

export const Default = {
	render: () => <Table columns={columns} data={data} />,
};

export const Sortable = {
	render: () => {
		const [sortKey, setSortKey] = useState<keyof Player | undefined>();
		const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');
		const sorted = [...data].sort((a, b) => {
			if (!sortKey) return 0;
			const v = a[sortKey] < b[sortKey] ? -1 : 1;
			return sortDir === 'asc' ? v : -v;
		});
		return (
			<Table
				columns={columns}
				data={sorted}
				sortKey={sortKey}
				sortDir={sortDir}
				onSort={(key, dir) => {
					setSortKey(key);
					setSortDir(dir);
				}}
			/>
		);
	},
};
