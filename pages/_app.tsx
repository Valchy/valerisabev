import type { AppProps } from 'next/app';

// Global CSS
import '@styles/flex.min.css';
import '@styles/root.css';
import '@styles/main.css';
import '@styles/responsive.css';

function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default App;
