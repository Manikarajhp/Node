const User = require('../models/User')
const bcrypt = require('bcryptjs')
const generateToken = require('../utils/generateToken')


//REGISTER
const register = async(req, res) => {
    try{
        const {name, email, password, role} = req.body;

        if(!name || !email || !password){
            return res.status(400).json({message: "User details are invalid!"});
        }
        
        const UserExist = await User.findOne({email})
        if(UserExist){
            return res.status(400).json({message: "User details are invalid!"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role
        });

        return res.status(200).json({message : "Registered Successfully."})
    }catch(error){
        return res.status(400).json({message : `Failed on server.${error}`});
    }
}

//LOGIN
const login = async(req, res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({message: "User details are invalid!"});
        }

        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message: "Invalid credentials."});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message : "Incorrect Password!"})
        }

        const token = generateToken(user._id);

        res.status(200).json({
                message : "Logined Successfully",
                token : token,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role
            }
        })
    }catch(error){
        return res.status(400).json({message : `Login failed ${error.message}`})
    }
}


module.exports = { register, login };