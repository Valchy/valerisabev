import Head from 'next/head';

export default function Header() {
	return (
		<Head>
			{/* Title and Icon */}
			<title>Valeri Sabev | Full Stack Web Developer</title>
			<link rel="icon" type="image/x-icon" href="/imgs/icon.png" />
			<link rel="canonical" href="https://valerisabev.com" />

			{/* Default Meta Tags */}
			<meta charSet="utf-8" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
			<meta name="HandheldFriendly" content="True" />
			<meta name="MobileOptimized" content="380" />
			<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
			<meta
				name="description"
				content="My name is Valeri Sabev and I am a freelance full stack web developer, cyber-security enthusiast and entrepreneur"
			/>
			<meta name="author" content="Valeri Sabev" />
			<meta
				name="keywords"
				content="Valeri Sabev, Valeri, Sabev, Valchy, full stack web developer, full stack, freelance web developer, web developer, react development, Harbour.Space, cybersecurity, entrepreneur"
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
