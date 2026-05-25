import type { FC } from 'react';
import styles from './App.module.css';
import { AlertsToasts } from './components/AlertsToasts';
import { Avatars } from './components/Avatars';
import { BadgesTags } from './components/BadgesTags';
import { Brand } from './components/Brand';
import { Buttons } from './components/Buttons';
import { Cards } from './components/Cards';
import { ColorSection } from './components/ColorSection';
import { DataTable } from './components/DataTable';
import { EmptyStateSection } from './components/EmptyStateSection';
import { Forms } from './components/Forms';
import { Navigation } from './components/Navigation';
import { Overlay } from './components/Overlay';
import { Progress } from './components/Progress';
import { SelectsChips } from './components/SelectsChips';
import { Shadows } from './components/Shadows';
import { Spacing } from './components/Spacing';
import { Typography } from './components/Typography';

const sections = [
	{ id: 'brand', label: 'Brand & Logo' },
	{ id: 'color', label: 'Color' },
	{ id: 'typography', label: 'Typography' },
	{ id: 'spacing', label: 'Spacing & Radii' },
	{ id: 'shadows', label: 'Shadows' },
	{ id: 'buttons', label: 'Buttons' },
	{ id: 'forms', label: 'Forms' },
	{ id: 'selects', label: 'Selects & Chips' },
	{ id: 'badges', label: 'Badges & Tags' },
	{ id: 'avatars', label: 'Avatars' },
	{ id: 'cards', label: 'Cards' },
	{ id: 'data', label: 'Data' },
	{ id: 'alerts', label: 'Alerts & Toasts' },
	{ id: 'overlay', label: 'Overlay' },
	{ id: 'progress', label: 'Progress' },
	{ id: 'navigation', label: 'Navigation' },
	{ id: 'empty-state', label: 'Empty State' },
];

export const App: FC = () => {
	return (
		<div className={styles.layout}>
			<aside className={styles.sidebar}>
				<a href="#brand" className={styles.sidebarLogo}>
					<span className={styles.logoText}>aiharanaoya UI</span>
					<div className={styles.logoDot} />
				</a>
				<div className={styles.indexEyebrow}>Contents</div>
				<nav>
					<ul className={styles.indexList}>
						{sections.map((s, i) => (
							<li key={s.id}>
								<a href={`#${s.id}`} className={styles.sidebarLink}>
									<span>{String(i + 1).padStart(2, '0')}</span>
									{s.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</aside>

			<main className={styles.content}>
				<header className={styles.cover}>
					<div className={styles.coverEyebrow}>
						aiharanaoya UI / design system
					</div>
					<h1 className={styles.coverTitle}>
						The
						<br />
						Component
						<br />
						<span className={styles.coverAccent}>Catalog</span>
					</h1>
					<p className={styles.coverSub}>
						Every brand mark, color, typeface, and component built on the
						aiharanaoya UI design system — laid out for inspection, reference,
						and reuse.
					</p>
				</header>

				<Brand />
				<ColorSection />
				<Typography />
				<Spacing />
				<Shadows />
				<Buttons />
				<Forms />
				<SelectsChips />
				<BadgesTags />
				<Avatars />
				<Cards />
				<DataTable />
				<AlertsToasts />
				<Overlay />
				<Progress />
				<Navigation />
				<EmptyStateSection />

				<footer className={styles.colophon}>
					<div className={styles.colophonMark}>aiharanaoya UI</div>
					<div className={styles.colophonMeta}>End of catalog</div>
				</footer>
			</main>
		</div>
	);
};
