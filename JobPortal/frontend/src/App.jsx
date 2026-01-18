import {BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./routes/ProtectedRoute";
import RoleRoute from "./routes/RoleRoute";
import UserDashboard from "./pages/UserDashboard";
import CompanyDashboard from "./pages/CompanyDashboard";
import Navbar from "./components/Navbar";
import JobDetails from "./pages/JobDetails";
import PostJob from "./pages/PostJob";
import AppliedJobs from "./pages/AppliedJobs";
import Profile from "./pages/Profile";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/user"
        element={
          <ProtectedRoute>
            <RoleRoute role="user">
              <UserDashboard />
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/company"
        element={
          <ProtectedRoute>
            <RoleRoute role="company">
              <CompanyDashboard />
            </RoleRoute>
          </ProtectedRoute>
        }
      />
    <Route
      path="/jobs/:id"
      element={
        <ProtectedRoute>
          <JobDetails />
        </ProtectedRoute>
      }
    />
    <Route
      path="/company/post-job"
      element={
        <ProtectedRoute>
          <RoleRoute role="company">
            <PostJob />
          </RoleRoute>
        </ProtectedRoute>
      }
    />
    <Route
      path="/user/applied"
      element={
        <ProtectedRoute>
          <RoleRoute role="user">
            <AppliedJobs />
          </RoleRoute>
        </ProtectedRoute>
      }
    />
    <Route
      path="/user/profile"
      element={
        <ProtectedRoute>
          <RoleRoute role="user">
            <Profile />
          </RoleRoute>
        </ProtectedRoute>
      }
    />
    <Route
      path="/user/:id"
      element={
        <ProtectedRoute>
          <RoleRoute role="company">
            <Profile />
          </RoleRoute>
        </ProtectedRoute>
      }
    />
    </Routes>

    </>
  );
}

export default App;
