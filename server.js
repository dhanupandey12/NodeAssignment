const express = require('express');

const app = express();

const port = 3000;
const connectDB = require('./db')
const user = require('./routes/user')
const auth = require('./routes/auth')


app.use(express.json());


connectDB();

app.use('/api/', user)
app.use('/api/', auth)


app.listen(port, ()=> {
    console.log(`server is running on port ${port}`)
})