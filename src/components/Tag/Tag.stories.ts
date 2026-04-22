import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tag } from './Tag';

const meta = {
	component: Tag,
	args: { children: 'In Progress' },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Blue: Story = { args: { variant: 'blue' } };
export const Red: Story = { args: { variant: 'red', children: 'Overdue' } };
export const Green: Story = { args: { variant: 'green', children: 'Done' } };
