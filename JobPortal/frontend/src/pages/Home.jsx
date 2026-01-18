import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-dark text-light text-center py-5">
        <div className="container">
          <h1 className="display-5 fw-bold">Find the Right Job. Hire the Right Talent.</h1>
          <p className="lead mt-3">
            Search jobs, apply instantly, or post jobs and hire skilled candidates.
          </p>
          <div className="mt-4">
            <Link to="/register" className="btn btn-outline-light btn-lg">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center mb-4">
            <h2 className="fw-bold">What You Can Do</h2>
            <p className="text-muted">
              Simple, fast and role-based job hiring platform
            </p>
          </div>

          <div className="row g-4">
            {/* SEARCH JOBS */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">🔍 Search Jobs</h5>
                  <p className="card-text">
                    Find jobs based on skills, location and salary with smart filters.
                  </p>
                  <Link to="/register" className="btn btn-outline-primary">
                    Browse Jobs
                  </Link>
                </div>
              </div>
            </div>

            {/* APPLY JOBS */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">👤 Apply for Jobs</h5>
                  <p className="card-text">
                    Create a profile, apply to jobs and track your applications.
                  </p>
                  <Link to="/register" className="btn btn-outline-primary">
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>

            {/* POST JOBS */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">📝 Post Jobs</h5>
                  <p className="card-text">
                    Companies can post jobs and manage applicants easily.
                  </p>
                  <Link to="/company/post-job" className="btn btn-outline-primary">
                    Post a Job
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="fw-bold">About Our Platform</h2>
              <p className="text-muted mt-3">
                This job portal connects job seekers and companies through a
                secure, role-based system. Users can search and apply for jobs,
                while companies can post jobs and manage applicants.
              </p>
              <p className="text-muted">
                Built using React, Node.js, Express, MongoDB and JWT authentication.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="job portal"
                className="img-fluid"
                style={{ maxHeight: "250px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-light text-center py-3">
        <p className="mb-0">
          © {new Date().getFullYear()} Job Portal | Built with ❤️ using MERN Stack
        </p>
      </footer>
    </>
  );
};

export default Home;
