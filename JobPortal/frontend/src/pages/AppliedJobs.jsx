import React, { useEffect, useState } from 'react'
import { appliedJobs } from '../services/JobService';
import JobCard from '../components/JobCard';
import BackButton from '../components/BackButton';

export default function AppliedJobs() {
  const [applications, setapplications] = useState([]);

  useEffect(() => {
    const fetchapplications = async () => {
      try {
        const res = await appliedJobs();
        setapplications(res.data.applications);
      } catch (err) {
        console.error("Failed to load applications");
      }
    };

    fetchapplications();
  }, []);

  return (
    <div className="container mt-4">
      <BackButton />
      <h3>Available applications</h3>

      {applications.length === 0 && <p>No applications found</p>}

      {applications.map((application) => (
        <JobCard key={application.job._id} job={application.job} status={application.status} />
      ))}
    </div>
  );
}
