import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { user } from '@/testing/setupTestingLibrary';
import { Breadcrumb } from './Breadcrumb';

const items = [
	{ label: 'ホーム', onClick: vi.fn() },
	{ label: 'ロスター', onClick: vi.fn() },
	{ label: '大谷翔平' },
];

describe('Breadcrumb', () => {
	it('全アイテムが表示される', () => {
		render(<Breadcrumb items={items} />);
		expect(screen.getByText('ホーム')).toBeInTheDocument();
		expect(screen.getByText('ロスター')).toBeInTheDocument();
		expect(screen.getByText('大谷翔平')).toBeInTheDocument();
	});

	it('最後のアイテムにaria-current="page"が付く', () => {
		render(<Breadcrumb items={items} />);
		expect(screen.getByText('大谷翔平')).toHaveAttribute(
			'aria-current',
			'page',
		);
	});

	it('中間アイテムのクリックでonClickが発火する', async () => {
		const handleClick = vi.fn();
		render(
			<Breadcrumb
				items={[{ label: 'ホーム', onClick: handleClick }, { label: '現在地' }]}
			/>,
		);
		await user.click(screen.getByRole('button', { name: 'ホーム' }));
		expect(handleClick).toHaveBeenCalledOnce();
	});

	it('nav要素にaria-labelが設定される', () => {
		render(<Breadcrumb items={items} />);
		expect(
			screen.getByRole('navigation', { name: 'パンくずリスト' }),
		).toBeInTheDocument();
	});
});
