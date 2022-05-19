import classNames from 'classnames';
import { motion } from 'framer-motion';
import styles from './Loader.module.css';

export default function Loader() {
	return (
		<motion.div exit={{ opacity: 0 }} transition={{ duration: 1 }} className={classNames(styles.loader_gif, 'flex-col-center-center')}>
			<motion.img
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2, duration: 0.1 }}
				width={80}
				height={80}
				src="/imgs/loader.svg"
				alt="Website loader"
			/>
			<motion.span animate={{ rotate: [0, 10, -10, 0] }}>VS</motion.span>
		</motion.div>
	);
}
