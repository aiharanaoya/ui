import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Pagination } from './Pagination';

const meta = {
	component: Pagination,
	args: {
		page: 1,
		totalPages: 9,
		onChange: () => {},
	},
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const MiddlePage: Story = {
	args: { page: 5 },
};

export const LastPage: Story = {
	args: { page: 9 },
};

export const FewPages: Story = {
	args: { totalPages: 3, page: 2 },
};

export const Interactive: Story = {
	render: () => {
		const [page, setPage] = useState(1);
		return <Pagination page={page} totalPages={9} onChange={setPage} />;
	},
};
