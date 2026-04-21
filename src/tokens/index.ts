export const colors = {
	blue: {
		50: '#EBF3FA',
		100: '#C8DFF1',
		200: '#91BFE3',
		300: '#5A9FD5',
		400: '#1A6FAF',
		500: '#005A9C',
		600: '#004880',
		700: '#003664',
		800: '#002448',
		900: '#0A1628',
	},
	red: {
		50: '#FEF2F2',
		100: '#FDEAEA',
		200: '#FCA5A5',
		300: '#F87171',
		400: '#F55A5E',
		500: '#EF3E42',
		600: '#CC2D31',
		700: '#991B1E',
		800: '#7F1D1F',
	},
	gray: {
		50: '#F9FAFB',
		100: '#F3F4F6',
		200: '#E5E7EB',
		300: '#D1D5DB',
		400: '#9CA3AF',
		500: '#6B7280',
		600: '#4B5563',
		700: '#374151',
		800: '#1F2937',
		900: '#111827',
	},
	gold: {
		400: '#F5C842',
		500: '#E6B800',
		600: '#C49C00',
	},
	white: '#FFFFFF',
	black: '#0A0D12',
} as const;

export const spacing = {
	0: '0px',
	1: '4px',
	2: '8px',
	3: '12px',
	4: '16px',
	5: '20px',
	6: '24px',
	8: '32px',
	10: '40px',
	12: '48px',
	16: '64px',
	20: '80px',
	24: '96px',
} as const;

export const radius = {
	sm: '4px',
	md: '8px',
	lg: '12px',
	xl: '16px',
	'2xl': '24px',
	full: '9999px',
} as const;

export const shadow = {
	xs: '0 1px 2px rgba(0,0,0,0.05)',
	sm: '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)',
	md: '0 4px 12px rgba(0,0,0,0.10), 0 2px 4px rgba(0,0,0,0.06)',
	lg: '0 8px 24px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.06)',
	xl: '0 16px 40px rgba(0,0,0,0.14), 0 8px 16px rgba(0,0,0,0.06)',
	brand: '0 4px 16px rgba(0,90,156,0.30)',
	accent: '0 4px 16px rgba(239,62,66,0.30)',
} as const;

export const duration = {
	fast: '150ms',
	normal: '250ms',
	slow: '400ms',
} as const;

export const ease = {
	standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
	decel: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
	accel: 'cubic-bezier(0.4, 0.0, 1, 1)',
} as const;
