import { motion } from "framer-motion";

const FloatingShape = ({ size, top, left, delay }) => {
	return (
		<motion.div
			className={`absolute rounded-full opacity-20 blur-xl`}
			style={{
				top,
				left,
				background: 'linear-gradient(to right, rgba(34, 197, 94, 0.2), rgba(20, 184, 166, 0.2))', // Add a gradient background
			}}
			animate={{
				y: ["0%", "100%", "0%"],
				x: ["0%", "100%", "0%"],
				rotate: [0, 360],
			}}
			transition={{
				duration: 20,
				ease: "linear",
				repeat: Infinity,
				delay,
			}}
			aria-hidden='true'
		/>
	);
};

export default FloatingShape;
