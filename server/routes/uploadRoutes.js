
const {Uploader} = require('../controllers/uploads'); 
const express = require('express');
const app = express();

const uploadRouter = app.post('/upload', Uploader.sendToDb, console.log("uploadRoutes Controller")); 

// const uploadRouter = (app) => { 

// app.post('/upload', Uploader.sendToDb); 

// }

module.exports = uploadRouter; 


