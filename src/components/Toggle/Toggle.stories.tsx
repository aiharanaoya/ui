import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Toggle } from './Toggle';

const meta = {
	component: Toggle,
	args: {
		checked: false,
		onChange: () => {},
	},
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Off: Story = {};

export const On: Story = {
	args: { checked: true },
};

export const Red: Story = {
	args: { checked: true, color: 'red' },
};

export const WithLabel: Story = {
	args: { label: '通知を受け取る' },
};

export const Disabled: Story = {
	args: { disabled: true },
};

export const Interactive: Story = {
	render: () => {
		const [checked, setChecked] = useState(false);
		return (
			<Toggle
				checked={checked}
				onChange={setChecked}
				label={checked ? 'オン' : 'オフ'}
			/>
		);
	},
};
