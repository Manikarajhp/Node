import { Link } from "react-router-dom";

const JobCard = ({ job, status }) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5>{job.title}
          {status === "reviewed" && (<span className="fs-6 fw-light m-2 p-1 text-bg-warning rounded">reviewed</span>)}
          {status === "applied" && (<span className="fs-6 fw-light m-2 p-1 text-bg-info rounded">applied</span>)}
          {status === "rejected" && (<span className="fs-6 fw-light m-2 p-1 text-bg-danger rounded">rejected</span>)}
          {status === "accepted" && (<span className="fs-6 fw-light m-2 p-1 text-bg-success rounded">accepted</span>)}
        </h5>
        <p className="text-muted">{job.companyName}</p>
        <p>{job.description.substring(0, 100)}...</p>

        <Link to={`/jobs/${job._id}`} className="btn btn-primary btn-sm">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
