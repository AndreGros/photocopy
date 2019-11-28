const { Model, DataTypes } = require('sequelize');

class Discipline extends Model {
    static init(sequelize) {
        super.init({
            code: DataTypes.INTEGER,
            name: DataTypes.STRING,
            academicYear: DataTypes.INTEGER,
            numberCopies: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }

    static associations(models) {
        this.belongsTo(models.Teacher, { foreignKey: 'theacher_id', as: 'teacher' });
        this.belongsTo(models.Course, { foreignKey: 'course_id', as: 'course' });
    }
}

module.exports = Discipline;