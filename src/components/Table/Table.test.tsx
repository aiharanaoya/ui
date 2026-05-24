import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { user } from '@/testing/setupTestingLibrary';
import type { Column } from './Table';
import { Table } from './Table';

type Row = { name: string; score: number };

const columns: Column<Row>[] = [
	{ key: 'name', label: '名前' },
	{ key: 'score', label: 'スコア', sortable: true },
];

const data: Row[] = [
	{ name: '田中', score: 90 },
	{ name: '山田', score: 75 },
];

describe('Table', () => {
	it('カラムヘッダーが表示される', () => {
		render(<Table columns={columns} data={data} />);
		expect(screen.getByText('名前')).toBeInTheDocument();
		expect(screen.getByText('スコア')).toBeInTheDocument();
	});

	it('データ行が表示される', () => {
		render(<Table columns={columns} data={data} />);
		expect(screen.getByText('田中')).toBeInTheDocument();
		expect(screen.getByText('山田')).toBeInTheDocument();
	});

	it('ソート可能カラムをクリックするとonSortが発火する', async () => {
		const handleSort = vi.fn();
		render(<Table columns={columns} data={data} onSort={handleSort} />);
		await user.click(screen.getByText('スコア'));
		expect(handleSort).toHaveBeenCalledWith('score', 'asc');
	});

	it('render関数でカスタムセルを描画できる', () => {
		const colsWithRender: Column<Row>[] = [
			{
				key: 'name',
				label: '名前',
				render: (val) => <strong>{String(val)}</strong>,
			},
			{ key: 'score', label: 'スコア' },
		];
		render(<Table columns={colsWithRender} data={data} />);
		expect(screen.getByText('田中').tagName).toBe('STRONG');
	});
});
