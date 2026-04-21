import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { user } from '@/testing/setupTestingLibrary';
import { Button } from './Button';

describe('Button', () => {
	it('テキストが表示される', () => {
		render(<Button>クリック</Button>);
		expect(
			screen.getByRole('button', { name: 'クリック' }),
		).toBeInTheDocument();
	});

	it('クリックイベントが発火する', async () => {
		const handleClick = vi.fn();
		render(<Button onClick={handleClick}>クリック</Button>);
		await user.click(screen.getByRole('button'));
		expect(handleClick).toHaveBeenCalledOnce();
	});

	it('disabled のとき操作できない', async () => {
		const handleClick = vi.fn();
		render(
			<Button disabled onClick={handleClick}>
				クリック
			</Button>,
		);
		const button = screen.getByRole('button');
		expect(button).toBeDisabled();
		await user.click(button);
		expect(handleClick).not.toHaveBeenCalled();
	});

	it('variant が button に渡されない', () => {
		render(<Button variant="accent">クリック</Button>);
		const button = screen.getByRole('button');
		expect(button).not.toHaveAttribute('variant');
	});
});
