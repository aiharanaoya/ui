import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from './Tooltip';

const meta = {
	component: Tooltip,
	args: {
		content: 'ツールチップのテキスト',
		children: <button type="button">ホバーしてください</button>,
	},
	decorators: [
		(Story) => (
			<div style={{ padding: 60, display: 'inline-block' }}>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Top: Story = {
	args: { position: 'top' },
};

export const Right: Story = {
	args: { position: 'right' },
};

export const Bottom: Story = {
	args: { position: 'bottom' },
};
