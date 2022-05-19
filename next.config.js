/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ['en-US', 'bg-BG'],
		defaultLocale: 'en-US',
		localeDetection: false,
	},
};

module.exports = nextConfig;
