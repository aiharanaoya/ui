import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Avatar, AvatarGroup } from './Avatar';

describe('Avatar', () => {
	it('イニシャルが表示される', () => {
		render(<Avatar initials="SO" />);
		expect(screen.getByText('SO')).toBeInTheDocument();
	});

	it('aria-labelにイニシャルが設定される', () => {
		render(<Avatar initials="SO" />);
		expect(screen.getByLabelText('SO')).toBeInTheDocument();
	});

	it('statusが渡されるとステータスドットが表示される', () => {
		render(<Avatar initials="SO" status="online" />);
		expect(screen.getByLabelText('online')).toBeInTheDocument();
	});

	it('statusが渡されないとステータスドットが表示されない', () => {
		render(<Avatar initials="SO" />);
		expect(screen.queryByLabelText('online')).not.toBeInTheDocument();
	});
});

describe('AvatarGroup', () => {
	it('childrenが表示される', () => {
		render(
			<AvatarGroup>
				<Avatar initials="AA" />
				<Avatar initials="BB" />
			</AvatarGroup>,
		);
		expect(screen.getByText('AA')).toBeInTheDocument();
		expect(screen.getByText('BB')).toBeInTheDocument();
	});
});
