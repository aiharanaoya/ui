import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach } from 'vitest';

afterEach(() => {
	cleanup();
});

export const user = userEvent.setup();
