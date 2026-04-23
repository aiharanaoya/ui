import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ListItem } from './ListItem';

describe('ListItem', () => {
	it('名前とイニシャルが表示される', () => {
		render(<ListItem name="Shohei Ohtani" initials="SO" />);
		expect(screen.getByText('Shohei Ohtani')).toBeInTheDocument();
		expect(screen.getByText('SO')).toBeInTheDocument();
	});

	it('metaが表示される', () => {
		render(
			<ListItem
				name="Shohei Ohtani"
				initials="SO"
				meta="DH · Los Angeles Dodgers"
			/>,
		);
		expect(screen.getByText('DH · Los Angeles Dodgers')).toBeInTheDocument();
	});
});
