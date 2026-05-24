import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Chip } from './Chip';

const meta = {
	component: Chip,
	args: {
		children: 'フィルター',
	},
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Selected: Story = {
	args: { selected: true },
};

export const SelectedRed: Story = {
	args: { selected: true, color: 'red' },
};

export const Disabled: Story = {
	args: { disabled: true },
};

export const Group: Story = {
	render: () => {
		const options = ['すべて', 'アクティブ', '完了', 'キャンセル'];
		const [selected, setSelected] = useState('すべて');
		return (
			<div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
				{options.map((opt) => (
					<Chip
						key={opt}
						selected={selected === opt}
						onClick={() => setSelected(opt)}
					>
						{opt}
					</Chip>
				))}
			</div>
		);
	},
};
