import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Tag } from './Tag';

describe('Tag', () => {
	it('テキストが表示される', () => {
		render(<Tag>In Progress</Tag>);
		expect(screen.getByText('In Progress')).toBeInTheDocument();
	});

	it('装飾用dotが描画される', () => {
		const { container } = render(<Tag>Done</Tag>);
		expect(container.querySelector('[aria-hidden="true"]')).toBeTruthy();
	});
});
