const express = require('express');

const TeacherController = require('./controllers/TeacherController');
const CourseController = require('./controllers/CourseController');
const DisciplineController = require('./controllers/DisciplineController');

const routes = new express.Router();

//Middlewares para a ação relacionada aos professores
routes.post('/teachers', TeacherController.createTeacher);
routes.get('/teachers', TeacherController.getAllTeachers);
routes.get('/teachers/:id', TeacherController.getTeacher);
routes.put('/teachers/:id', TeacherController.updateTeacher);

//Middlewares para a ação relacionada aos cursos
routes.post('/courses', CourseController.createCourse);
routes.get('/courses', CourseController.getAllCourses);
routes.get('/courses/:id', CourseController.getCourse);
routes.put('/courses/:id', CourseController.updateCourse);

//Middlewares para a ação relacionada as disciplinas
routes.post('/disciplines', DisciplineController.createDiscipline);
routes.get('/disciplines', DisciplineController.getAllTDisciplines);
routes.get('/disciplines/:id', DisciplineController.getDiscipline);
routes.get('/disciplines/:id', DisciplineController.updateDiscipline);

module.exports = routes;