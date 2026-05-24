import type { FC } from 'react';
import styles from './Pagination.module.css';

type Props = {
	page: number;
	totalPages: number;
	onChange: (page: number) => void;
};

function getPages(current: number, total: number): (number | '…')[] {
	if (total <= 5) {
		return Array.from({ length: total }, (_, i) => i + 1);
	}
	const pages: (number | '…')[] = [1];
	if (current > 3) pages.push('…');
	for (
		let i = Math.max(2, current - 1);
		i <= Math.min(total - 1, current + 1);
		i++
	) {
		pages.push(i);
	}
	if (current < total - 2) pages.push('…');
	pages.push(total);
	return pages;
}

export const Pagination: FC<Props> = ({ page, totalPages, onChange }) => {
	const pages = getPages(page, totalPages);

	return (
		<nav aria-label="ページネーション">
			<ol className={styles.list}>
				<li>
					<button
						type="button"
						className={[styles.btn, page === 1 && styles.disabled]
							.filter(Boolean)
							.join(' ')}
						onClick={() => page > 1 && onChange(page - 1)}
						disabled={page === 1}
						aria-label="前のページ"
					>
						‹
					</button>
				</li>
				{pages.map((p, i) =>
					p === '…' ? (
						// biome-ignore lint/suspicious/noArrayIndexKey: ellipsis has no stable key
						<li key={`ellipsis-${i}`} className={styles.ellipsis}>
							…
						</li>
					) : (
						<li key={p}>
							<button
								type="button"
								className={[styles.btn, p === page && styles.active]
									.filter(Boolean)
									.join(' ')}
								onClick={() => onChange(p)}
								aria-label={`${p}ページ`}
								aria-current={p === page ? 'page' : undefined}
							>
								{p}
							</button>
						</li>
					),
				)}
				<li>
					<button
						type="button"
						className={[styles.btn, page === totalPages && styles.disabled]
							.filter(Boolean)
							.join(' ')}
						onClick={() => page < totalPages && onChange(page + 1)}
						disabled={page === totalPages}
						aria-label="次のページ"
					>
						›
					</button>
				</li>
			</ol>
		</nav>
	);
};
