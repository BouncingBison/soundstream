// app server main
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // load development environment vars from .env
    console.log('Server starting in development mode...');
    require('dotenv').config();
} else {
    console.log('Server starting in production mode...');
}

// init server state
//   console.log(`Server random value: ${require('./api/state').random}`);

// setup server
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
app.set('port', process.env.PORT || 3006);

// logging config
if (process.env.NODE_ENV === 'production') {
    app.use(morgan('common'));
} else {
    app.use(morgan('dev'));
}

// load api routers
//   const apiRouter = require('./api/routes');
// parse application/json then use the api routers
//   app.use('/api', bodyParser.json(), apiRouter);


// >>>>>>    NEED TO RUN NPM BUILD    <<<<< 

//   // serve static client assets in production
//   if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(__dirname + '/app/build'));
//     //app.get('/', (req, res) => { res.redirect(301, '/app'); });
//     app.get('*', (req, res) => {
//       res.sendFile(__dirname + '/app/build/index.html');
//     });
//   }

// const mongodb = require("mongo"); 
const mongoose = require("mongoose");
const MONGO_URI = "mongodb://crateTest:password@ds125489.mlab.com:25489/crate";

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true
});

mongoose.connection.once("open", function () {

    console.log('======== open =======');

});



// start listening
app.listen(app.get('port'), () => {
    console.log(`Server started and listening on port ${app.get('port')}`);
});