import { motion } from "framer-motion";

const LoadingSpinner = () => {
	return (
		<div className='min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden'>
			{/* Gradient Loading Spinner */}
			<motion.div
				className='w-16 h-16 border-4 border-t-4 border-t-transparent rounded-full'
				style={{
					borderColor: 'rgba(20, 184, 166, 0.5)', // Set a base border color
					background: 'linear-gradient(45deg, rgba(20, 184, 166, 0.5), rgba(34, 197, 94, 0.5))', // Gradient background for spinner
					WebkitBackgroundClip: 'text', // Background clip for text
					color: 'transparent', // Text color transparent
				}}
				animate={{ rotate: 360 }}
				transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
			/>
		</div>
	);
};

export default LoadingSpinner;
