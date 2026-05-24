import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { user } from '@/testing/setupTestingLibrary';
import { Chip } from './Chip';

describe('Chip', () => {
	it('テキストが表示される', () => {
		render(<Chip>タグ</Chip>);
		expect(screen.getByRole('button', { name: 'タグ' })).toBeInTheDocument();
	});

	it('selectedのときaria-pressedがtrueになる', () => {
		render(<Chip selected>タグ</Chip>);
		expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true');
	});

	it('未選択のときaria-pressedがfalseになる', () => {
		render(<Chip>タグ</Chip>);
		expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'false');
	});

	it('クリックイベントが発火する', async () => {
		const handleClick = vi.fn();
		render(<Chip onClick={handleClick}>タグ</Chip>);
		await user.click(screen.getByRole('button'));
		expect(handleClick).toHaveBeenCalledOnce();
	});

	it('disabled のとき操作できない', async () => {
		const handleClick = vi.fn();
		render(
			<Chip disabled onClick={handleClick}>
				タグ
			</Chip>,
		);
		const btn = screen.getByRole('button');
		expect(btn).toBeDisabled();
	});
});
