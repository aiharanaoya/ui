import type { ComponentPropsWithoutRef, FC } from 'react';
import styles from './Card.module.css';

type Props = ComponentPropsWithoutRef<'div'>;

export const Card: FC<Props> = ({ className, ...rest }) => {
	const classNames = [styles.card, className].filter(Boolean).join(' ');
	return <div className={classNames} {...rest} />;
};
