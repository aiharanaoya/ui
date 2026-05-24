import type { Meta, StoryObj } from '@storybook/react-vite';
import { Steps } from './Steps';

const steps = [
	{ label: 'アカウント' },
	{ label: 'チーム' },
	{ label: 'ロスター' },
	{ label: '設定' },
];

const meta = {
	component: Steps,
	args: {
		steps,
		currentStep: 2,
	},
} satisfies Meta<typeof Steps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FirstStep: Story = {
	args: { currentStep: 0 },
};

export const LastStep: Story = {
	args: { currentStep: 3 },
};

export const AllDone: Story = {
	args: { currentStep: 4 },
};
