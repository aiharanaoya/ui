import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { user } from '@/testing/setupTestingLibrary';
import { Alert } from './Alert';

describe('Alert', () => {
	it('titleとchildrenが表示される', () => {
		render(<Alert title="タイトル">本文</Alert>);
		expect(screen.getByText('タイトル')).toBeInTheDocument();
		expect(screen.getByText('本文')).toBeInTheDocument();
	});

	it('role="alert"が設定される', () => {
		render(<Alert>本文</Alert>);
		expect(screen.getByRole('alert')).toBeInTheDocument();
	});

	it('onCloseが渡されると閉じるボタンが表示される', () => {
		render(<Alert onClose={() => {}}>本文</Alert>);
		expect(screen.getByRole('button', { name: '閉じる' })).toBeInTheDocument();
	});

	it('onCloseが渡されないと閉じるボタンが表示されない', () => {
		render(<Alert>本文</Alert>);
		expect(
			screen.queryByRole('button', { name: '閉じる' }),
		).not.toBeInTheDocument();
	});

	it('閉じるボタンをクリックするとonCloseが発火する', async () => {
		const handleClose = vi.fn();
		render(<Alert onClose={handleClose}>本文</Alert>);
		await user.click(screen.getByRole('button', { name: '閉じる' }));
		expect(handleClose).toHaveBeenCalledOnce();
	});

	it('variantがdivに渡されない', () => {
		render(<Alert variant="error">本文</Alert>);
		const alert = screen.getByRole('alert');
		expect(alert).not.toHaveAttribute('variant');
	});
});
