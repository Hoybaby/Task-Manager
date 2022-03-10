
const Task = require('../models/Task');

const getAllTasks = (req, res) => {
    res.send('get all tasks');
}

// the create task will be async
const createTask = async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({task});
}

// this makes so in postman, the key will display id because of the name of the key and then call the value of the ID which it knows in the tasks.js in routes
const getTask = (req, res) => {
    res.json({id: req.params.id});
}

const updateTask = (req, res) => {
    res.send('update task');
}

const deleteTask = (req, res) => {
    res.send('delete task');
}

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask 
}