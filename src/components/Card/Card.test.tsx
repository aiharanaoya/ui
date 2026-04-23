import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Card } from './Card';

describe('Card', () => {
	it('childrenが表示される', () => {
		render(<Card>コンテンツ</Card>);
		expect(screen.getByText('コンテンツ')).toBeInTheDocument();
	});
});
