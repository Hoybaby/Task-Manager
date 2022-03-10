
const mongoose = require('mongoose');



// refactoring the code where the server and database are launched at the same time and checking if the connection is successful.
const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useFindAndModify: false, 
        useCreateIndex: true})
        
}

module.exports = connectDB;