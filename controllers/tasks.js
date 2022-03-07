

const getAllTasks = (req, res) => {
    res.send('get all tasks');
}

const createTask = (req, res) => {
    res.send('create a new task');
}

const getTask = (req, res) => {
    res.send('create a new task');
}

const getSingleTask = (req, res) => {
    res.send('get a single task');
}
const updatingTask = (req, res) => {
    res.send('update task');
}

const deleteTask = (req, res) => {
    res.send('delete task');
}

module.exports = {
    getAllTasks, createTask, getTask, getSingleTask, updatingTask, deleteTask 
}