const express = require('express');
const router = express.Router();

//will import controllers latrer

// accesing the controlers i made in the controllers folder
// I am doing this so I dont have to hard corde the routers
const {getAllTasks, createTask, getTask, updateTask, deleteTask} = require('../controllers/tasks');

router.route('/').get(getAllTasks);

module.exports = router;