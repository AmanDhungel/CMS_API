import { jwtVerify } from 'jose';  // Solution 2

export const verifyToken = async (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"];
        if (!authHeader) {
            return res.status(403).json({ message: "Authorization header missing" });
        }

        const token = authHeader.startsWith('Bearer ')
            ? authHeader.split(' ')[1]
            : authHeader;

        if (!token) {
            return res.status(403).json({ message: "Token missing" });
        }

        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const { payload } = await jwtVerify(token, secret);

        req.token = token;
        req.user = payload;
        next();
    } catch (error) {
        console.error("Token verification failed:", error);
        if (error.code === 'ERR_JWT_EXPIRED') {
            return res.status(401).json({ message: "Token expired" });
        }
        return res.status(401).json({ message: "Unauthorized" });
    }
};