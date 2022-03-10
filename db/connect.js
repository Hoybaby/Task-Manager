
const mongoose = require('mongoose');

const connectionString = `mongodb+srv://hoybaby:Welcome0@firstcluster.b4kva.mongodb.net/TaskManager?retryWrites=true&w=majority`;

// refactoring the code where the server and database are launched at the same time and checking if the connection is successful.
const connectDB = (url) => {
    return mongoose.connect(connectionString, {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useFindAndModify: false, 
        useCreateIndex: true})
        
}

module.exports = connectDB;