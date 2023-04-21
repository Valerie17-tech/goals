const express = require('express')
const router  = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalsControllers')

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').delete(deleteGoal).put(updateGoal)

// router.get('/', getGoals)
// router.post('/', setGoals)
// router.put('/:id', updateGoals)
// router.delete('/:id', deleteGoals)

module.exports = router