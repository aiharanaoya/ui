import type { Meta, StoryObj } from '@storybook/react-vite';
import { EmptyState } from './EmptyState';

const meta = {
	component: EmptyState,
	args: {
		title: 'データがありません',
		body: 'まだデータが登録されていません。',
	},
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoData: Story = {
	args: { variant: 'no-data' },
};

export const NoResults: Story = {
	args: {
		variant: 'no-results',
		title: '検索結果なし',
		body: '条件に一致するデータが見つかりませんでした。',
	},
};

export const ErrorVariant: Story = {
	args: {
		variant: 'error',
		title: 'エラーが発生しました',
		body: 'データの読み込みに失敗しました。',
	},
};

export const WithActions: Story = {
	args: {
		primaryAction: { label: '新規追加', onClick: () => {} },
		secondaryAction: { label: 'キャンセル', onClick: () => {} },
	},
};
