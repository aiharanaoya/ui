import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './Alert';

const meta = {
	component: Alert,
	args: {
		title: '通知タイトル',
		children: 'これは通知メッセージの本文です。',
	},
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
	args: { variant: 'info' },
};

export const Success: Story = {
	args: { variant: 'success', title: '成功しました' },
};

export const Warning: Story = {
	args: { variant: 'warning', title: '注意が必要です' },
};

export const ErrorVariant: Story = {
	args: { variant: 'error', title: 'エラーが発生しました' },
};

export const Toast: Story = {
	args: { variant: 'toast', title: 'トースト通知' },
};

export const WithClose: Story = {
	args: { onClose: () => {} },
};

export const TitleOnly: Story = {
	args: { children: undefined },
};
