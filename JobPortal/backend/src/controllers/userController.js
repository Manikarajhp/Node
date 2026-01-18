
const User = require("../models/User")
const Application = require("../models/Application")

const updateUser = async(req, res) => {
    try{
        const {name, phone, experience, skills} = req.body;
        
        const userId = req.params.id;

        const userData = await User.findById(userId);
        

        if(!userData){
            return res.status(404).json({message : "User not found"})
        }
        
        if(name){
            userData.name = name;
        }
        if(phone){
            userData.phone = phone;
        }
        if(experience){
            userData.experience = experience;
        }
        if(skills){
            userData.skills = skills;
        }
        await userData.save();

        res.status(200).json({message : "Updated Successfully."})



    }catch(error){
        return res.status(500).json({messsage : `Server error : ${error}`})
    }
}

const searchByApplicationId = async(req, res) => {
    try{
        const applicationId = req.params.id;
        const application = await Application.findById(applicationId);

        const userData = await User.findById(application.applicant._id);
        
        if(!userData){
            return res.status(404).json({message : "User not found"})
        } 

        return res.status(200).json({userData})
    }catch(error){
        return res.status(500).json({messsage : `Server error : ${error}`})
    }
}

module.exports = { updateUser, searchByApplicationId };