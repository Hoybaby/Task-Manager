const express = require('express');
const router = express.Router();

//will import controllers latrer

// accesing the controlers i made in the controllers folder
// I am doing this so I dont have to hard corde the routers
const {
    getAllTasks, 
    createTask, 
    getTask, 
    updateTask, 
    deleteTask} = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTask);

router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask); 

module.exports = router;