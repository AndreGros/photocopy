const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Teacher = require('../models/teacher');
const Course = require('../models/course');

const connection = new Sequelize(dbConfig);

Teacher.init(connection);
Course.init(connection);

module.exports = connection;