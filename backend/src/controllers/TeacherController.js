const Teacher = require('../models/teacher');
const Messages = require('../config/validationMessages')

module.exports = {
    async createTeacher(req, res) {
        const { matriculation, name } = req.body;

        const postTeacher = await Teacher.create({
            matriculation,
            name
        });

        return res.status(201).json({ id: postTeacher.id });
    },

    async getAllTeachers(req, res) {
        const teachers = await Teacher.findAll();

        return res.json(teachers);
    },

    async getTeacher(req, res) {
        const teacher = await Teacher.findByPk(req.params.id);
            
        if(teacher === null) {
            res.status(404).json({ message: Messages.MESSAGE_NOT_FOUND });
        } else {
            return res.json(teacher);
        }
    },

    async updateTeacher(req, res) {

        const putTeacher = await Teacher.findByPk(req.params.id);
        
        const { matriculation, name } = req.body;

        await putTeacher.update({
            matriculation,
            name
        });

        return res.status(204).json();
    }

}