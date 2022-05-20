import type { NextPage, GetStaticProps } from 'next';
import { request } from 'graphql-request';
import { useRouter } from 'next/router';

// Section components
import Header from '@components/Header';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Hero from '@components/Hero';
import About from '@components/About';
import Education from '@components/Education';
import Experience from '@components/Experience';
import Contact from '@components/Contact';

// Graphql Queries
import { CONTENT_API, GET_MAIN_PAGE } from './api/queries';
import type { GetMainPageQuery } from '@generated/graphql';

interface MainPageProps {
	page: GetMainPageQuery['page'];
}

const MainPage: NextPage<MainPageProps> = ({ page }) => {
	const { locale } = useRouter();
	const language = locale?.split('-')[0];
	const chosenPage = page?.localizations.find(({ locale }) => locale === language);
	const currentPage = page?.localizations[1]; // chosenPage || page?.localizations[0];

	// Getting data for each component
	const navbarData = currentPage?.sections.find(({ __typename }) => __typename === 'NavbarSection');
	const heroData = currentPage?.sections.find(({ __typename }) => __typename === 'HeroSection');
	const aboutData = currentPage?.sections.find(({ __typename }) => __typename === 'AboutSection');
	const educationData = currentPage?.sections.filter(({ __typename }) => __typename === 'EducationSection');
	const experienceData = currentPage?.sections.filter(({ __typename }) => __typename === 'ExperienceSection');
	const contactData = currentPage?.sections.find(({ __typename }) => __typename === 'ContactSection');
	const footerData = currentPage?.sections.find(({ __typename }) => __typename === 'FooterSection');

	return (
		<>
			<Header title={currentPage?.title} description={currentPage?.description} favicon={currentPage?.favicon?.url} />
			{navbarData?.display && <Navbar navbarData={navbarData} />}
			<main>
				{heroData?.display && <Hero heroData={heroData} />}
				{aboutData?.display && <About aboutData={aboutData} />}
				{educationData && educationData?.length > 0 && <Education educationData={educationData} />}
				{experienceData && experienceData?.length > 0 && <Experience experienceData={experienceData} />}
				{contactData?.display && <Contact contactData={contactData} />}
			</main>
			{footerData?.display && <Footer footerData={footerData} />}
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const { page } = await request<GetMainPageQuery>(CONTENT_API, GET_MAIN_PAGE);

	return {
		props: { page: page || [] },
	};
};

export default MainPage;
