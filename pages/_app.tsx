import type { AppProps } from 'next/app';

// Page template components
import Layout from '@components/Layout';
import Header from '@components/Header';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

// Global CSS
import '@styles/flex.min.css';
import '@styles/root.css';
import '@styles/main.css';
import '@styles/responsive.css';

// temp css files
import '@styles/about.css';
import '@styles/contact.css';
import '@styles/education.css';
import '@styles/experience.css';
import '@styles/footer.css';
import '@styles/hero.css';
import '@styles/navbar.css';

function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Header />
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</Layout>
	);
}

export default App;
