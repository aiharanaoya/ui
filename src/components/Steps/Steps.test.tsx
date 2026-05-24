import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Steps } from './Steps';

const steps = [
	{ label: 'アカウント' },
	{ label: 'チーム' },
	{ label: 'ロスター' },
];

describe('Steps', () => {
	it('全ステップのラベルが表示される', () => {
		render(<Steps steps={steps} currentStep={1} />);
		expect(screen.getByText('アカウント')).toBeInTheDocument();
		expect(screen.getByText('チーム')).toBeInTheDocument();
		expect(screen.getByText('ロスター')).toBeInTheDocument();
	});

	it('完了ステップはチェックマークが表示される', () => {
		render(<Steps steps={steps} currentStep={2} />);
		expect(screen.getAllByText('✓')).toHaveLength(2);
	});

	it('アクティブステップは番号が表示される', () => {
		render(<Steps steps={steps} currentStep={1} />);
		expect(screen.getByLabelText('ステップ2: チーム')).toHaveTextContent('2');
	});
});
