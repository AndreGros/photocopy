const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    code: {
        type: String,
        min: 0,
        required: true
    },
    name: {
        type: String,
        minlength: 1,
        maxlength: 80,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Course', courseSchema);