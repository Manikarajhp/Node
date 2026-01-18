import { useEffect, useState } from "react";
import { filterJobs, getAllJobs } from "../services/jobService";
import JobCard from "../components/JobCard";
import SearchResult from "./SearchResult";
import { useParams } from "react-router-dom";

const UserDashboard = () => {
  
  const [jobs, setJobs] = useState([]);
  const [searched, setSearched] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await getAllJobs();
        setJobs(res.data.jobs);
        setSearched(res.data.jobs)
      } catch (err) {
        console.error("Failed to load jobs");
      }
    };

    fetchJobs();
  }, []);

  const [filters, setFilters] = useState({
    keyword: "",
    location: "",
    salary: ""
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const res = await filterJobs(filters);
    setSearched(res.data.jobs);
  };

  return (
    <div className="mt-4 d-flex">
      <div className="container w-25">
        <form
          className="bg-light p-4 rounded shadow-sm mb-4 "
          onSubmit={handleSubmit}
        >
          <h4>Filters</h4>
          <div className="d-flex flex-column">
            {/* ROLE / TITLE */}
            <div>
              <label className="form-label">Job Role</label>
              <input
                type="text"
                className="form-control"
                placeholder="Frontend Developer"
                name="keyword"
                value={filters.role}
                onChange={handleChange}
              />
            </div>

            {/* LOCATION */}
            <div>
              <label className="form-label">Location</label>
              <input
                type="text"
                className="form-control"
                placeholder="Chennai"
                name="location"
                value={filters.location}
                onChange={handleChange}
              />
            </div>

            {/* SALARY RANGE */}
            <div>
              <label className="form-label">Salary Range</label>
              <select
                className="form-select"
                name="salary"
                value={filters.salary}
                onChange={handleChange}
              >
                <option value="">Select Salary</option>
                <option value="20000">₹20,000+</option>
                <option value="40000">₹40,000+</option>
                <option value="60000">₹60,000+</option>
                <option value="80000">₹80,000+</option>
                <option value="100000">₹1,00,000+</option>
              </select>
            </div>

            {/* BUTTON */}
            <div>
              <button className="btn btn-primary mt-3">
                Search Jobs
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="container">
        <h3>Available Jobs</h3>

        {searched.length === 0 && <p>No jobs found</p>}

        {searched.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
