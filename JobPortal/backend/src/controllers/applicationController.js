const Application = require("../models/Application")
const Job = require("../models/Job")

const applyJob = async (req, res) => {
    try{

        const jobId = req.params.jobId;
        const userId = req.user._id;

        const application = await Application.create(
            {
                job : jobId,
                applicant : userId
            }
        );

        res.status(201).json({
            message : "Job Applieded.",
            application
        })

    }catch(error){
        if (error.code === 11000) {
            return res.status(400).json({
              message: "You already applied for this job"
            });
        }
        res.status(500).json({message : `Server Error : ${error}`})
    }
}

const getApplicantsForJob = async (req, res) => {
    try{
        
        const jobId = req.params.jobId;
        
        const job = await Job.findById(jobId)

        if(!job){
            return res.status(404).json({message : "Job not found"})
        }

        if (job.company.toString() !== req.user._id.toString()) {
          return res.status(403).json({
            message: "Not authorized to view applicants"
          });
        }

        const applicants = await Application.find({ job : jobId }).populate('applicant', 'name email role')

        res.status(200).json({
            totalApllicants : applicants.length,
            applicants
        });

    }catch(error){
        res.status(500).json({message : `Server error : ${error}`})
    }
}

const updateApplicationStatus = async (req, res) => {
    try{

        const {status} = req.body;
        const applicationId = req.params.id;

        const application = await Application.findById(applicationId).populate("job")

        if(!application){
            return res.status(400).json({message : "Application not found!"})
        }
        
        if(application.job.company.toString() !== req.user._id.toString()){
            return res.status(401).json({message : "Unauthorized access."})
        }

        application.status = status;
        await application.save();

        res.status(200).json({
            message : "Status updated",
            application
        })

    }catch(error){
        res.status(500).json({message : `Server error : ${error}`})
    }
}

const myApplications = async (req, res) => {
    try{
        const applications = await Application.find({applicant : req.user._id}).populate("job")
        if(!applications){
            return res.status(404).json({message : "No applications."})
        }
        res.status(200).json({
            applications
        });
    }catch(error){
        res.status(500).json({message : `Server error : ${error}`})
    }
}

module.exports = { applyJob, getApplicantsForJob, updateApplicationStatus, myApplications};