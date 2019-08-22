const express = require('express');

const TeacherController = require('./controllers/TeacherController');

const routes = new express.Router();


//Middlewares para a ação relacionada aos professores
routes.post('/teachers', TeacherController.createTeacher);
routes.get('/teachers', TeacherController.getAllTeachers);
routes.get('/teachers/:_id', TeacherController.getTeacher);
routes.put('/teachers/:_id', TeacherController.updateTeacher);

//Middlewares para outras acoes em outros schemas (Curso, Disciplinas e etc);


module.exports = routes;