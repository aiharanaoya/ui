import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Badge } from './Badge';

describe('Badge', () => {
	it('テキストが表示される', () => {
		render(<Badge>Active</Badge>);
		expect(screen.getByText('Active')).toBeInTheDocument();
	});

	it('variant が span に渡されない', () => {
		render(<Badge variant="solid-blue">Primary</Badge>);
		expect(screen.getByText('Primary')).not.toHaveAttribute('variant');
	});
});
