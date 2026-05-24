import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { user } from '@/testing/setupTestingLibrary';
import { Toggle } from './Toggle';

describe('Toggle', () => {
	it('labelが表示される', () => {
		render(<Toggle checked={false} onChange={() => {}} label="通知" />);
		expect(screen.getByText('通知')).toBeInTheDocument();
	});

	it('aria-checkedがcheckedに連動する', () => {
		const { rerender } = render(<Toggle checked={false} onChange={() => {}} />);
		expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false');
		rerender(<Toggle checked={true} onChange={() => {}} />);
		expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
	});

	it('クリックでonChangeが発火する', async () => {
		const handleChange = vi.fn();
		render(<Toggle checked={false} onChange={handleChange} />);
		await user.click(screen.getByRole('switch'));
		expect(handleChange).toHaveBeenCalledWith(true);
	});

	it('disabled のときonChangeが発火しない', async () => {
		const handleChange = vi.fn();
		render(<Toggle checked={false} onChange={handleChange} disabled />);
		await user.click(screen.getByRole('switch'));
		expect(handleChange).not.toHaveBeenCalled();
	});
});
