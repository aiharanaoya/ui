import type { FC } from 'react';
import styles from './Steps.module.css';

type Step = {
	label: string;
};

type Props = {
	steps: Step[];
	currentStep: number;
};

type StepState = 'done' | 'active' | 'todo';

function getState(index: number, current: number): StepState {
	if (index < current) return 'done';
	if (index === current) return 'active';
	return 'todo';
}

const stateClass: Record<StepState, string> = {
	done: styles.done,
	active: styles.active,
	todo: styles.todo,
};

export const Steps: FC<Props> = ({ steps, currentStep }) => (
	<ol className={styles.list} aria-label="ステップ">
		{steps.map((step, index) => {
			const state = getState(index, currentStep);
			const isLast = index === steps.length - 1;
			return (
				<li
					key={step.label}
					className={[styles.item, stateClass[state]].join(' ')}
				>
					<div className={styles.stepWrap}>
						<div
							role="img"
							className={styles.circle}
							aria-label={`ステップ${index + 1}: ${step.label}`}
						>
							{state === 'done' ? '✓' : index + 1}
						</div>
						<div className={styles.label}>{step.label}</div>
					</div>
					{!isLast && <div className={styles.line} />}
				</li>
			);
		})}
	</ol>
);
