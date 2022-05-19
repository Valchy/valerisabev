import type { NextPage, GetStaticProps } from 'next';
import { request } from 'graphql-request';

// Section components
import Header from '@components/Header';
import Hero from '@components/Hero';
import About from '@components/About';
import Education from '@components/Education';
import Experience from '@components/Experience';
import Contact from '@components/Contact';

// Graphql Queries
import { CONTENT_API, GET_MAIN_PAGE } from './api/queries';
import { GetMainPageQuery } from '@generated/graphql';

interface MainPageProps {
	page: any;
}

const MainPage: NextPage<MainPageProps> = ({ page }) => {
	const currentPage = page.localizations[0];

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

export const getStaticProps: GetStaticProps = async () => {
	const { page } = await request<GetMainPageQuery>(CONTENT_API, GET_MAIN_PAGE);

	return {
		props: { page },
	};
};

export default MainPage;
