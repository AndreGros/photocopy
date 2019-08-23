const express = require('express');

const TeacherController = require('./controllers/TeacherController');
const CourseController = require('./controllers/CourseController');

const routes = new express.Router();

//Middlewares para a ação relacionada aos professores
routes.post('/teachers', TeacherController.createTeacher);
routes.get('/teachers', TeacherController.getAllTeachers);
routes.get('/teachers/:_id', TeacherController.getTeacher);
routes.put('/teachers/:_id', TeacherController.updateTeacher);

////Middlewares para a ação relacionada aos cursos
routes.post('/courses', CourseController.createCourse);
routes.get('/courses', CourseController.getAllCourses);
routes.get('/courses/:_id', CourseController.getCourse);
routes.put('/courses/:_id', CourseController.updateCourse);


module.exports = routes;