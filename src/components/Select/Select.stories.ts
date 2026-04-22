import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './Select';

const meta = {
	component: Select,
	args: {
		id: 'team',
		label: 'チーム',
		children: undefined,
	},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithError: Story = { args: { error: 'チームを選択してください' } };
export const Disabled: Story = { args: { disabled: true } };
