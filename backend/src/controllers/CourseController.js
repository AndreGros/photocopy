const Course = require('../models/course');
const Messages = require('../config/validationMessages');

module.exports = {
    async createCourse(req, res) {
        const { code, name } = req.body;

        const postCourse = await Course.create({
            code,
            name
        });

        return res.status(201).json({ id: postCourse._id });
    },
    
    async getAllCourses(req, res) {
        const courses = await Course.find().sort('-createdAt');

        return res.json(courses);
    },

    async getCourse(req, res) {
        await Course.findById(req.params._id, function(error, course) {
            if(error || course == null) {
                res.status(404).json({ message: Messages.MESSAGE_NOT_FOUND });
            } else {
                res.json(course);
            }
        });

        return res.json(course);
    },

    async updateCourse(req, res) {

        const putCourse = await Course.findById(req.params._id);
        
        const { code, name } = req.body;

        await putCourse.updateOne({
            code,
            name
        });

        return res.status(204).json();
    }
}