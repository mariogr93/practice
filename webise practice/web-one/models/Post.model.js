const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    name: String,
    username: String,
    password: Number

});

module.exports = mongoose.model('Posts', PostSchema); // Posts es el nombre que saldra en mlab

