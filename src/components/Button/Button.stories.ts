import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta = {
	component: Button,
	args: {
		children: 'ボタン',
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: { variant: 'primary' },
};

export const Accent: Story = {
	args: { variant: 'accent' },
};

export const Outline: Story = {
	args: { variant: 'outline' },
};

export const Ghost: Story = {
	args: { variant: 'ghost' },
};

export const Dark: Story = {
	args: { variant: 'dark' },
};

export const Small: Story = {
	args: { size: 'sm' },
};

export const Large: Story = {
	args: { size: 'lg' },
};

export const Pill: Story = {
	args: { pill: true },
};

export const Disabled: Story = {
	args: { disabled: true },
};
