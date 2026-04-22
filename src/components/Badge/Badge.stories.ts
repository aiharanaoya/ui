import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta = {
	component: Badge,
	args: { children: 'Active' },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Blue: Story = { args: { variant: 'blue' } };
export const Red: Story = { args: { variant: 'red' } };
export const Green: Story = { args: { variant: 'green' } };
export const Yellow: Story = { args: { variant: 'yellow' } };
export const Gray: Story = { args: { variant: 'gray' } };
export const Gold: Story = { args: { variant: 'gold', children: 'MVP' } };
export const SolidBlue: Story = {
	args: { variant: 'solid-blue', children: 'Primary' },
};
export const SolidRed: Story = {
	args: { variant: 'solid-red', children: 'New' },
};
export const Dark: Story = { args: { variant: 'dark', children: 'Beta' } };
