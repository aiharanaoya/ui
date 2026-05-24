import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
	it('デフォルト(text)でレンダリングされる', () => {
		const { container } = render(<Skeleton />);
		expect(container.firstChild).toBeInTheDocument();
	});

	it('cardバリアントは複合要素を描画する', () => {
		const { container } = render(<Skeleton variant="card" />);
		expect(container.querySelectorAll('div').length).toBeGreaterThan(1);
	});

	it('width propがスタイルに反映される', () => {
		const { container } = render(<Skeleton width="200px" />);
		const el = container.firstChild as HTMLElement;
		expect(el.style.width).toBe('200px');
	});
});
