import express from 'express'
import { createJob, deleteJob, getAllJobs, showStats, updateJob } from '../controller/job-controller.js'
const router = express.Router()
import testUser from '../middleware/testUser.js'


router.route('/').post(testUser, createJob).get(getAllJobs)
router.route('/stats').get(showStats)
router.route('/:id').delete(testUser, deleteJob).patch(updateJob)

export default router