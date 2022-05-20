import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const useScrollAnimation = (threshold: number = 0.2): [typeof ref, typeof controls] => {
	const controls = useAnimation();
	const [ref, inView] = useInView({ threshold });

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);

	return [ref, controls];
};

export default useScrollAnimation;
