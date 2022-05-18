import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@components/Header';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Valeri Sabev</title>
				<meta name="description" content="My personal website" />
			</Head>

			<Header />

			<main>Hello World</main>

			<footer>Footer</footer>
		</div>
	);
};

export default Home;
