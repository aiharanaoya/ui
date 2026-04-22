import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Select } from './Select';

describe('Select', () => {
	it('ラベルが表示される', () => {
		render(
			<Select id="team" label="チーム">
				<option>Dodgers</option>
			</Select>,
		);
		expect(screen.getByLabelText('チーム')).toBeInTheDocument();
	});

	it('エラーメッセージが表示される', () => {
		render(
			<Select id="team" label="チーム" error="選択してください">
				<option>Dodgers</option>
			</Select>,
		);
		expect(screen.getByRole('alert')).toHaveTextContent('選択してください');
	});

	it('disabled のとき操作できない', () => {
		render(
			<Select id="team" label="チーム" disabled>
				<option>Dodgers</option>
			</Select>,
		);
		expect(screen.getByLabelText('チーム')).toBeDisabled();
	});
});
