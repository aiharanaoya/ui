import type { Meta, StoryObj } from '@storybook/react-vite';
import { ListItem } from './ListItem';

const meta = {
	component: ListItem,
	args: { name: 'Shohei Ohtani', initials: 'SO' },
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithMeta: Story = { args: { meta: 'DH · Los Angeles Dodgers' } };
