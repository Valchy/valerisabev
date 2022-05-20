/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ['en', 'bg'],
		defaultLocale: 'en',
		localeDetection: false,
	},
};

module.exports = nextConfig;
