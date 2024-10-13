import { motion } from "framer-motion";
import Input from "../components/input";
import { Loader, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import { useAuthStore } from "../store/authStore";

const SignUpPage = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const { signup, error, isLoading } = useAuthStore();

	const handleSignUp = async (e) => {
		e.preventDefault();

		try {
			await signup(email, password, name);
			navigate("/verify-email");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className='max-w-md w-full bg-[#2D2926FF] bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl 
			overflow-hidden'
		>
			<div className='p-8'>
				<h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#E94B3CFF] to-[#2D2926FF] text-transparent bg-clip-text'>
					Create Account
				</h2>

				<form onSubmit={handleSignUp}>
					<Input
						icon={User}
						type='text'
						placeholder='Full Name'
						value={name}
						onChange={(e) => setName(e.target.value)}
						className='border-gray-400 focus:border-[#E94B3CFF] transition-colors duration-200'
					/>
					<Input
						icon={Mail}
						type='email'
						placeholder='Email Address'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='border-gray-400 focus:border-[#E94B3CFF] transition-colors duration-200'
					/>
					<Input
						icon={Lock}
						type='password'
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className='border-gray-400 focus:border-[#E94B3CFF] transition-colors duration-200'
					/>
					{error && <p className='text-[#E94B3CFF] font-semibold mt-2'>{error}</p>}
					<PasswordStrengthMeter password={password} />

					<motion.button
						className='mt-5 w-full py-3 px-4 bg-[#E94B3CFF] text-white font-bold rounded-lg shadow-lg
						hover:bg-[#2D2926FF] hover:text-[#E94B3CFF] focus:outline-none focus:ring-2 
						focus:ring-[#E94B3CFF] focus:ring-offset-2 focus:ring-offset-[#2D2926FF] transition duration-200'
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						type='submit'
						disabled={isLoading}
					>
						{isLoading ? <Loader className='animate-spin mx-auto' size={24} /> : "Sign Up"}
					</motion.button>
				</form>
			</div>
			<div className='px-8 py-4 bg-[#2D2926FF] bg-opacity-50 flex justify-center'>
				<p className='text-sm text-gray-400'>
					Already have an account?{" "}
					<Link
						to={"/login"}
						className='text-[#E94B3CFF] hover:text-white transition-colors duration-200 hover:underline'
					>
						Login
					</Link>
				</p>
			</div>
		</motion.div>
	);
};

export default SignUpPage;
