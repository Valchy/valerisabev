import type { NextPage, GetStaticProps } from 'next';
import { request } from 'graphql-request';

// Section components
import Hero from '@components/Hero';
import About from '@components/About';
import Education from '@components/Education';
import Experience from '@components/Experience';
import Contact from '@components/Contact';

// Graphql Queries
import { GET_ASSETS } from './api/queries';

interface Props {
	assets: any[];
}

const HomePage: NextPage<Props> = ({ assets }) => {
	return (
		<main>
			<Hero />
			<About />
			<Education />
			<Experience />
			<Contact />
		</main>
	);
};

export const getStaticProps: GetStaticProps = async (context) => {
	const data = await request(process.env.NEXT_PUBLIC_GRAPHCMS_API, GET_ASSETS);
	// console.log(data);

	return {
		props: {
			assets: data.assets || [],
		},
	};
};

export default HomePage;
