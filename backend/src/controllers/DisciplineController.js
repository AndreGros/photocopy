const Discipline = require('../models/discipline');
const Messages = require('../config/validationMessages');

module.exports = {
    async createDiscipline(req, res) {        
        const { code, name, academicYear, numberCopies } = req.body;

        const postDiscipline = await Discipline.create({
            code,
            name,
            academicYear,
            numberCopies
        });

        return res.status(201).json({ id: postDiscipline.id });
    },

    async getAllTDisciplines(req, res) {
        const disciplines = await Discipline.findAll();

        return res.json(disciplines);
    },

    async getDiscipline(req, res) {
        const discipline = await Discipline.findByPk(req.params.id);
            
        if(discipline === null) {
            res.status(404).json({ message: Messages.MESSAGE_NOT_FOUND });
        } else {
            return res.json(discipline);
        }
    },

    async updateDiscipline(req, res) {

        const putDiscipline = await Discipline.findByPk(req.params.id);
        
        const { code, name } = req.body;

        await putDiscipline.update({
            code,
            name,
            academicYear,
            numberCopies
        });

        return res.status(204).json();
    }
}