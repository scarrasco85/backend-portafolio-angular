/** Fichero de configuración de las rutas del controlador /controller/project.js **/
'use strict'

//Cargamos el módulo de Express para poder trabajar con las rutas
var express = require('express');
//Cargamos el controlador que hemos creado /controllers/project.js para la entidad Project
var ProjectController = require('../controllers/project');
//Cargamos el método o servicio de Express Router que contiene métodos para trabajar con las rutas
var router = express.Router();


//** Creamos las rutas para el controlador /controllers/project **
router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
router.get('/project/:id?', ProjectController.getProject);
router.get('/get-projects', ProjectController.getProjects);
router.put('/update-project/:id?', ProjectController.updateProject);
router.delete('/delete-project/:id?', ProjectController.deleteProject);

//Exportamos el nuestro módulo router con toda la configuración de rutas
module.exports = router;