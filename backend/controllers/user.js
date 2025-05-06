const User = require('../models/users');

const login = async (req, res) => {
    const {  email, password } = req.body;
 
    try {
        console.log("inisde try")
        await User.find({email});
        res.status(201).json({ message: 'User login successfully!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


//////////////////////////////////


const registerUser = async (req, res) => {
    let role = ""
    const { Fname,Lname, email, password 
     } = req.body;

    try {
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ Fname,Lname, email, password: hashPassword });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const register = async (req, res) => {
    // let roleId = ""
    const { Fname,Lname, email, password,role } = req.body;
    // if(role === "admin"){


   
    try {
        
        const newUser = new User({ Fname,Lname, email, password ,role});
        await newUser.save();
        res.status(201).json({ message: 'User created successfully!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



const generateToken = (user) => {
    // the payload that will be sent to the client-side
    const payload = {
      name: user.name,
      userId: user._id,
      permissions: ["read"],
    };
  
    const options = {
      expiresIn: TOKEN_EXP_Time,
    };
  
    return jwt.sign(payload, SECRET, options);
  };
  

  module.exports = {
    login,
    register
}

   