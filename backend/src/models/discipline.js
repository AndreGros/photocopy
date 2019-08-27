const mongoose = require('mongoose');

const disciplineSchema = new mongoose.Schema ({
    code: {
        type: Number,
        min: 0,
        required: true
    },
    name: {
        type: String,
        minlength: 1,
        maxlength: 255,
        required: true
    },
    academicYear: {
        type: Number,
        min: 2
    },
    numberCopies: {
        type: Number,
        min: 1,
        required: true
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher'
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Discipline', disciplineSchema);