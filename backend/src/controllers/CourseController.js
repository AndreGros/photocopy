const Course = require('../models/course');
const Messages = require('../config/validationMessages');

module.exports = {
    async createCourse(req, res) {
        const { code, name } = req.body;

        const postCourse = await Course.create({
            code,
            name
        });

        return res.status(201).json({ id: postCourse.id });
    },
    
    async getAllCourses(req, res) {
        const courses = await Course.findAll();

        return res.json(courses);
    },

    async getCourse(req, res) {
        const course = await Course.findByPk(req.params.id);
            
        if(course === null) {
            res.status(404).json({ message: Messages.MESSAGE_NOT_FOUND });
        } else {
            return res.json(course);
        }
    },

    async updateCourse(req, res) {

        const putCourse = await Course.findByPk(req.params.id);
        
        const { code, name } = req.body;

        await putCourse.update({
            code,
            name
        });

        return res.status(204).json();
    }
}