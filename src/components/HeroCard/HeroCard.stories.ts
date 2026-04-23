import type { Meta, StoryObj } from '@storybook/react-vite';
import { HeroCard } from './HeroCard';

const meta = {
	component: HeroCard,
	args: { label: 'Total Wins', value: 142 },
} satisfies Meta<typeof HeroCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithSubtitle: Story = { args: { subtitle: 'Season 2024' } };
