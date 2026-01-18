import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { applyJob, getJobById } from "../services/jobService";
import BackButton from "../components/BackButton";
import ApplicationTable from "./ApplicationTable";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));
  

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await getJobById(id);
        setJob(res.data.job);
      } catch (err) {
        console.error("Failed to load job details");
      }
    };

    fetchJob();
  }, [id]);

  if (!job) return <p className="text-center mt-5">Loading...</p>;

  const handleEnroll = async() => {
    try{
      const res = await applyJob(id);
      alert(res.data.message)
    }catch(error){
      if(error.status === 400){
        alert((error.response.data.message));
      }
    }
    
  };

  return (
    <div className="container mt-4">
      <BackButton/>

      <h2>{job.title}</h2>
      <p className="text-muted">{job.companyName}</p>

      <hr />

      <p><strong>Description:</strong></p>
      <p>{job.description}</p>

      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <p><strong>Posted On:</strong> {new Date(job.createdAt).toDateString()}</p>
      {user.role === "user" && (<button className="btn btn-success mt-3" onClick={handleEnroll}>
        Enroll
      </button>)}
      {user.role === "company" && (
        <ApplicationTable id = {job._id} />
      )}
    </div>
  );
};

export default JobDetails;
