
const mongoose = require('mongoose');

const connectionString = `mongodb+srv://hoybaby:Welcome0@firstcluster.b4kva.mongodb.net/TaskManager?retryWrites=true&w=majority`;


mongoose
.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})
.then(() => console.log('Connected to database...'))
.catch(err => console.log(err));