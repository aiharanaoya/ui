import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';

const meta = {
	component: Card,
	args: {
		children: 'Card content',
		style: { padding: '16px', width: '200px' },
	},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
