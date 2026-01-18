import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import useAuth from "../hooks/useAuth";
import { postedJobs } from "../services/JobService";

const CompanyDashboard = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  
    useEffect(() => {
      const fetchJobs = async () => {
        try {
          const res = await postedJobs();
          setJobs(res.data.jobs);
        } catch (err) {
          console.error("Failed to load jobs");
        }
      };
  
      fetchJobs();
    }, []);
  return (
    <>
    <div className="container mt-5">
      <h2>Company Dashboard</h2>
      <p>Company: {user?.name}</p>
    </div>
    <div className="container mt-4">
      <h3>Posted Jobs</h3>

      {jobs.length === 0 && <p>No jobs found</p>}

      {jobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
    </>
  );
};

export default CompanyDashboard;
