import React from "react";

const Input = ({ icon: Icon, ...props }) => {
	return (
		<div className='relative mb-6'>
			{/* Icon section with the desired color */}
			<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
				<Icon className='w-5 h-5 text-[#E94B3CFF]' /> {/* Set the icon color */}
			</div>
			<input
				{...props}
				className='w-full pl-10 pr-3 py-2 rounded-lg border border-gray-700 transition duration-200
					bg-[#2D2926FF] text-[#E94B3CFF] placeholder-[#E94B3CFF] focus:border-[#E94B3CFF] 
					focus:ring-2 focus:ring-[#E94B3CFF]'
				placeholder={props.placeholder} // Ensure placeholder is displayed correctly
			/>
		</div>
	);
};

export default Input;
