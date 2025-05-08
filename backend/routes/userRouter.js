const express = require('express');
const usersRouter = express.Router();
const {register,login} = require('../controllers/userController');


usersRouter.post('/register',register); 
/////////////////////////////login/////////////////

usersRouter.post('/login',login );
////////////////////////////////////////////////

module.exports = usersRouter;