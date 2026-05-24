import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox';

const meta = {
	component: Checkbox,
	args: {
		id: 'checkbox',
		label: '同意する',
	},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
	args: { defaultChecked: true },
};

export const Indeterminate: Story = {
	args: { indeterminate: true },
};

export const Disabled: Story = {
	args: { disabled: true },
};

export const WithError: Story = {
	args: { error: 'この項目は必須です' },
};

export const NoLabel: Story = {
	args: { label: undefined },
};
