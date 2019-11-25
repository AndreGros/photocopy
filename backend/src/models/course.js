const { Model, DataTypes } = require('sequelize');

class Course extends Model {
    static init(sequelize) {
        super.init({
            code: DataTypes.INTEGER,
            name: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Course;