import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { HeroCard } from './HeroCard';

describe('HeroCard', () => {
	it('ラベルと値が表示される', () => {
		render(<HeroCard label="Total Wins" value={142} />);
		expect(screen.getByText('Total Wins')).toBeInTheDocument();
		expect(screen.getByText('142')).toBeInTheDocument();
	});

	it('subtitleが表示される', () => {
		render(<HeroCard label="Total Wins" value={142} subtitle="Season 2024" />);
		expect(screen.getByText('Season 2024')).toBeInTheDocument();
	});
});
