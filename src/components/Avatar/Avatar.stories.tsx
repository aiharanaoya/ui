import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, AvatarGroup } from './Avatar';

const meta = {
	component: Avatar,
	args: {
		initials: 'SO',
	},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
	render: () => (
		<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
			<Avatar initials="XS" size="xs" />
			<Avatar initials="SM" size="sm" />
			<Avatar initials="MD" size="md" />
			<Avatar initials="LG" size="lg" />
			<Avatar initials="XL" size="xl" />
		</div>
	),
};

export const WithStatus: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: 12 }}>
			<Avatar initials="ON" status="online" />
			<Avatar initials="BY" status="busy" />
			<Avatar initials="AW" status="away" />
		</div>
	),
};

export const WithRing: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: 16 }}>
			<Avatar initials="BL" ring="blue" />
			<Avatar initials="RD" ring="red" />
			<Avatar initials="GD" ring="gold" />
		</div>
	),
};

export const Group: Story = {
	render: () => (
		<AvatarGroup>
			<Avatar initials="AA" color="#005A9C" />
			<Avatar initials="BB" color="#EF3E42" />
			<Avatar initials="CC" color="#0A1628" />
			<Avatar initials="DD" color="#16A34A" />
		</AvatarGroup>
	),
};
