const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Teacher = require('../models/teacher');
const Course = require('../models/course');
const Discipline = require('../models/discipline');

const connection = new Sequelize(dbConfig);

Teacher.init(connection);
Course.init(connection);
Discipline.init(connection);

Discipline.associate(connection.models);

module.exports = connection;