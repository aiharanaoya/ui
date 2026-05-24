import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from './Radio';

const meta = {
	component: Radio,
	args: {
		id: 'radio',
		label: '選択肢A',
		name: 'group',
	},
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
	args: { defaultChecked: true },
};

export const Disabled: Story = {
	args: { disabled: true },
};

export const WithError: Story = {
	args: { error: 'いずれかを選択してください' },
};

export const Group: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
			<Radio id="a" name="plan" label="スタンダード" defaultChecked />
			<Radio id="b" name="plan" label="プロ" />
			<Radio id="c" name="plan" label="エンタープライズ" />
		</div>
	),
};
