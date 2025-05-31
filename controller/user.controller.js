import User from "../models/user.models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createUser = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(val.password, salt);

        const val = await User.create({ ...req.body, password: hashedPassword }, { runValidators: true });

        return res.send(val).status(200);
    } catch (error) {
        return res.send(error).status(400);
    }
};

const generateTokens = (user) => {
    const accessToken = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "15m" }
    );
    const refreshToken = jwt.sign(
        { id: user._id },
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: "7d" }
    );
    return { accessToken, refreshToken };
};

const Login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ message: "No user found by this email" });
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid Username or Password" });
        }
        const { accessToken, refreshToken } = generateTokens(user);
        return res.status(200).json({ message: "success", accessToken, refreshToken, user });
    } catch (error) {
        return res.status(400).send(error);
    }
};

const refreshAccessToken = async (req, res) => {
    const { refreshToken } = req.body;
    if (!refreshToken) {
        return res.status(401).json({ message: "Refresh token required" });
    }
    try {
        const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
        const user = await User.findById(payload.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const accessToken = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "15m" }
        );
        return res.status(200).json({ accessToken });
    } catch (error) {
        return res.status(403).json({ message: "Invalid refresh token" });
    }
};

export { createUser, Login, refreshAccessToken };