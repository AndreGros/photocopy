const Discipline = require('../models/discipline');

module.exports = {
    async createDiscipline(req, res) {
        Discipline.findOne({ teacher: req.params.teacher }).populate('Teacher');
        Discipline.findOne({ course: req.params.course }).populate('Course');
        
        const { code,name,academicYear,numberCopies,teacher,course} = req.body;
        

        const postDiscipline = await Discipline.create({
            code,
            name,
            academicYear,
            numberCopies,
            teacher: teacher._id,
            course: course._id
        });

        return res.status(201).json({ id: postDiscipline._id });
    },

    async getAllTDisciplines(req, res) {
        const disciplines = await Discipline.find().sort('-createdAt');

        return res.json(disciplines);
    },
}