const mongoose = require('mongoose');

const schemaUser = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    }
}, {
    timestamps: true
}).plugin();

const ModelUser = mongoose.model('User', schemaUser);
module.exports = User;