import type { Meta, StoryObj } from '@storybook/react-vite';
import { Nav, NavItem } from './Nav';

const meta = {
	component: Nav,
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Nav>
			<NavItem label="Roster" href="#" active />
			<NavItem label="Schedule" href="#" />
			<NavItem label="Stats" href="#" />
		</Nav>
	),
};
