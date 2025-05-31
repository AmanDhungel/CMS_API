const getUser = async (req, res) => {
    try {
        const val = await User.find();
        res.send(val).status(200);
    } catch (error) {
        res.send(error).status(400);
    }
};
