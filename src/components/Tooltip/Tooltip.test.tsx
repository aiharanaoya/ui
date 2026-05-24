import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Tooltip } from './Tooltip';

describe('Tooltip', () => {
	it('childrenが表示される', () => {
		render(
			<Tooltip content="説明テキスト">
				<button type="button">ボタン</button>
			</Tooltip>,
		);
		expect(screen.getByRole('button', { name: 'ボタン' })).toBeInTheDocument();
	});

	it('tooltipコンテンツがDOMに存在する', () => {
		render(
			<Tooltip content="説明テキスト">
				<button type="button">ボタン</button>
			</Tooltip>,
		);
		expect(screen.getByRole('tooltip')).toHaveTextContent('説明テキスト');
	});
});
