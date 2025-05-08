// routes/serviceRoutes.js
const express = require('express');
const authenticateToken = require("../middleware/auth")

const authorization = require("../middleware/authoraziation")

const {createService,getServiceById,getAllSerivces,updateService,deleteService} = require('../controllers/serviceController');
const serviceRouter = express.Router();

serviceRouter.post("/newService",authenticateToken,authorization("read"), createService);
serviceRouter.get('/', getAllSerivces);
serviceRouter.get('/:id',authenticateToken,getServiceById );
serviceRouter.put('/:id',authenticateToken,updateService);
serviceRouter.delete('/:id',authenticateToken,deleteService );

module.exports = serviceRouter;