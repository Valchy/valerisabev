import type { NextPage, GetStaticProps } from 'next';
import { request } from 'graphql-request';

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
	locale: string;
}

const MainPage: NextPage<MainPageProps> = ({ page, locale }) => {
	// Getting data for each component
	const navbarData = page?.sections?.find(({ __typename }) => __typename === 'NavbarSection');
	const heroData = page?.sections?.find(({ __typename }) => __typename === 'HeroSection');
	const aboutData = page?.sections?.find(({ __typename }) => __typename === 'AboutSection');
	const educationData = page?.sections?.filter(({ __typename, display }) => display && __typename === 'EducationSection');
	const experienceData = page?.sections?.filter(({ __typename, display }) => display && __typename === 'ExperienceSection');
	const contactData = page?.sections?.find(({ __typename }) => __typename === 'ContactSection');
	const footerData = page?.sections?.find(({ __typename }) => __typename === 'FooterSection');

	return (
		<>
			<Header title={page?.title} description={page?.description} favicon={page?.favicon?.url} />
			{navbarData?.display && <Navbar navbarData={navbarData} locale={locale} />}
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	const { page } = await request<GetMainPageQuery>(CONTENT_API, GET_MAIN_PAGE(locale));

	return {
		props: { page, locale },
	};
};

export default MainPage;
