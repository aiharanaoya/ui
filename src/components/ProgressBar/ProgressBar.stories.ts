import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProgressBar } from './ProgressBar';

const meta = {
	component: ProgressBar,
	args: {
		value: 60,
	},
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Gradient: Story = {
	args: { variant: 'gradient' },
};

export const ErrorVariant: Story = {
	args: { variant: 'error', value: 30 },
};

export const WithLabel: Story = {
	args: { label: 'アップロード中', showValue: true },
};

export const Full: Story = {
	args: { value: 100, showValue: true },
};

export const Empty: Story = {
	args: { value: 0 },
};
