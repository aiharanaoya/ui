import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { user } from '@/testing/setupTestingLibrary';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
	it('labelが表示される', () => {
		render(<Checkbox id="cb" label="同意する" />);
		expect(screen.getByLabelText('同意する')).toBeInTheDocument();
	});

	it('チェックボックスがクリックで切り替わる', async () => {
		render(<Checkbox id="cb" label="同意する" />);
		const cb = screen.getByRole('checkbox');
		expect(cb).not.toBeChecked();
		await user.click(cb);
		expect(cb).toBeChecked();
	});

	it('disabled のとき操作できない', async () => {
		const handleChange = vi.fn();
		render(
			<Checkbox id="cb" label="同意する" disabled onChange={handleChange} />,
		);
		const cb = screen.getByRole('checkbox');
		expect(cb).toBeDisabled();
	});

	it('エラーメッセージが表示される', () => {
		render(<Checkbox id="cb" label="同意する" error="必須項目です" />);
		expect(screen.getByRole('alert')).toHaveTextContent('必須項目です');
	});

	it('labelとcheckboxが関連付けられる', () => {
		render(<Checkbox id="cb" label="同意する" />);
		expect(screen.getByLabelText('同意する')).toHaveAttribute(
			'type',
			'checkbox',
		);
	});
});
