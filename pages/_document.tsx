import Analytics from '@components/Analytics';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link
					/* Montserrat Font */
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100&display=swap"
				/>
				<Analytics />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
