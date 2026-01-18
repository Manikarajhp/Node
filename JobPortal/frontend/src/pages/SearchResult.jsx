import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchResult = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    role: "",
    location: "",
    salary: ""
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
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
            name="role"
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
  );
};

export default SearchResult;
