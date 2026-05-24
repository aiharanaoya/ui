import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { user } from '@/testing/setupTestingLibrary';
import { Pagination } from './Pagination';

describe('Pagination', () => {
	it('現在のページにaria-current="page"が付く', () => {
		render(<Pagination page={3} totalPages={5} onChange={() => {}} />);
		expect(screen.getByLabelText('3ページ')).toHaveAttribute(
			'aria-current',
			'page',
		);
	});

	it('前のページボタンをクリックするとonChangeが発火する', async () => {
		const handleChange = vi.fn();
		render(<Pagination page={3} totalPages={5} onChange={handleChange} />);
		await user.click(screen.getByLabelText('前のページ'));
		expect(handleChange).toHaveBeenCalledWith(2);
	});

	it('次のページボタンをクリックするとonChangeが発火する', async () => {
		const handleChange = vi.fn();
		render(<Pagination page={3} totalPages={5} onChange={handleChange} />);
		await user.click(screen.getByLabelText('次のページ'));
		expect(handleChange).toHaveBeenCalledWith(4);
	});

	it('最初のページで前のページボタンがdisabledになる', () => {
		render(<Pagination page={1} totalPages={5} onChange={() => {}} />);
		expect(screen.getByLabelText('前のページ')).toBeDisabled();
	});

	it('最後のページで次のページボタンがdisabledになる', () => {
		render(<Pagination page={5} totalPages={5} onChange={() => {}} />);
		expect(screen.getByLabelText('次のページ')).toBeDisabled();
	});
});
