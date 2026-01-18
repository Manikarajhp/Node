const express = require("express")
const { applyJob, getApplicantsForJob, updateApplicationStatus, myApplications } = require("../controllers/applicationController")
const { protect } = require("../middleware/authMiddleware")
const { authorizeRoles } = require("../middleware/roleMiddleware")

const router = express.Router()

router.post('/:jobId', protect, authorizeRoles('user'), applyJob)
router.get('/job/:jobId', protect, authorizeRoles('company'), getApplicantsForJob)
router.put('/:id/status', protect, authorizeRoles('company'), updateApplicationStatus)
router.get('/my-applications', protect, authorizeRoles('user'), myApplications)


module.exports = router;
