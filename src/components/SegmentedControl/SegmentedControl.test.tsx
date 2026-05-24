import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { user } from '@/testing/setupTestingLibrary';
import { SegmentedControl } from './SegmentedControl';

const options = [
	{ label: '日', value: 'day' },
	{ label: '週', value: 'week' },
	{ label: '月', value: 'month' },
];

describe('SegmentedControl', () => {
	it('全オプションが表示される', () => {
		render(
			<SegmentedControl options={options} value="week" onChange={() => {}} />,
		);
		expect(screen.getByRole('button', { name: '日' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: '週' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: '月' })).toBeInTheDocument();
	});

	it('選択中のオプションのaria-pressedがtrueになる', () => {
		render(
			<SegmentedControl options={options} value="week" onChange={() => {}} />,
		);
		expect(screen.getByRole('button', { name: '週' })).toHaveAttribute(
			'aria-pressed',
			'true',
		);
		expect(screen.getByRole('button', { name: '日' })).toHaveAttribute(
			'aria-pressed',
			'false',
		);
	});

	it('クリックでonChangeが発火する', async () => {
		const handleChange = vi.fn();
		render(
			<SegmentedControl
				options={options}
				value="week"
				onChange={handleChange}
			/>,
		);
		await user.click(screen.getByRole('button', { name: '月' }));
		expect(handleChange).toHaveBeenCalledWith('month');
	});
});
