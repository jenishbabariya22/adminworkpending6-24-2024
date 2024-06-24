const express = require('express');
const { viewAdmin, addAdminPage, adduser } = require('../controllers/Adminontroller');
const passport = require('passport');
const { addcategoryinput } = require('../controllers/CategoryController');


const routes = express.Router();

routes.get('/',passport.checkAuth,viewAdmin) 
routes.get('/addadmin',addAdminPage)
routes.post('/addcategoryinput',adduser)


module.exports = routes;