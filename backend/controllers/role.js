
const role = async (req, res) => {
    const {  email, password } = req.body;
    console.log("from login")
    try {
        console.log("inisde try")
        await User.find({email});
        res.status(201).json({ message: 'User login successfully!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

