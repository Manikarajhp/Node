import { useState } from "react";
import { postJob } from "../services/jobService";
import useAuth from "../hooks/useAuth";

const PostJob = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    salary: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { ...formData, companyName: user.name };
      await postJob(data);
      alert("Job posted successfully 🎉");
      setFormData({ title: "", description: "", location: "", salary: "" });
    } catch (err) {
      alert(err.response?.data?.message || "Failed to post job");
    }
  };

  return (
    <div className="container mt-4">
      <h3>Post a New Job</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          name="title"
          placeholder="Job Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          className="form-control mb-2"
          name="description"
          placeholder="Job Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-2"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-2"
          name="salary"
          placeholder="Salary"
          value={formData.salary}
          onChange={handleChange}
          required
        />

        <button className="btn btn-primary">Post Job</button>
      </form>
    </div>
  );
};

export default PostJob;
