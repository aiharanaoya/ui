import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { user } from '@/testing/setupTestingLibrary';
import { Modal } from './Modal';

describe('Modal', () => {
	it('isOpen=trueのとき表示される', () => {
		render(
			<Modal isOpen={true} onClose={() => {}}>
				本文
			</Modal>,
		);
		expect(screen.getByRole('dialog')).toBeInTheDocument();
		expect(screen.getByText('本文')).toBeInTheDocument();
	});

	it('isOpen=falseのとき表示されない', () => {
		render(
			<Modal isOpen={false} onClose={() => {}}>
				本文
			</Modal>,
		);
		expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
	});

	it('titleが表示される', () => {
		render(
			<Modal isOpen={true} onClose={() => {}} title="確認">
				本文
			</Modal>,
		);
		expect(screen.getByText('確認')).toBeInTheDocument();
	});

	it('閉じるボタンをクリックするとonCloseが発火する', async () => {
		const handleClose = vi.fn();
		render(
			<Modal isOpen={true} onClose={handleClose} title="確認">
				本文
			</Modal>,
		);
		await user.click(screen.getByRole('button', { name: '閉じる' }));
		expect(handleClose).toHaveBeenCalledOnce();
	});

	it('オーバーレイをクリックするとonCloseが発火する', async () => {
		const handleClose = vi.fn();
		render(
			<Modal isOpen={true} onClose={handleClose}>
				本文
			</Modal>,
		);
		await user.click(screen.getByRole('button', { name: 'モーダルを閉じる' }));
		expect(handleClose).toHaveBeenCalledOnce();
	});
});
