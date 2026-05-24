import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from './Skeleton';

const meta = {
	component: Skeleton,
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
	args: { variant: 'text', width: '200px' },
};

export const Title: Story = {
	args: { variant: 'title', width: '160px' },
};

export const Avatar: Story = {
	args: { variant: 'avatar' },
};

export const Card: Story = {
	args: { variant: 'card', width: '280px' },
};

export const Stacked: Story = {
	render: () => (
		<div
			style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 240 }}
		>
			<Skeleton variant="title" />
			<Skeleton variant="text" />
			<Skeleton variant="text" width="70%" />
		</div>
	),
};
