import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          JobPortal
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            {!user && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
              </>
            )}

            {user && user.role === "user" && (
              <>
              <li className="nav-item">
                <Link className="nav-link" to="/user">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/user/applied">Applied Jobs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/user/profile">Profile</Link>
              </li>
              </>
            )}

            {user && user.role === "company" && (
              <>
              <li className="nav-item">
                <Link className="nav-link" to="/company">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/company/post-job">Post Job</Link>
              </li>
              </>
              
            )}

            {user && (
              <li className="nav-item">
                <button className="btn btn-danger ms-3" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
