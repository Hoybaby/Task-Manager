require('./db/connect');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

const port = process.env.PORT || 3000;

// middleware
// if we dont do this, we wont have access to req.body
app.use(express.json());


// routes

// this is must to use routes. Need to make sure to get middleware from express 
app.use('/api/v1/tasks', tasks);

app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});