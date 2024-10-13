import { Check, X } from "lucide-react";

// Component to display password criteria
const PasswordCriteria = ({ password }) => {
	const criteria = [
		{ label: "At least 6 characters", met: password.length >= 6 },
		{ label: "Contains uppercase letter", met: /[A-Z]/.test(password) },
		{ label: "Contains lowercase letter", met: /[a-z]/.test(password) },
		{ label: "Contains a number", met: /\d/.test(password) },
		{ label: "Contains special character", met: /[^A-Za-z0-9]/.test(password) },
	];

	return (
		<div className='mt-2 space-y-1'>
			{criteria.map((item) => (
				<div key={item.label} className='flex items-center text-xs'>
					{item.met ? (
						<Check className='size-4 text-green-400 mr-2' /> // Updated color for Check icon
					) : (
						<X className='size-4 text-red-400 mr-2' /> // Updated color for X icon
					)}
					<span className={item.met ? "text-green-500" : "text-gray-400"}>
						{item.label}
					</span>
				</div>
			))}
		</div>
	);
};

// Component to measure and display password strength
const PasswordStrengthMeter = ({ password }) => {
	// Function to calculate password strength
	const getStrength = (pass) => {
		let strength = 0;
		if (pass.length >= 6) strength++; // Check for minimum length
		if (pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength++; // Check for both cases
		if (pass.match(/\d/)) strength++; // Check for numbers
		if (pass.match(/[^a-zA-Z\d]/)) strength++; // Check for special characters
		return strength;
	};

	const strength = getStrength(password);

	// Function to determine the color based on strength
	const getColor = (strength) => {
		if (strength === 0) return "bg-gradient-to-r from-red-500 to-red-600"; // Very Weak
		if (strength === 1) return "bg-gradient-to-r from-red-400 to-red-500"; // Weak
		if (strength === 2) return "bg-gradient-to-r from-yellow-500 to-yellow-600"; // Fair
		if (strength === 3) return "bg-gradient-to-r from-yellow-400 to-yellow-500"; // Good
		return "bg-gradient-to-r from-green-500 to-green-600"; // Strong
	};

	// Function to get the strength text
	const getStrengthText = (strength) => {
		if (strength === 0) return "Very Weak";
		if (strength === 1) return "Weak";
		if (strength === 2) return "Fair";
		if (strength === 3) return "Good";
		return "Strong";
	};

	return (
		<div className='mt-2'>
			<div className='flex justify-between items-center mb-1'>
				<span className='text-xs text-gray-400'>Password strength</span>
				<span className='text-xs text-gray-400'>{getStrengthText(strength)}</span>
			</div>

			<div className='flex space-x-1'>
				{[...Array(4)].map((_, index) => (
					<div
						key={index}
						className={`h-1 w-1/4 rounded-full transition-colors duration-300
                ${index < strength ? getColor(strength) : "bg-gray-600"} // Default color for unfilled strength bars
              `}
					/>
				))}
			</div>
			<PasswordCriteria password={password} /> {/* Display criteria for password */}
		</div>
	);
};

export default PasswordStrengthMeter;
