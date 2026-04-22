import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';

const meta = {
	component: Input,
	args: {
		id: 'input',
		label: 'メールアドレス',
		placeholder: 'example@email.com',
	},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithHint: Story = {
	args: { hint: '登録時のメールアドレスを入力してください' },
};
export const WithError: Story = {
	args: {
		error: '有効なメールアドレスを入力してください',
		defaultValue: 'invalid@',
	},
};
export const Disabled: Story = {
	args: { disabled: true, defaultValue: 'noya_user' },
};
