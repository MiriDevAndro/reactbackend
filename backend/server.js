const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const session = require('express-session');
const itemRouter = require('./routes/itemRoute');




const app = express()

app.use(cors())

app.listen(5000,()=>{
    console.log('Server is running on port 5000')
});

app.use(itemRouter);

mongoose.connect('mongodb+srv://mirjansyla11:Pdzy3tD7jVkvpdqP@cluster0.y0drv.mongodb.net/MERN?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('Connected to MongoDB')
})
.catch(err =>{
    console.error('Error connecting to MongoDB', err)
})