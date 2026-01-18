const Job = require("../models/Job")

//CREATE JOB
const createJob = async (req, res) => {
    try{
        const {title, description, salary, location} = req.body;

        if(!title || !description || !location){
            return res.status(400).json({message : "Some Fields are required."})
        }

        const job = await Job.create(
            {
                title,
                description,
                location,
                salary,
                company : req.user._id
            }
        )

        return res.status(200).json({message : "Job Posted"});

    }catch(error){
        return res.status(400).json({message : `Server error :${error}`});
    }

}

//GET JOBS
const getJob = async (req, res) =>{
    try{
        const {keyword, location, salary, company, page = 1, limit = 5} = req.query;

        let query = {};

        if (keyword) {
          query.$or = [
            { title: { $regex: keyword, $options: "i" } },
            { description: { $regex: keyword, $options: "i" } }
          ];
        }
    
        if (salary) query.salary = {$gt : salary};
        if (location) query.location = location;
        if (company) query.company = company;

        const jobs = await Job.find(query)
            .skip((page - 1) * limit)
            .limit(Number(limit))
            .sort({ createdAt : -1 })

        const totalJobs = await Job.countDocuments(query);
        
        res.status(200).json({
            totalJobs,
            currentPage: Number(page),
            totalPages: Math.ceil(totalJobs / limit),
            jobs
        });

    }catch(error){
        return res.status(500).json({message : `Server error  ${error}`})
    }
}


const myJobs = async (req, res) => {
    try{
        const jobs = await Job.find({company : req.user._id})
        if(!jobs){
            return res.status(404).json({message : "No Jobs posted."})
        }
        res.status(200).json({
            jobs
        });


    }catch(error){
        console.log("eerror");
        
        res.status(500).json({message : `Server error : ${error}`})
    }
}

const getJobById = async(req, res) => {
    try{
        const id = req.params.id
        const job = await Job.findById(id)

        if(!job){
            return res.status(404).json({message : "Job not found"})
        }

        res.status(200).json({message : "Success", job})
    }catch(error){
        return res.status(400).json({message : `Server error : ${error}`})
    }
}
module.exports = { createJob, getJob, myJobs, getJobById };