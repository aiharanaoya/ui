import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatCard } from './StatCard';

const meta = {
	component: StatCard,
	args: { label: 'Win Rate', value: '73%' },
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithTrendUp: Story = {
	args: { trend: '4.2% this month', trendDirection: 'up' },
};
export const WithTrendDown: Story = {
	args: {
		label: 'Games Played',
		value: 142,
		trend: '3 from last season',
		trendDirection: 'down',
	},
};
