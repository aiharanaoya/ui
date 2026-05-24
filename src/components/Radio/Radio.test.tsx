import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { user } from '@/testing/setupTestingLibrary';
import { Radio } from './Radio';

describe('Radio', () => {
	it('labelが表示される', () => {
		render(<Radio id="r" label="選択肢A" name="g" />);
		expect(screen.getByLabelText('選択肢A')).toBeInTheDocument();
	});

	it('クリックで選択される', async () => {
		render(<Radio id="r" label="選択肢A" name="g" />);
		const radio = screen.getByRole('radio');
		expect(radio).not.toBeChecked();
		await user.click(radio);
		expect(radio).toBeChecked();
	});

	it('disabled のとき操作できない', () => {
		render(<Radio id="r" label="選択肢A" name="g" disabled />);
		expect(screen.getByRole('radio')).toBeDisabled();
	});

	it('エラーメッセージが表示される', () => {
		render(<Radio id="r" label="選択肢A" name="g" error="必須項目です" />);
		expect(screen.getByRole('alert')).toHaveTextContent('必須項目です');
	});
});
