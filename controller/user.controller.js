import User from "../models/user.models";
import bcrypt from "bcrypt";

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

const Login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.email })
        if (!user) {
            return res.json({ message: "no User found by this email" })
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.json({ message: "Invalid Username or Password" })
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" })
        return res.status(200).json({ message: "success", token, user })

    } catch (error) {
        return res.send(error).status(400);

    }
}

export { createUser, Login };