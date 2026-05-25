import { type FC, useState } from 'react';
import type { Column } from '@/index';
import { Table } from '@/index';
import styles from './DataTable.module.css';

type Player = {
	num: string;
	initials: string;
	name: string;
	pos: string;
	ba: string;
	hr: string;
	rbi: string;
	obp: string;
	status: string;
};

const avatarColors: Record<string, string> = {
	SO: 'var(--color-blue-500)',
	MB: 'var(--color-red-500)',
	FF: 'var(--color-blue-900)',
	TH: 'var(--color-gray-400)',
	GS: 'var(--color-gray-600)',
};

const statusStyle: Record<string, { background: string; color: string }> = {
	Active: { background: '#DCFCE7', color: 'var(--color-success)' },
	'IL-10': {
		background: 'var(--color-red-100)',
		color: 'var(--color-red-600)',
	},
	Minors: {
		background: 'var(--color-gray-100)',
		color: 'var(--color-gray-600)',
	},
};

const columns: Column<Player>[] = [
	{
		key: 'num',
		label: '#',
		render: (v) => (
			<span
				style={{
					fontFamily: 'var(--font-display)',
					fontSize: 22,
					fontWeight: 700,
					color: 'var(--color-gray-300)',
				}}
			>
				{String(v)}
			</span>
		),
	},
	{
		key: 'name',
		label: 'Player',
		sortable: true,
		render: (v, row) => (
			<span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
				<span
					style={{
						width: 30,
						height: 30,
						borderRadius: '50%',
						background: avatarColors[row.initials],
						color: 'var(--color-white)',
						display: 'inline-flex',
						alignItems: 'center',
						justifyContent: 'center',
						fontSize: 10,
						fontWeight: 600,
						flexShrink: 0,
					}}
				>
					{row.initials}
				</span>
				{String(v)}
			</span>
		),
	},
	{ key: 'pos', label: 'POS' },
	{ key: 'ba', label: 'BA', sortable: true, align: 'right' },
	{ key: 'hr', label: 'HR', sortable: true, align: 'right' },
	{ key: 'rbi', label: 'RBI', sortable: true, align: 'right' },
	{ key: 'obp', label: 'OBP', align: 'right' },
	{
		key: 'status',
		label: 'Status',
		render: (v) => {
			const s = statusStyle[String(v)] ?? statusStyle.Minors;
			return (
				<span
					style={{
						display: 'inline-flex',
						padding: '2px 8px',
						borderRadius: 'var(--radius-full)',
						fontSize: 10,
						fontWeight: 600,
						background: s.background,
						color: s.color,
					}}
				>
					{String(v)}
				</span>
			);
		},
	},
];

const data: Player[] = [
	{
		num: '17',
		initials: 'SO',
		name: 'Shohei Ohtani',
		pos: 'DH/P',
		ba: '.342',
		hr: '28',
		rbi: '89',
		obp: '.420',
		status: 'Active',
	},
	{
		num: '50',
		initials: 'MB',
		name: 'Mookie Betts',
		pos: 'RF/SS',
		ba: '.310',
		hr: '22',
		rbi: '74',
		obp: '.392',
		status: 'Active',
	},
	{
		num: '5',
		initials: 'FF',
		name: 'Freddie Freeman',
		pos: '1B',
		ba: '.298',
		hr: '19',
		rbi: '81',
		obp: '.374',
		status: 'Active',
	},
	{
		num: '37',
		initials: 'TH',
		name: 'Teoscar Hernandez',
		pos: 'LF',
		ba: '.256',
		hr: '17',
		rbi: '58',
		obp: '.312',
		status: 'IL-10',
	},
	{
		num: '71',
		initials: 'GS',
		name: 'Gavin Stone',
		pos: 'SP',
		ba: '—',
		hr: '—',
		rbi: '—',
		obp: '—',
		status: 'Minors',
	},
];

export const DataTable: FC = () => {
	const [sortKey, setSortKey] = useState<keyof Player | undefined>();
	const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

	const sorted = sortKey
		? [...data].sort((a, b) => {
				const cmp = a[sortKey].localeCompare(b[sortKey]);
				return sortDir === 'asc' ? cmp : -cmp;
			})
		: data;

	return (
		<section id="data" className={styles.section}>
			<div className={styles.sectionHead}>
				<span className={styles.sectionNum}>12</span>
				<h2 className={styles.sectionTitle}>Table</h2>
			</div>

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
		</section>
	);
};
