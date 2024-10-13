import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
	const token = req.cookies.token;  // Extract token from cookies
	if (!token) return res.status(401).json({ success: false, message: "Unauthorized - no token provided" });  // Return 401 if no token is provided

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Verify token using JWT_SECRET

		if (!decoded) return res.status(401).json({ success: false, message: "Unauthorized - invalid token" });  // Return 401 if the token is invalid

		req.userId = decoded.userId;  // Attach userId from the token payload to the request object
		next();  // Proceed to the next middleware
	} catch (error) {
		console.log("Error in verifyToken:", error);  // Corrected typo in the console log message
		return res.status(500).json({ success: false, message: "Server error" });  // Return 500 if an error occurs during token verification
	}
};
