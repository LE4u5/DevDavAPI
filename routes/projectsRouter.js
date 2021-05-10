const express = require('express');
const mongoose = require('mongoose');
const Project = require('../data/models/projects');
const dotenv = require('dotenv');

dotenv.config();
const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;

mongoose.connect(DB_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true});

const projectsRouter = express.Router();

projectsRouter.route('/list')
.get( async (req, res) => {
    const time = new Date();
        console.log(`${time.toDateString()} ${time.toLocaleTimeString()}: GET REQUEST FROM ${req.headers.origin}/${req.ip}`);
    try{
    const projectsArray = await Project.find({});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(projectsArray));
    }
    catch(err){
        console.log('Failed Request. :', err)
    }
})

module.exports = projectsRouter;