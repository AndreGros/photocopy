const { Model, DataTypes } = require('sequelize');

class Teacher extends Model {
    static init(sequelize) {
        super.init({
            matriculation: DataTypes.INTEGER,
            name: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Teacher;