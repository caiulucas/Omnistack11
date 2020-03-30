const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

//Imports of controllers
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//Imports of validators
const OngValidator = require('./validations/OngValidator');
const IncidentValidator = require('./validations/IncidentValidator');
const ProfileValidator = require('./validations/ProfileValidator');

const routes = express.Router();

//GET
routes.get('/ongs', OngController.index);
routes.get('/profiles', ProfileValidator.get, ProfileController.index);
routes.get('/incidents', IncidentValidator.get, IncidentController.index);

//POST
routes.post('/sessions', SessionController.create);
routes.post('/ongs', OngValidator.post, OngController.create);
routes.post('/incidents', IncidentController.create);

//DELETE
routes.delete('/incidents/:id', IncidentValidator.delete, IncidentController.delete);

module.exports = routes;

