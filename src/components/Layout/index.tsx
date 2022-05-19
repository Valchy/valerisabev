import { ReactNode /* useEffect, useLayoutEffect, useState */ } from 'react';

// Page template components
// import Loader from './Loader';
import Navbar from './Navbar';
import Footer from './Footer';
import { AnimatePresence } from 'framer-motion';

interface LayoutProps {
	children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	// const [showLoading, setShowLoading] = useState(true);
	// useEffect(() => setShowLoading(false), []);

	return (
		<>
			{/* <AnimatePresence>{showLoading && <Loader />}</AnimatePresence> */}
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
}
