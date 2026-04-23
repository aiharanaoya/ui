import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { StatCard } from './StatCard';

describe('StatCard', () => {
	it('ラベルと値が表示される', () => {
		render(<StatCard label="Win Rate" value="73%" />);
		expect(screen.getByText('Win Rate')).toBeInTheDocument();
		expect(screen.getByText('73%')).toBeInTheDocument();
	});

	it('trendが表示される', () => {
		render(
			<StatCard
				label="Win Rate"
				value="73%"
				trend="4.2% this month"
				trendDirection="up"
			/>,
		);
		expect(screen.getByText(/4.2% this month/)).toBeInTheDocument();
	});
});
