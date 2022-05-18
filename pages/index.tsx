import type { NextPage, GetStaticProps } from 'next';
import { request } from 'graphql-request';
import Head from 'next/head';

// Section components
import Header from '@components/Header';
import Hero from '@components/Hero';
import About from '@components/About';
import Education from '@components/Education';
import Experience from '@components/Experience';
import Contact from '@components/Contact';

// Graphql Queries
import { CONTENT_API, GET_MAIN_PAGE } from './api/queries';

interface Props {
	page: any[];
}

const HomePage: NextPage<Props> = ({ page }) => {
	const currentPage = page[0];

	return (
		<main>
			{/* Meta tags & SEO */}
			<Header title={currentPage?.title} description={currentPage?.description} favicon={currentPage?.favicon?.url} />

			{/* Page Content */}
			<Hero />
			<About />
			<Education />
			<Experience />
			<Contact />
		</main>
	);
};

export const getStaticProps: GetStaticProps = async (context) => {
	const { page } = await request(CONTENT_API, GET_MAIN_PAGE);

	return {
		props: {
			page: page.localizations || [],
		},
	};
};

export default HomePage;
