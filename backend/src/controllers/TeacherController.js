const Teacher = require('../models/teacher');
const Messages = require('../config/validationMessages')

module.exports = {

    async getAllTeachers(req, res) {
        const teachers = await Teacher.find().sort('-createdAt');

        return res.json(teachers);
    },

    async getTeacher(req, res) {
        await Teacher.findById(req.params._id, function(error, teacher) {
            if(error || teacher == null) {
                res.status(404).json({ message: Messages.MESSAGE_NOT_FOUND });
            } else {
                res.json(teacher);
            }
        });

        return res.json(teacher);
    },

    async createTeacher(req, res) {
        const { matriculation, name } = req.body;

        const postTeachers = await Teacher.create({
            matriculation,
            name
        });

        return res.status(201).json({ id: postTeachers._id });
    },

    async updateTeacher(req, res) {

        const putTeacher = await Teacher.findById(req.params._id);
        
        const { matriculation, name } = req.body;

        await putTeacher.updateOne({
            matriculation,
            name
        });

        return res.status(204).json();
    }

}