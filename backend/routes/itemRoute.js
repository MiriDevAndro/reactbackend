const express = require('express');
const itemModel = require('../models/models')

const app = express();

// crud
// create post request
app.post('', async(req, res)=> {

    try{

    }catch(err){
        res.status(500).send({error: err.message})
    }
})
// read request
app.get('', async(req, res)=> {

    try{

    }catch(err){
        res.status(500).send({error: err.message})
    }
})

// update request put patch request
app.patch('/', async(req, res)=> {

    try{

    }catch(err){
        res.status(500).send({error: err.message})
    }
})

// delete request
app.delete('/', async(req, res)=> {

    try{

    }catch(err){
        res.status(500).send({error: err.message})
    }
})

module.exports =app