import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Tab, Tabs } from './Tabs';

const meta = {
	component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => {
		const [active, setActive] = useState('roster');
		return (
			<Tabs>
				<Tab
					label="Roster"
					active={active === 'roster'}
					onClick={() => setActive('roster')}
				/>
				<Tab
					label="Schedule"
					active={active === 'schedule'}
					onClick={() => setActive('schedule')}
				/>
				<Tab
					label="Stats"
					active={active === 'stats'}
					onClick={() => setActive('stats')}
				/>
			</Tabs>
		);
	},
};
