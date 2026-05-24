import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Modal } from './Modal';

const meta = {
	component: Modal,
	args: {
		isOpen: true,
		onClose: () => {},
		title: '確認',
		children: 'この操作は元に戻せません。本当に続行しますか？',
	},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithFooter: Story = {
	args: {
		footer: (
			<>
				<button
					type="button"
					style={{
						padding: '9px 18px',
						borderRadius: 8,
						border: 'none',
						background: '#F3F4F6',
						color: '#374151',
						fontWeight: 600,
						cursor: 'pointer',
					}}
				>
					キャンセル
				</button>
				<button
					type="button"
					style={{
						padding: '9px 18px',
						borderRadius: 8,
						border: 'none',
						background: '#005A9C',
						color: '#fff',
						fontWeight: 600,
						cursor: 'pointer',
					}}
				>
					確認
				</button>
			</>
		),
	},
};

export const Interactive: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		return (
			<>
				<button type="button" onClick={() => setOpen(true)}>
					モーダルを開く
				</button>
				<Modal isOpen={open} onClose={() => setOpen(false)} title="確認">
					この操作は元に戻せません。本当に続行しますか？
				</Modal>
			</>
		);
	},
};
