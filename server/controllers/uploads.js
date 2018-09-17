
var app = require('express')();
var bodyParser = require("body-parser");

// Mongo DB modules 
var GridFSBucket = require('mongodb').GridFSBucket;
var Grid = require('gridfs-stream');
const mongoose = require("mongoose");



const Uploader = (req, res) => {


    console.log("heyyyyyyy"); 
// put mongoDb piping in here
        req.db // => Db object
        res.set('content-type', 'audio/mp3');
        res.set('accept-ranges', 'bytes');

        var files = req.audio;

        upload(db, files);

        function upload(db, files) {

            console.log("starting bucket");

            // var gfs = Grid(db, mongo);
            // // streaming to gridfs
            // var writestream = gfs.createWriteStream({
            //     filename: './bla.mp3'
            // });
            // this uses fs to create a read stream of a file and then that is piped to write stream
            // gfs.createReadStream(files).pipe(writestream);

            const readableTrackStream = new Readable();


            let bucket = new mongoose.GridFSBucket(db, {
                bucketName: 'user4'
            });

            readableTrackStream.push(files);
            readableTrackStream.push(null);

            //error handling, e.g. file does not exist
            readableTrackStream.on('error', function(err) {
                console.log('An error occurred!', err);
                throw err;
            });

            let uploadStream = bucket.openUploadStream(files);

            readableTrackStream.pipe(uploadStream);


            uploadStream.on('data', (chunk) => {
                console.log('data')
                console.log(chunk);
            })

            uploadStream.on('error', (chunk) => {
                console.log('err');
            })

            uploadStream.on('end', () => {
                console.log('end');
            })



        }




}



module.exports = Uploader; 