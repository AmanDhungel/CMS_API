export const verifyToken = (req, res, next) => {
    try {
        const bearerHeader = req.headers["authorization"];
        if (!bearerHeader) {
            return res.sendStatus(403);
        }
        const [scheme, token] = bearerHeader.split(" ");
        if (scheme !== "Bearer" || !token) {
            return res.sendStatus(403);
        }
        req.token = token;
        next();
    } catch (error) {
        res.sendStatus(500);
    }
};