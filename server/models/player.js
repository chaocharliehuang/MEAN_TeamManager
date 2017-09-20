var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2, maxlength: 256},
    position: {type: String, required: false, minlength: 2, maxlength: 256},
    game1: {type: Boolean, required: false, minlength: 2, maxlength: 256},
    game2: {type: Boolean, required: false, minlength: 2, maxlength: 256},
    game3: {type: Boolean, required: false, minlength: 2, maxlength: 256},
}, {timestamps: true});

mongoose.model('Player', PlayerSchema);