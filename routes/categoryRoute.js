const express = require('express');
const { index, addcategory } = require('../controllers/CategoryController');

const routes = express.Router();

routes.get('/',index);
routes.get('/addcategory',addcategory)

module.exports = routes;