import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { SegmentedControl } from './SegmentedControl';

const options = [
	{ label: '日', value: 'day' },
	{ label: '週', value: 'week' },
	{ label: '月', value: 'month' },
];

const meta = {
	component: SegmentedControl,
	args: {
		options,
		value: 'week',
		onChange: () => {},
	},
} satisfies Meta<typeof SegmentedControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Interactive: Story = {
	render: () => {
		const [value, setValue] = useState('week');
		return (
			<SegmentedControl options={options} value={value} onChange={setValue} />
		);
	},
};

export const ManyOptions: Story = {
	render: () => {
		const [value, setValue] = useState('roster');
		return (
			<SegmentedControl
				options={[
					{ label: 'ダッシュボード', value: 'dashboard' },
					{ label: 'ロスター', value: 'roster' },
					{ label: 'アナリティクス', value: 'analytics' },
					{ label: 'スケジュール', value: 'schedule' },
				]}
				value={value}
				onChange={setValue}
			/>
		);
	},
};
