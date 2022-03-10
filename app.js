
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');

// middleware
// if we dont do this, we wont have access to req.body
app.use(express.json());
// routes
// this is must to use routes. Need to make sure to get middleware from express 
app.use('/api/v1/tasks', tasks);

const port = process.env.PORT || 3000;

// since i am returning a promise in the connect.js, i can use the await keyword.
const start = async () => {
    try {
        await connectDB();
        app.listen(port, () => {
            console.log(`Server is running on port ${port}...`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}...`);
// });