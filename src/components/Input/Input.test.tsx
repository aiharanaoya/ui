import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { user } from '@/testing/setupTestingLibrary';
import { Input } from './Input';

describe('Input', () => {
	it('ラベルが表示される', () => {
		render(<Input id="email" label="メール" />);
		expect(screen.getByLabelText('メール')).toBeInTheDocument();
	});

	it('エラーメッセージが表示される', () => {
		render(<Input id="email" label="メール" error="必須項目です" />);
		expect(screen.getByRole('alert')).toHaveTextContent('必須項目です');
	});

	it('ヒントが表示される', () => {
		render(<Input id="email" label="メール" hint="例: test@example.com" />);
		expect(screen.getByText('例: test@example.com')).toBeInTheDocument();
	});

	it('disabled のとき入力できない', async () => {
		const handleChange = vi.fn();
		render(
			<Input id="email" label="メール" disabled onChange={handleChange} />,
		);
		const input = screen.getByLabelText('メール');
		expect(input).toBeDisabled();
		await user.type(input, 'test');
		expect(handleChange).not.toHaveBeenCalled();
	});
});
