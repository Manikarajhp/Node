import axiosInstance from "./axios";

export const getAllJobs = () =>
  axiosInstance.get("/jobs/getjobs");

export const getJobById = (id) =>
  axiosInstance.get(`/jobs/${id}`);

export const filterJobs = (filters) =>
  axiosInstance.get(`jobs/getjobs/`, {params : filters})

export const postJob = (jobData) =>
  axiosInstance.post("/jobs/createjob", jobData);

export const postedJobs = () =>
  axiosInstance.get("/jobs/my-jobs")

export const userProfile = () =>
  axiosInstance.get("/users/profile")

export const userProfileById = (id) =>
  axiosInstance.get(`/users/${id}`)

export const userProfileUpdate = (id, user) =>
  axiosInstance.patch(`users/update/${id}`, user)

export const appliedJobs = () =>
  axiosInstance.get("/applications/my-applications")

export const applyJob = (id) =>
  axiosInstance.post(`/applications/${id}`)

export const myApplications = (id) =>
  axiosInstance.get(`/applications/job/${id}`)

export const applicationStatusUpdate = (id, status) =>
  axiosInstance.put(`applications/${id}/status`, status)