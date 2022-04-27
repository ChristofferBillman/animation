import '../App.css';
import { motion } from 'framer-motion';

function AnimatedCard({cardTitle}) {
	return (
		<motion.div
			className='card'
			whileHover={{backgroundColor: '#7fff00', scale: 1.1}}
			transition={{ ease: "easeOut", duration: 0.3 }}
		>
			<h2>{cardTitle}</h2>
		</motion.div>
		);
}

export default AnimatedCard;