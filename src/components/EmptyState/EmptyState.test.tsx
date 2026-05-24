import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { user } from '@/testing/setupTestingLibrary';
import { EmptyState } from './EmptyState';

describe('EmptyState', () => {
	it('titleとbodyが表示される', () => {
		render(<EmptyState title="データなし" body="まだ登録されていません。" />);
		expect(screen.getByText('データなし')).toBeInTheDocument();
		expect(screen.getByText('まだ登録されていません。')).toBeInTheDocument();
	});

	it('primaryActionが渡されるとボタンが表示される', () => {
		render(
			<EmptyState
				title="データなし"
				body="説明"
				primaryAction={{ label: '追加', onClick: () => {} }}
			/>,
		);
		expect(screen.getByRole('button', { name: '追加' })).toBeInTheDocument();
	});

	it('primaryActionのクリックでonClickが発火する', async () => {
		const handleClick = vi.fn();
		render(
			<EmptyState
				title="データなし"
				body="説明"
				primaryAction={{ label: '追加', onClick: handleClick }}
			/>,
		);
		await user.click(screen.getByRole('button', { name: '追加' }));
		expect(handleClick).toHaveBeenCalledOnce();
	});

	it('アクションなしのときボタンが表示されない', () => {
		render(<EmptyState title="データなし" body="説明" />);
		expect(screen.queryByRole('button')).not.toBeInTheDocument();
	});
});
