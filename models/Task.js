// this will set up how the task will be displayed in the task list and database

const mongoose = require('mongoose');

// this will setup the structure of the task in database        
const TaskSchema = new mongoose.Schema({
    name: String, completed: Boolean

})

// if the schema defines the structure for the document, mongoose model would make CRUD with ease.

module.exports = mongoose.model('Task', TaskSchema);