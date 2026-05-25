import type { FC } from 'react';
import { Checkbox, Input, Radio, Select, Toggle } from '@/index';
import styles from './Forms.module.css';

export const Forms: FC = () => (
	<section id="forms" className={styles.section}>
		<div className={styles.sectionHead}>
			<span className={styles.sectionNum}>07</span>
			<h2 className={styles.sectionTitle}>Forms & Controls</h2>
		</div>

		<div className={styles.formGrid}>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: 14,
					background: 'var(--color-white)',
					borderRadius: 'var(--radius-lg)',
					border: '1px solid var(--color-gray-200)',
					padding: 22,
					boxShadow: 'var(--shadow-sm)',
				}}
			>
				<div style={{ display: 'flex', gap: 10 }}>
					<Input label="First Name" defaultValue="Shohei" />
					<Input label="Last Name" defaultValue="Ohtani" />
				</div>
				<Input
					label="Email"
					defaultValue="invalid@"
					error="Please enter a valid email address."
				/>
				<Select label="Team">
					<option>Los Angeles Dodgers</option>
					<option>New York Yankees</option>
					<option>San Francisco Giants</option>
				</Select>
				<Input
					label="Username"
					defaultValue="aihara_user"
					disabled
					hint="Username cannot be changed after signup."
				/>
			</div>

			<div className={styles.controlsCol}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: 10,
						padding: 16,
						border: '1px solid var(--color-gray-200)',
						borderRadius: 'var(--radius-md)',
						background: 'var(--color-white)',
					}}
				>
					<p
						style={{
							fontSize: 10,
							fontFamily: 'var(--font-mono)',
							letterSpacing: '0.14em',
							textTransform: 'uppercase',
							color: 'var(--color-gray-400)',
							margin: '0 0 4px',
							display: 'flex',
							alignItems: 'center',
							gap: 10,
						}}
					>
						<span
							style={{
								width: 6,
								height: 6,
								background: 'var(--color-red-500)',
								display: 'inline-block',
								flexShrink: 0,
							}}
						/>
						Checkboxes
					</p>
					<Checkbox label="Live stats enabled" checked readOnly />
					<Checkbox label="Some players selected" indeterminate readOnly />
					<Checkbox label="Show advanced metrics" checked={false} readOnly />
					<Checkbox label="Premium only" disabled readOnly />
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: 10,
						padding: 16,
						border: '1px solid var(--color-gray-200)',
						borderRadius: 'var(--radius-md)',
						background: 'var(--color-white)',
					}}
				>
					<p
						style={{
							fontSize: 10,
							fontFamily: 'var(--font-mono)',
							letterSpacing: '0.14em',
							textTransform: 'uppercase',
							color: 'var(--color-gray-400)',
							margin: '0 0 4px',
							display: 'flex',
							alignItems: 'center',
							gap: 10,
						}}
					>
						<span
							style={{
								width: 6,
								height: 6,
								background: 'var(--color-red-500)',
								display: 'inline-block',
								flexShrink: 0,
							}}
						/>
						Radio Buttons
					</p>
					<Radio
						label="Current season"
						name="season"
						value="current"
						checked
						readOnly
					/>
					<Radio
						label="Last season"
						name="season"
						value="last"
						checked={false}
						readOnly
					/>
					<Radio
						label="Career stats"
						name="season"
						value="career"
						checked={false}
						readOnly
					/>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: 10,
						padding: 16,
						border: '1px solid var(--color-gray-200)',
						borderRadius: 'var(--radius-md)',
						background: 'var(--color-white)',
					}}
				>
					<p
						style={{
							fontSize: 10,
							fontFamily: 'var(--font-mono)',
							letterSpacing: '0.14em',
							textTransform: 'uppercase',
							color: 'var(--color-gray-400)',
							margin: '0 0 4px',
							display: 'flex',
							alignItems: 'center',
							gap: 10,
						}}
					>
						<span
							style={{
								width: 6,
								height: 6,
								background: 'var(--color-red-500)',
								display: 'inline-block',
								flexShrink: 0,
							}}
						/>
						Toggles
					</p>
					<Toggle
						checked={true}
						onChange={() => {}}
						label="Live updates"
						color="blue"
					/>
					<Toggle
						checked={true}
						onChange={() => {}}
						label="Alert mode"
						color="red"
					/>
					<Toggle checked={false} onChange={() => {}} label="Dark mode" />
					<Toggle
						checked={false}
						onChange={() => {}}
						label="Notifications (locked)"
						disabled
					/>
				</div>
			</div>
		</div>
	</section>
);
