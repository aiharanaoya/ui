import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ProgressBar } from './ProgressBar';

describe('ProgressBar', () => {
	it('aria属性が設定される', () => {
		render(<ProgressBar value={50} />);
		const bar = screen.getByRole('progressbar');
		expect(bar).toHaveAttribute('aria-valuenow', '50');
		expect(bar).toHaveAttribute('aria-valuemin', '0');
		expect(bar).toHaveAttribute('aria-valuemax', '100');
	});

	it('labelが表示される', () => {
		render(<ProgressBar value={50} label="進捗" showValue />);
		expect(screen.getByText('進捗')).toBeInTheDocument();
	});

	it('showValueが有効なとき値が表示される', () => {
		render(<ProgressBar value={75} showValue />);
		expect(screen.getByText('75%')).toBeInTheDocument();
	});

	it('valueが100を超えても100でクランプされる', () => {
		render(<ProgressBar value={150} showValue />);
		expect(screen.getByText('100%')).toBeInTheDocument();
	});

	it('valueが0未満でも0でクランプされる', () => {
		render(<ProgressBar value={-10} showValue />);
		expect(screen.getByText('0%')).toBeInTheDocument();
	});
});
