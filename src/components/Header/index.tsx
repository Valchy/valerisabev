import Head from 'next/head';
import { default_title, default_description, default_favicon } from './defaults';

interface HeaderProps {
	title?: string;
	description?: string;
	favicon?: string;
}

export default function Header(props: HeaderProps) {
	return (
		<Head>
			{/* Title and Icon */}
			<title>{props.title || default_title}</title>
			<link rel="icon" type="image/x-icon" href={props.favicon || default_favicon} />
			<link rel="canonical" href="https://valerisabev.com/" />
			<link rel="alternate" hrefLang="bg-BG" href="https://valerisabev.com/bg" />
			<link rel="alternate" hrefLang="en-US" href="https://valerisabev.com/" />

			{/* Default Meta Tags */}
			<meta charSet="utf-8" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
			<meta name="HandheldFriendly" content="True" />
			<meta name="MobileOptimized" content="380" />
			<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
			<meta name="description" content={props.description || default_description} />
			<meta name="author" content="Valeri Sabev" />
			<meta
				name="keywords"
				content="Valeri Sabev, Valeri, Sabev, Valchy, freelance web developer, web developer, react development, Harbour.Space, cyber-security, entrepreneur"
			/>

			{/* Social media integration when sharing */}
			<meta property="og:title" content="Valeri Sabev - Full Stack Web Development" />
			<meta property="og:image" content="https://valerisabev.com//imgs/about_pic.jpg" />
			<meta property="og:image:alt" content="Happy summer photo of Valeri Sabev" />
			<meta
				property="og:description"
				content="I am a freelance full stack web developer, cyber-security enthusiast and entrepreneur"
			/>
			<meta name="twitter:title" content="Valeri Sabev | Full Stack Web Developer" />
			<meta name="twitter:image" content="https://valerisabev.com//imgs/about_pic.jpg" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@ValchyGaming" />
			<meta
				name="twitter:description"
				content="I am a freelance full stack web developer, cyber-security enthusiast and entrepreneur"
			/>
		</Head>
	);
}
