import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Nav, NavItem } from './Nav';

describe('Nav', () => {
	it('ナビゲーションリンクが表示される', () => {
		render(
			<Nav>
				<NavItem label="Roster" href="#" />
				<NavItem label="Schedule" href="#" />
			</Nav>,
		);
		expect(screen.getByText('Roster')).toBeInTheDocument();
		expect(screen.getByText('Schedule')).toBeInTheDocument();
	});

	it('activeなリンクにaria-current=pageが付く', () => {
		render(
			<Nav>
				<NavItem label="Roster" href="#" active />
			</Nav>,
		);
		expect(screen.getByText('Roster')).toHaveAttribute('aria-current', 'page');
	});
});
