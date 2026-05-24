import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Spinner } from './Spinner';

describe('Spinner', () => {
	it('role="status"が設定される', () => {
		render(<Spinner />);
		expect(screen.getByRole('status')).toBeInTheDocument();
	});

	it('aria-labelが設定される', () => {
		render(<Spinner label="読み込み中" />);
		expect(screen.getByLabelText('読み込み中')).toBeInTheDocument();
	});

	it('デフォルトのaria-labelは"ロード中"', () => {
		render(<Spinner />);
		expect(screen.getByLabelText('ロード中')).toBeInTheDocument();
	});
});
