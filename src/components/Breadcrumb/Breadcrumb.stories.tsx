import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumb } from './Breadcrumb';

const meta = {
	component: Breadcrumb,
	args: {
		items: [
			{ label: 'ホーム', onClick: () => {} },
			{ label: 'ロスター', onClick: () => {} },
			{ label: '大谷翔平' },
		],
	},
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SlashSeparator: Story = {
	args: { separator: '/' },
};

export const Short: Story = {
	args: {
		items: [
			{ label: 'noyabase', onClick: () => {} },
			{ label: 'アナリティクス' },
		],
	},
};
