const mongoose = require('mongoose');
//let Schema = mongoose.Schema;

const teacherSchema = new mongoose.Schema({
    matriculation: {
        type: Number,
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

module.exports = mongoose.model('Teacher', teacherSchema);