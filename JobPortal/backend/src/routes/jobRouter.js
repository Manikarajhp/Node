const express = require("express")
const {protect} = require("../middleware/authMiddleware")
const {createJob, getJob, myJobs, getJobById} = require("../controllers/jobController")
const { authorizeRoles } = require("../middleware/roleMiddleware")

const router = express.Router()

router.get('/getjobs', getJob)
router.get('/my-jobs', protect, authorizeRoles("company"), myJobs)
router.get('/:id', getJobById)

router.post('/createjob', protect, authorizeRoles("company"), createJob)


module.exports = router;