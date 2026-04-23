import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Tab, Tabs } from './Tabs';

describe('Tabs', () => {
	it('タブラベルが表示される', () => {
		render(
			<Tabs>
				<Tab label="Roster" />
				<Tab label="Schedule" />
			</Tabs>,
		);
		expect(screen.getByText('Roster')).toBeInTheDocument();
		expect(screen.getByText('Schedule')).toBeInTheDocument();
	});

	it('activeなタブにaria-selected=trueが付く', () => {
		render(
			<Tabs>
				<Tab label="Roster" active />
				<Tab label="Schedule" />
			</Tabs>,
		);
		expect(screen.getByText('Roster')).toHaveAttribute('aria-selected', 'true');
		expect(screen.getByText('Schedule')).toHaveAttribute(
			'aria-selected',
			'false',
		);
	});
});
