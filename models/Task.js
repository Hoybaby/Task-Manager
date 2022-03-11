// this will set up how the task will be displayed in the task list and database

const mongoose = require('mongoose');

// this will setup the structure of the task in database        
const TaskSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'Task name is required'],
        trim: true,
        maxlength: [20, 'Task name cannot be more than 20 characters'],
    }, 
    completed: {
        type: Boolean,
        default: false,
    }

})

// if the schema defines the structure for the document, mongoose model would make CRUD with ease.

module.exports = mongoose.model('Task', TaskSchema);