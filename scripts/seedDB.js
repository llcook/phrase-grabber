const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/webspeech"
);

// reference: 10.5 MERN 1:05:00ish
// reference: 11 reactrouter seedDB

const noteSeed = [
    {
        note: "note example 01",
        date: new Date(Date.now())
    },
    {
        note: "note example 02",
        date: new Date(Date.now())
    },
    {
        note: "note example 03",
        date: new Date(Date.now()) 
    },
    {
        note: "note example 04",
        date: new Date(Date.now())
    },
    {
        note: "note example 05",
        date: new Date(Date.now())
    },
    {
        note: "note example 06", 
        date: new Date(Date.now())
    }
];

db.Note
    .remove({})
    .then(() => db.Note.collection.insertMany(noteSeed))
    .then(data => {
        console.log(data.result.n + "records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });